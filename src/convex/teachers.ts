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

      // Fetch progress per student using the by_user index, filter by teacher subjects
      const studentProgress = await Promise.all(
        students.map(async (student) => {
          const progressForStudent = await ctx.db
            .query("progress")
            .withIndex("by_user", (q) => q.eq("userId", student._id))
            .collect();

          // If teacher has subjects, filter by them; otherwise include all
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