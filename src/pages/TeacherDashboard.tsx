import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { SUBJECT_CONTENT } from "@/data/content";
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth();

  const setTeacherProfile = useMutation(api.teachers.setTeacherProfile);
  const dashboard = useQuery(api.teachers.getTeacherDashboard, isAuthenticated ? {} : undefined);
  const [grade, setGrade] = useState<"8" | "9" | "10">("8");
  const [subjects, setSubjects] = useState<Array<keyof typeof SUBJECT_CONTENT>>(["math", "english"]);

  const toggleSubject = (s: keyof typeof SUBJECT_CONTENT) => {
    setSubjects((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));
  };

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
  }, [isAuthenticated, isLoading, navigate]);

  const handleSetTeacher = async () => {
    await setTeacherProfile({ grade, subjects: subjects as any });
    toast.success("Profile set as Teacher");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl"
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-fit p-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white mb-3">
                <BookOpen className="h-7 w-7" />
              </div>
              <CardTitle className="text-white text-2xl">Teacher Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {!user?.role || user.role !== "teacher" ? (
                <div className="space-y-4">
                  <p className="text-white/80 text-center">
                    Select your grade and subjects and click "Set as Teacher" to view class progress.
                  </p>
                  <div className="flex justify-center gap-3">
                    {(["8", "9", "10"] as const).map((g) => (
                      <Button
                        key={g}
                        variant={grade === g ? "default" : "outline"}
                        onClick={() => setGrade(g)}
                        className="cursor-pointer"
                      >
                        Grade {g}
                      </Button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {(Object.keys(SUBJECT_CONTENT) as Array<keyof typeof SUBJECT_CONTENT>).map((s) => (
                      <label
                        key={s}
                        className="flex items-center gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-md p-2 cursor-pointer"
                        onClick={() => toggleSubject(s)}
                      >
                        <Checkbox checked={subjects.includes(s)} />
                        <span>{SUBJECT_CONTENT[s].icon} {SUBJECT_CONTENT[s].title}</span>
                      </label>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={handleSetTeacher}
                      className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white"
                    >
                      Set as Teacher
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-white/80">
                      Grade {user?.grade} • Subjects: {(user?.subjects || []).join(", ")}
                    </p>
                    <Badge className="bg-white/10 text-white border-white/30">Teacher</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(dashboard?.studentProgress || []).map(({ student, progress }: any) => (
                      <Card key={student._id} className="bg-white/10 border-white/20">
                        <CardHeader>
                          <CardTitle className="text-white text-lg">
                            {student.name || student.email || "Student"} • Grade {student.grade}
                          </CardTitle>
                          <CardDescription className="text-white/70">
                            Subjects tracked: {progress.length}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {progress.map((p: any) => (
                            <div
                              key={p._id}
                              className="flex flex-col gap-1 rounded-md p-2 bg-white/5 border border-white/10"
                            >
                              <div className="flex items-center justify-between text-white">
                                <span className="capitalize font-medium">
                                  {SUBJECT_CONTENT[p.subject as keyof typeof SUBJECT_CONTENT]?.icon} {SUBJECT_CONTENT[p.subject as keyof typeof SUBJECT_CONTENT]?.title || p.subject}
                                </span>
                                <Badge className="bg-white/10 text-white border-white/30">
                                  {p.quizCompleted ? "Quiz ✓" : "Quiz —"}
                                </Badge>
                              </div>

                              <div className="flex flex-wrap gap-2 text-sm text-white/80">
                                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20">
                                  Videos: {p.videosCompleted ?? 0}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20">
                                  Assignments: {p.assignmentsCompleted ?? 0}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20">
                                  Quiz Score: {typeof p.quizScore === "number" ? p.quizScore : "—"}
                                </span>
                                <span className="px-2 py-0.5 rounded bg-white/10 border border-white/20">
                                  Notes: {p.notesViewed ? "Viewed" : "Not viewed"}
                                </span>
                              </div>
                            </div>
                          ))}
                          {progress.length === 0 && (
                            <p className="text-white/60">No progress yet.</p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                    {Array.isArray(dashboard?.studentProgress) && dashboard.studentProgress.length === 0 && (
                      <div className="col-span-full">
                        <Card className="bg-white/10 border-white/20">
                          <CardHeader>
                            <CardTitle className="text-white">No students yet</CardTitle>
                            <CardDescription className="text-white/70">
                              We couldn't find any students in your grade or subject. Ask your students to create their accounts and start assignments/quizzes.
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <Button
                  onClick={() => navigate("/")}
                  variant="outline"
                  className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
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