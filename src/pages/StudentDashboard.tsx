import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Home, Loader2 } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { SUBJECT_CONTENT, getContentByGrade } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth();
  const setStudentProfile = useMutation(api.students.setStudentProfile);
  const myProgress = useQuery(api.students.getMyProgress, isAuthenticated && !!user ? {} : undefined) || [];
  const [selectGrade, setSelectGrade] = useState<"8" | "9" | "10">("8");
  const [savingProfile, setSavingProfile] = useState(false);

  const progressBySubject = useMemo(() => {
    const map: Record<string, typeof myProgress[number]> = {};
    for (const p of myProgress) map[p.subject] = p as any;
    return map;
  }, [myProgress]);

  if (!isAuthenticated && !isLoading) {
    navigate("/auth");
    return null;
  }

  const handleSetStudent = async () => {
    // Prevent calling the mutation if not authenticated
    if (!isAuthenticated) {
      toast.error("Please sign in first.");
      navigate("/auth?redirect=/student-dashboard");
      return;
    }
    if (savingProfile) return;
    setSavingProfile(true);
    try {
      const localName = localStorage.getItem("studentName") || undefined;
      const localId = localStorage.getItem("studentId") || undefined;
      await setStudentProfile({ grade: selectGrade, name: localName, studentId: localId });
      toast.success("Profile set as Student");
    } finally {
      setSavingProfile(false);
    }
  };

  const subjects = Object.keys(SUBJECT_CONTENT) as Array<keyof typeof SUBJECT_CONTENT>;
  const grade = (user?.grade as "8" | "9" | "10") || selectGrade;

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl"
        >
          <Card className="glass-panel">
            <CardHeader className="text-center">
              <div className="mx-auto w-fit p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3">
                <GraduationCap className="h-7 w-7" />
              </div>
              <CardTitle className="text-white text-2xl">Student Dashboard</CardTitle>
              {user?.name && (
                <div className="mt-1 text-white/80">
                  Welcome, {user.name}
                </div>
              )}
              {!user?.role || user.role !== "student" ? (
                <div className="mt-2 text-white/80">
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      variant={selectGrade === "8" ? "default" : "outline"}
                      onClick={() => setSelectGrade("8")}
                      className="cursor-pointer"
                    >
                      Grade 8
                    </Button>
                    <Button
                      variant={selectGrade === "9" ? "default" : "outline"}
                      onClick={() => setSelectGrade("9")}
                      className="cursor-pointer"
                    >
                      Grade 9
                    </Button>
                    <Button
                      variant={selectGrade === "10" ? "default" : "outline"}
                      onClick={() => setSelectGrade("10")}
                      className="cursor-pointer"
                    >
                      Grade 10
                    </Button>
                  </div>
                </div>
              ) : null}
            </CardHeader>
            <CardContent className="space-y-6">
              {!user?.role || user.role !== "student" ? (
                <div className="text-center space-y-4">
                  <p className="text-white/80">
                    Select your grade and click "Set as Student" to unlock lessons and tracking.
                  </p>
                  <Button
                    onClick={handleSetStudent}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    disabled={savingProfile}
                  >
                    {savingProfile ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>Set as Student</>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-white/80">Grade {grade} • Your learning hub</p>
                    <Badge className="bg-white/10 text-white border-white/30">Student</Badge>
                  </div>

                  <Tabs defaultValue={subjects[0]} className="w-full">
                    <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 glass-tabs">
                      {subjects.map((s) => (
                        <TabsTrigger
                          key={s}
                          value={s}
                          className="text-white/80 hover:text-white border border-transparent rounded-md backdrop-blur-sm data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:border-white/30"
                        >
                          {SUBJECT_CONTENT[s].icon} {SUBJECT_CONTENT[s].title}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {subjects.map((s) => {
                      const content = getContentByGrade(s, grade);
                      const p = progressBySubject[s] || {
                        videosCompleted: 0,
                        assignmentsCompleted: 0,
                        quizCompleted: false,
                        notesViewed: false,
                      };
                      return (
                        <TabsContent key={s} value={s} className="space-y-4">
                          <Card className="glass-panel">
                            <CardHeader>
                              <CardTitle className="text-white">{content.title} • {content.lesson}</CardTitle>
                              <CardDescription className="text-white/70">
                                Difficulty: {content.difficulty}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                <Badge className="pill">
                                  Videos: {p.videosCompleted}
                                </Badge>
                                <Badge className="pill">
                                  Assignments: {p.assignmentsCompleted}
                                </Badge>
                                <Badge className="pill">
                                  Quiz: {p.quizCompleted ? "Completed" : "Pending"}
                                </Badge>
                                <Badge className="pill">
                                  Notes: {p.notesViewed ? "Viewed" : "Not viewed"}
                                </Badge>
                                {typeof (p as any).quizScore === "number" && (
                                  <Badge className="pill">
                                    Quiz Score: {(p as any).quizScore}
                                  </Badge>
                                )}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <LearningActions subject={s} grade={grade} />
                              </div>
                            </CardContent>
                          </Card>
                        </TabsContent>
                      );
                    })}
                  </Tabs>
                </div>
              )}

              <div className="flex justify-center">
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="glass-button"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

function LearningActions({ subject, grade }: { subject: keyof typeof SUBJECT_CONTENT, grade: "8" | "9" | "10" }) {
  const [assignmentOpen, setAssignmentOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setAssignmentOpen(true)}
        variant="outline"
        className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
      >
        Start Assignment (10 Qs)
      </Button>
      <Button
        onClick={() => setQuizOpen(true)}
        variant="outline"
        className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
      >
        Start Quiz (10 Qs • 2 min)
      </Button>

      <AssignmentDialog
        open={assignmentOpen}
        onOpenChange={setAssignmentOpen}
        subject={subject}
        grade={grade}
      />

      <QuizDialog
        open={quizOpen}
        onOpenChange={setQuizOpen}
        subject={subject}
        grade={grade}
      />
    </>
  );
}

// Helper: choose question set by grade difficulty (simple heuristic)
//  - 8th: first 10 (easier), 9th: middle 10 when available, 10th: last 10 (harder)
// Falls back to first 10 if not enough.
function pickByGrade<T>(items: Array<T>, grade: "8" | "9" | "10"): Array<T> {
  const n = 10;
  if (items.length <= n) return items.slice(0, n);

  if (grade === "8") return items.slice(0, n);
  if (grade === "9") {
    const start = Math.max(0, Math.floor(items.length / 2) - Math.floor(n / 2));
    return items.slice(start, start + n);
  }
  // grade 10
  return items.slice(-n);
}

// Assignment Dialog
function AssignmentDialog({
  open,
  onOpenChange,
  subject,
  grade,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  subject: keyof typeof SUBJECT_CONTENT;
  grade: "8" | "9" | "10";
}) {
  const submitAssignment = useMutation(api.students.submitAssignment);
  const content = getContentByGrade(subject, grade);
  const questions = pickByGrade(content.assignments, grade);

  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const payload = questions.map((q) => ({
        questionId: q.id,
        answer: answers[q.id] ?? "",
      }));

      await submitAssignment({
        subject,
        answers: payload,
      });

      toast.success("Assignment submitted");
      onOpenChange(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto bg-neutral-900 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle>{content.title} • Assignment</DialogTitle>
          <DialogDescription className="text-white/80">
            Grade {grade} • {content.lesson} • Difficulty: {content.difficulty}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={q.id} className="space-y-2 p-3 rounded-md bg-white/5 border border-white/10">
              <div className="text-sm text-white/90">
                {idx + 1}. {q.question}
              </div>
              <Textarea
                placeholder="Type your answer..."
                value={answers[q.id] ?? ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            </div>
          ))}

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
              disabled={submitting}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>Submit Assignment</>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Quiz Dialog with 2-minute timer and results view
function QuizDialog({
  open,
  onOpenChange,
  subject,
  grade,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  subject: keyof typeof SUBJECT_CONTENT;
  grade: "8" | "9" | "10";
}) {
  const submitQuiz = useMutation(api.students.submitQuiz);
  const content = getContentByGrade(subject, grade);
  const questions = pickByGrade(content.quiz, grade);

  const [selected, setSelected] = useState<Record<number, string>>({});
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [result, setResult] = useState<{ score: number; total: number } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Reset state when dialog opens
  React.useEffect(() => {
    if (open) {
      setSelected({});
      setSecondsLeft(120);
      setStartedAt(Date.now());
      setResult(null);
    }
  }, [open]);

  // Timer
  React.useEffect(() => {
    if (!open || result) return;
    if (secondsLeft <= 0) {
      handleSubmit(true).catch(() => void 0);
      return;
    }
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [open, secondsLeft, result]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${r.toString().padStart(2, "0")}`;
    };

  const handleSelect = (qid: number, value: string) => {
    setSelected((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = async (auto = false) => {
    if (!startedAt) return;
    if (submitting) return;
    setSubmitting(true);
    try {
      const timeSpent = Math.min(120, Math.floor((Date.now() - startedAt) / 1000));

      const answers = questions.map((q) => {
        const choice = selected[q.id] ?? "";
        const isCorrect = choice === q.correct;
        return { questionId: q.id, selectedAnswer: choice, isCorrect };
      });

      const r = await submitQuiz({
        subject,
        answers,
        timeSpent,
      });

      setResult({ score: r.score, total: r.totalQuestions });
      if (auto) toast("Time's up! Quiz submitted automatically.");
      else toast.success("Quiz submitted");
    } finally {
      setSubmitting(false);
    }
  };

  const onClose = (v: boolean) => {
    if (!v && !result) {
      toast("Finish the quiz or wait for time to end");
      return;
    }
    onOpenChange(v);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[85vh] overflow-y-auto bg-neutral-900 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle>{content.title} • Quiz</DialogTitle>
          <DialogDescription className="text-white/80">
            Grade {grade} • {content.lesson} • Difficulty: {content.difficulty}
          </DialogDescription>
        </DialogHeader>

        {!result ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 rounded-md bg-white/5 border border-white/10">
              <span className="text-white/80">Answer all 10 questions</span>
              <span className="font-semibold">⏱ {formatTime(secondsLeft)}</span>
            </div>

            {questions.map((q, idx) => (
              <div key={q.id} className="space-y-2 p-3 rounded-md bg-white/5 border border-white/10">
                <div className="text-sm text-white/90">
                  {idx + 1}. {q.question}
                </div>
                <RadioGroup
                  value={selected[q.id] ?? ""}
                  onValueChange={(v) => handleSelect(q.id, v)}
                  className="grid gap-2"
                >
                  {q.options.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 rounded-md p-2 bg-white/10 border border-white/20 hover:bg-white/15 cursor-pointer"
                    >
                      <RadioGroupItem value={opt} id={`${q.id}-${opt}`} />
                      <Label htmlFor={`${q.id}-${opt}`} className="cursor-pointer text-white">
                        {opt}
                      </Label>
                    </label>
                  ))}
                </RadioGroup>
              </div>
            ))}

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => handleSubmit(false)}
                className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
                disabled={submitting || !!result}
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>Submit Quiz</>
                )}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold">Your Result</div>
              <div className="text-white/80 mt-1">
                Score: {result.score} / {result.total}
              </div>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={() => onOpenChange(false)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}