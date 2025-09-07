import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { GRADES, subjectValidator } from "./schema";
import { getCurrentUser } from "./users";

// Add: Set current user as a teacher with grade and subjects
export const setTeacherProfile = mutation({
  args: {
    grade: v.union(v.literal(GRADES.GRADE_8), v.literal(GRADES.GRADE_9), v.literal(GRADES.GRADE_10)),
    subjects: v.array(subjectValidator),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user) throw new Error("Unauthorized");
    await ctx.db.patch(user._id, { role: "teacher", grade: args.grade, subjects: args.subjects });
    return true;
  },
});

// Get teacher dashboard data
export const getTeacherDashboard = query({
  args: {},
  handler: async (ctx) => {
    try {
      const user = await getCurrentUser(ctx);
      // Return a safe empty payload during auth transitions or when not a teacher
      if (!user || user.role !== "teacher" || !user.grade) {
        return { teacher: user ?? null, studentProgress: [] };
      }

      // Query students by role AND grade using compound index
      const students = await ctx.db
        .query("users")
        .withIndex("by_role_and_grade", (q) =>
          q.eq("role", "student").eq("grade", user.grade!)
        )
        .collect();

      // If we found students as expected, load their progress and optionally filter by teacher subjects
      if (students.length > 0) {
        const studentProgress = await Promise.all(
          students.map(async (student) => {
            const progressForStudent = await ctx.db
              .query("progress")
              .withIndex("by_user", (q) => q.eq("userId", student._id))
              .collect();

            const filtered =
              user.subjects && user.subjects.length > 0
                ? progressForStudent.filter((p) => user.subjects!.includes(p.subject))
                : progressForStudent;

            return {
              student,
              progress: filtered,
            };
          }),
        );

        return {
          teacher: user,
          studentProgress,
        };
      }

      // Fallback: In some cases, students may not have role=student properly set yet,
      // but they do have recorded progress. Use progress-by-subject and join users by grade.
      const subjectsToCheck =
        user.subjects && user.subjects.length > 0
          ? user.subjects
          : (["math", "physics", "english", "biology", "punjabi"] as const);

      // Collect all progress docs for the teacher's subjects
      const progressDocs = (
        await Promise.all(
          subjectsToCheck.map(async (subject) => {
            const rows = await ctx.db
              .query("progress")
              .withIndex("by_subject", (q) => q.eq("subject", subject))
              .collect();
            return rows;
          }),
        )
      ).flat();

      // Group by user and filter by teacher's grade
      const byUser = new Map<string, { student: any; progress: any[] }>();
      for (const p of progressDocs) {
        const student = await ctx.db.get(p.userId);
        if (!student) continue;
        if (student.grade !== user.grade) continue;

        const key = student._id.toString();
        if (!byUser.has(key)) {
          byUser.set(key, { student, progress: [] });
        }
        byUser.get(key)!.progress.push(p);
      }

      const studentProgress = Array.from(byUser.values());

      return {
        teacher: user,
        studentProgress,
      };
    } catch {
      // On unexpected errors, return a safe empty payload
      return { teacher: null, studentProgress: [] };
    }
  },
});

// Get detailed progress for a specific subject
export const getSubjectProgressForTeacher = query({
  args: {
    subject: v.union(
      v.literal("math"),
      v.literal("physics"),
      v.literal("english"),
      v.literal("biology"),
      v.literal("punjabi"),
    ),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user || user.role !== "teacher") {
      throw new Error("Unauthorized");
    }

    if (!user.subjects?.includes(args.subject)) {
      throw new Error("You don't teach this subject");
    }

    if (!user.grade) {
      return [];
    }

    // Query students by role AND grade using compound index
    const students = await ctx.db
      .query("users")
      .withIndex("by_role_and_grade", (q) =>
        q.eq("role", "student").eq("grade", user.grade!)
      )
      .collect();

    // For each student, fetch progress and quiz attempts for the subject using by_user_and_subject
    const studentData = await Promise.all(
      students.map(async (student) => {
        const progress = await ctx.db
          .query("progress")
          .withIndex("by_user_and_subject", (q) =>
            q.eq("userId", student._id).eq("subject", args.subject),
          )
          .collect();

        const quizAttempts = await ctx.db
          .query("quizAttempts")
          .withIndex("by_user_and_subject", (q) =>
            q.eq("userId", student._id).eq("subject", args.subject),
          )
          .collect();

        return {
          student,
          progress: progress[0] ?? null,
          quizAttempts,
        };
      }),
    );

    return studentData;
  },
});