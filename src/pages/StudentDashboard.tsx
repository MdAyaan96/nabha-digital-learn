import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "@/hooks/use-auth";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useMemo, useState } from "react";
import { SUBJECT_CONTENT, getContentByGrade } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function StudentDashboard() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth();
  const setStudentProfile = useMutation(api.students.setStudentProfile);
  const myProgress = useQuery(api.students.getMyProgress, isAuthenticated && !!user ? {} : undefined) || [];
  const [selectGrade, setSelectGrade] = useState<"8" | "9" | "10">("8");

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
    await setStudentProfile({ grade: selectGrade });
    toast.success("Profile set as Student");
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
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-fit p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3">
                <GraduationCap className="h-7 w-7" />
              </div>
              <CardTitle className="text-white text-2xl">Student Dashboard</CardTitle>
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
                  >
                    Set as Student
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-white/80">Grade {grade} • Your learning hub</p>
                    <Badge className="bg-white/10 text-white border-white/30">Student</Badge>
                  </div>

                  <Tabs defaultValue={subjects[0]} className="w-full">
                    <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 bg-white/10">
                      {subjects.map((s) => (
                        <TabsTrigger key={s} value={s} className="text-white">
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
                          <Card className="bg-white/10 border-white/20">
                            <CardHeader>
                              <CardTitle className="text-white">{content.title} • {content.lesson}</CardTitle>
                              <CardDescription className="text-white/70">
                                Difficulty: {content.difficulty}
                              </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                              <div className="flex flex-wrap gap-2">
                                <Badge className="bg-white/10 text-white border-white/30">
                                  Videos: {p.videosCompleted}
                                </Badge>
                                <Badge className="bg-white/10 text-white border-white/30">
                                  Assignments: {p.assignmentsCompleted}
                                </Badge>
                                <Badge className="bg-white/10 text-white border-white/30">
                                  Quiz: {p.quizCompleted ? "Completed" : "Pending"}
                                </Badge>
                                <Badge className="bg-white/10 text-white border-white/30">
                                  Notes: {p.notesViewed ? "Viewed" : "Not viewed"}
                                </Badge>
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <ProgressButtons subject={s} />
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

function ProgressButtons({ subject }: { subject: keyof typeof SUBJECT_CONTENT }) {
  const update = useMutation(api.students.updateProgress);

  const doUpdate = async (updates: Parameters<typeof update>[0]["updates"]) => {
    await update({ subject, updates });
    toast.success("Progress saved");
  };

  return (
    <>
      <Button
        onClick={() => doUpdate({ videosCompleted: 1 })}
        variant="outline"
        className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
      >
        +1 Video Completed
      </Button>
      <Button
        onClick={() => doUpdate({ assignmentsCompleted: 1 })}
        variant="outline"
        className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
      >
        +1 Assignment Completed
      </Button>
      <Button
        onClick={() => doUpdate({ notesViewed: true })}
        variant="outline"
        className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
      >
        Mark Notes Viewed
      </Button>
      <Button
        onClick={() => doUpdate({ quizCompleted: true, quizScore: Math.floor(6 + Math.random() * 5) })}
        variant="outline"
        className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
      >
        Complete Quiz
      </Button>
    </>
  );
}