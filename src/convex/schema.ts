import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  TEACHER: "teacher",
  STUDENT: "student",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.TEACHER),
  v.literal(ROLES.STUDENT),
);
export type Role = Infer<typeof roleValidator>;

export const SUBJECTS = {
  MATH: "math",
  PHYSICS: "physics", 
  ENGLISH: "english",
  BIOLOGY: "biology",
  PUNJABI: "punjabi",
} as const;

export const subjectValidator = v.union(
  v.literal(SUBJECTS.MATH),
  v.literal(SUBJECTS.PHYSICS),
  v.literal(SUBJECTS.ENGLISH),
  v.literal(SUBJECTS.BIOLOGY),
  v.literal(SUBJECTS.PUNJABI),
);

export const GRADES = {
  GRADE_8: "8",
  GRADE_9: "9", 
  GRADE_10: "10",
} as const;

export const gradeValidator = v.union(
  v.literal(GRADES.GRADE_8),
  v.literal(GRADES.GRADE_9),
  v.literal(GRADES.GRADE_10),
);

const schema = defineSchema(
  {
    // default auth tables using convex auth.
    ...authTables, // do not remove or modify

    // the users table is the default users table that is brought in by the authTables
    users: defineTable({
      name: v.optional(v.string()), // name of the user. do not remove
      image: v.optional(v.string()), // image of the user. do not remove
      email: v.optional(v.string()), // email of the user. do not remove
      emailVerificationTime: v.optional(v.number()), // email verification time. do not remove
      isAnonymous: v.optional(v.boolean()), // is the user anonymous. do not remove

      role: v.optional(roleValidator), // role of the user. do not remove
      
      // Additional fields for teachers and students
      grade: v.optional(gradeValidator),
      subjects: v.optional(v.array(subjectValidator)), // subjects teacher teaches or student studies
      studentId: v.optional(v.string()), // unique student ID for login
      phone: v.optional(v.string()),
      school: v.optional(v.string()),
    }).index("email", ["email"])
      .index("by_role", ["role"])
      .index("by_student_id", ["studentId"])
      .index("by_grade", ["grade"])
      // Add compound index to efficiently fetch students by role and grade
      .index("by_role_and_grade", ["role", "grade"]),

    // Student progress tracking
    progress: defineTable({
      userId: v.id("users"),
      subject: subjectValidator,
      videosCompleted: v.number(),
      assignmentsCompleted: v.number(),
      quizScore: v.optional(v.number()),
      quizCompleted: v.boolean(),
      notesViewed: v.boolean(),
    }).index("by_user", ["userId"])
      .index("by_user_and_subject", ["userId", "subject"]),

    // Quiz attempts
    quizAttempts: defineTable({
      userId: v.id("users"),
      subject: subjectValidator,
      score: v.number(),
      totalQuestions: v.number(),
      timeSpent: v.number(), // in seconds
      answers: v.array(v.object({
        questionId: v.number(),
        selectedAnswer: v.string(),
        isCorrect: v.boolean(),
      })),
    }).index("by_user", ["userId"])
      .index("by_user_and_subject", ["userId", "subject"]),

    // Assignment submissions
    assignmentSubmissions: defineTable({
      userId: v.id("users"),
      subject: subjectValidator,
      answers: v.array(v.object({
        questionId: v.number(),
        answer: v.string(),
      })),
      submittedAt: v.number(),
    }).index("by_user", ["userId"])
      .index("by_user_and_subject", ["userId", "subject"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;