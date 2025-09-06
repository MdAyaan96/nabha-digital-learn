import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Home } from "lucide-react";
import { useNavigate } from "react-router";

export default function StudentDashboard() {
  const navigate = useNavigate();

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
          className="w-full max-w-2xl"
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20">
            <CardHeader className="text-center">
              <div className="mx-auto w-fit p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-3">
                <GraduationCap className="h-7 w-7" />
              </div>
              <CardTitle className="text-white text-2xl">Student Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-white/80 text-center">
                Welcome! You’re signed in. Explore lessons, assignments, and quizzes from the navigation we’ll add next.
              </p>
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
