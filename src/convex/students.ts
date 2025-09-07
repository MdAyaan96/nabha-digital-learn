import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getCurrentUser } from "./users";
import { GRADES, subjectValidator } from "./schema";

// Set current user as a student with a grade
export const setStudentProfile = mutation({
  args: { grade: v.union(v.literal(GRADES.GRADE_8), v.literal(GRADES.GRADE_9), v.literal(GRADES.GRADE_10)) },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user) throw new Error("Unauthorized");
    await ctx.db.patch(user._id, { role: "student", grade: args.grade });
    return true;
  },
});

// Upsert progress for current user and subject
export const updateProgress = mutation({
  args: {
    subject: subjectValidator,
    updates: v.object({
      videosCompleted: v.optional(v.number()),
      assignmentsCompleted: v.optional(v.number()),
      quizScore: v.optional(v.number()),
      quizCompleted: v.optional(v.boolean()),
      notesViewed: v.optional(v.boolean()),
    }),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user) throw new Error("Unauthorized");
    if (user.role !== "student") throw new Error("Only students can update progress");

    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_subject", (q) => q.eq("userId", user._id).eq("subject", args.subject))
      .unique()
      .catch(() => null);

    if (!existing) {
      await ctx.db.insert("progress", {
        userId: user._id,
        subject: args.subject,
        videosCompleted: args.updates.videosCompleted ?? 0,
        assignmentsCompleted: args.updates.assignmentsCompleted ?? 0,
        quizScore: args.updates.quizScore,
        quizCompleted: args.updates.quizCompleted ?? false,
        notesViewed: args.updates.notesViewed ?? false,
      });
      return;
    }

    await ctx.db.patch(existing._id, {
      ...args.updates,
      videosCompleted: args.updates.videosCompleted ?? existing.videosCompleted,
      assignmentsCompleted: args.updates.assignmentsCompleted ?? existing.assignmentsCompleted,
    });
  },
});

// Get my progress across subjects
export const getMyProgress = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx);
    // Return empty list instead of throwing to avoid client errors during auth transitions
    if (!user) return [];
    return await ctx.db.query("progress").withIndex("by_user", (q) => q.eq("userId", user._id)).collect();
  },
});

// Get student dashboard data
export const getStudentDashboard = query({
  args: {},
  handler: async (ctx) => {
    const user = await getCurrentUser(ctx);
    if (!user || user.role !== "student") {
      throw new Error("Unauthorized");
    }

    // Get progress for all subjects
    const progress = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", user._id))
      .collect();

    return {
      user,
      progress,
    };
  },
});

// Get progress for a specific subject
export const getSubjectProgress = query({
  args: { subject: v.union(v.literal("math"), v.literal("physics"), v.literal("english"), v.literal("biology"), v.literal("punjabi")) },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user || user.role !== "student") {
      throw new Error("Unauthorized");
    }

    const progress = await ctx.db
      .query("progress")
      .withIndex("by_user_and_subject", (q) => 
        q.eq("userId", user._id).eq("subject", args.subject)
      )
      .unique();

    return progress;
  },
});

// Update video completion
export const updateVideoProgress = mutation({
  args: { 
    subject: v.union(v.literal("math"), v.literal("physics"), v.literal("english"), v.literal("biology"), v.literal("punjabi")),
    videoNumber: v.number()
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user || user.role !== "student") {
      throw new Error("Unauthorized");
    }

    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_subject", (q) => 
        q.eq("userId", user._id).eq("subject", args.subject)
      )
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        videosCompleted: Math.max(existing.videosCompleted, args.videoNumber),
      });
    } else {
      await ctx.db.insert("progress", {
        userId: user._id,
        subject: args.subject,
        videosCompleted: args.videoNumber,
        assignmentsCompleted: 0,
        quizCompleted: false,
        notesViewed: false,
      });
    }
  },
});

// Update notes viewed
export const updateNotesViewed = mutation({
  args: { 
    subject: v.union(v.literal("math"), v.literal("physics"), v.literal("english"), v.literal("biology"), v.literal("punjabi"))
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user || user.role !== "student") {
      throw new Error("Unauthorized");
    }

    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_subject", (q) => 
        q.eq("userId", user._id).eq("subject", args.subject)
      )
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        notesViewed: true,
      });
    } else {
      await ctx.db.insert("progress", {
        userId: user._id,
        subject: args.subject,
        videosCompleted: 0,
        assignmentsCompleted: 0,
        quizCompleted: false,
        notesViewed: true,
      });
    }
  },
});

// Submit assignment
export const submitAssignment = mutation({
  args: {
    subject: v.union(v.literal("math"), v.literal("physics"), v.literal("english"), v.literal("biology"), v.literal("punjabi")),
    answers: v.array(v.object({
      questionId: v.number(),
      answer: v.string(),
    })),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user || user.role !== "student") {
      throw new Error("Unauthorized");
    }

    // Save assignment submission
    await ctx.db.insert("assignmentSubmissions", {
      userId: user._id,
      subject: args.subject,
      answers: args.answers,
      submittedAt: Date.now(),
    });

    // Update progress
    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_subject", (q) => 
        q.eq("userId", user._id).eq("subject", args.subject)
      )
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        assignmentsCompleted: existing.assignmentsCompleted + 1,
      });
    } else {
      await ctx.db.insert("progress", {
        userId: user._id,
        subject: args.subject,
        videosCompleted: 0,
        assignmentsCompleted: 1,
        quizCompleted: false,
        notesViewed: false,
      });
    }
  },
});

// Submit quiz
export const submitQuiz = mutation({
  args: {
    subject: v.union(v.literal("math"), v.literal("physics"), v.literal("english"), v.literal("biology"), v.literal("punjabi")),
    answers: v.array(v.object({
      questionId: v.number(),
      selectedAnswer: v.string(),
      isCorrect: v.boolean(),
    })),
    timeSpent: v.number(),
  },
  handler: async (ctx, args) => {
    const user = await getCurrentUser(ctx);
    if (!user || user.role !== "student") {
      throw new Error("Unauthorized");
    }

    const score = args.answers.filter(a => a.isCorrect).length;

    // Save quiz attempt
    await ctx.db.insert("quizAttempts", {
      userId: user._id,
      subject: args.subject,
      score,
      totalQuestions: args.answers.length,
      timeSpent: args.timeSpent,
      answers: args.answers,
    });

    // Update progress
    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_and_subject", (q) => 
        q.eq("userId", user._id).eq("subject", args.subject)
      )
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        quizCompleted: true,
        quizScore: score,
      });
    } else {
      await ctx.db.insert("progress", {
        userId: user._id,
        subject: args.subject,
        videosCompleted: 0,
        assignmentsCompleted: 0,
        quizCompleted: true,
        quizScore: score,
        notesViewed: false,
      });
    }

    return { score, totalQuestions: args.answers.length };
  },
});