import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Register a new teacher
export const registerTeacher = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    school: v.string(),
    grade: v.union(v.literal("8"), v.literal("9"), v.literal("10")),
    subjects: v.array(v.union(v.literal("math"), v.literal("physics"), v.literal("english"), v.literal("biology"), v.literal("punjabi"))),
  },
  handler: async (ctx, args) => {
    // Check if email already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("email", (q) => q.eq("email", args.email))
      .unique();

    if (existingUser) {
      throw new Error("Email already registered");
    }

    // Create teacher account
    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      school: args.school,
      grade: args.grade,
      subjects: args.subjects,
      role: "teacher",
    });

    return userId;
  },
});

// Register a new student (admin only)
export const registerStudent = mutation({
  args: {
    name: v.string(),
    studentId: v.string(),
    grade: v.union(v.literal("8"), v.literal("9"), v.literal("10")),
    school: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if student ID already exists
    const existingStudent = await ctx.db
      .query("users")
      .withIndex("by_student_id", (q) => q.eq("studentId", args.studentId))
      .unique();

    if (existingStudent) {
      throw new Error("Student ID already exists");
    }

    // Create student account
    const userId = await ctx.db.insert("users", {
      name: args.name,
      studentId: args.studentId,
      grade: args.grade,
      school: args.school,
      role: "student",
      subjects: ["math", "physics", "english", "biology", "punjabi"],
    });

    return userId;
  },
});

// Student login with student ID
export const loginStudent = query({
  args: { studentId: v.string() },
  handler: async (ctx, args) => {
    const student = await ctx.db
      .query("users")
      .withIndex("by_student_id", (q) => q.eq("studentId", args.studentId))
      .unique();

    if (!student || student.role !== "student") {
      throw new Error("Invalid student ID");
    }

    return student;
  },
});
