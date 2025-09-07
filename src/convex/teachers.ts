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

    // Associate this teacher with all existing students of the same grade
    const studentsInGrade = await ctx.db
      .query("users")
      .withIndex("by_role_and_grade", (q) => q.eq("role", "student").eq("grade", args.grade))
      .collect();

    for (const s of studentsInGrade) {
      const existing = await ctx.db
        .query("teacherStudents")
        .withIndex("by_teacher_and_student", (q) => q.eq("teacherId", user._id).eq("studentId", s._id))
        .unique()
        .catch(() => null);
      if (!existing) {
        await ctx.db.insert("teacherStudents", { teacherId: user._id, studentId: s._id });
      }
    }

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

      // Primary: Use explicit associations
      const links = await ctx.db
        .query("teacherStudents")
        .withIndex("by_teacher", (q) => q.eq("teacherId", user._id))
        .collect();

      const studentProgress = await Promise.all(
        links.map(async (link) => {
          const student = await ctx.db.get(link.studentId);
          if (!student) return null;

          // Load progress and optionally filter by teacher subjects
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

      const cleaned = studentProgress.filter((x): x is NonNullable<typeof x> => !!x);

      // If we have associated students, return them
      if (cleaned.length > 0) {
        return { teacher: user, studentProgress: cleaned };
      }

      // Fallback: Query by role AND grade (legacy or when associations not yet built)
      const students = await ctx.db
        .query("users")
        .withIndex("by_role_and_grade", (q) => q.eq("role", "student").eq("grade", user.grade!))
        .collect();

      if (students.length > 0) {
        const mapped = await Promise.all(
          students.map(async (student) => {
            const progressForStudent = await ctx.db
              .query("progress")
              .withIndex("by_user", (q) => q.eq("userId", student._id))
              .collect();

            const filtered =
              user.subjects && user.subjects.length > 0
                ? progressForStudent.filter((p) => user.subjects!.includes(p.subject))
                : progressForStudent;

            return { student, progress: filtered };
          }),
        );
        return { teacher: user, studentProgress: mapped };
      }

      // Existing subject-based fallback remains
      const subjectsToCheck =
        user.subjects && user.subjects.length > 0
          ? user.subjects
          : (["math", "physics", "english", "biology", "punjabi"] as const);

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

      const fallbackStudentProgress = Array.from(byUser.values());

      return {
        teacher: user,
        studentProgress: fallbackStudentProgress,
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