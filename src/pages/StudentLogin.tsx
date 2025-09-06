import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { GraduationCap, Loader2, LogIn } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function StudentLogin() {
  const [studentId, setStudentId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentId.trim()) {
      toast.error("Please enter your Student ID");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call - in real app, validate student ID
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store student ID in localStorage for demo
      localStorage.setItem("studentId", studentId);
      localStorage.setItem("userRole", "student");
      
      toast.success("Login successful!");
      navigate("/student-dashboard");
    } catch (error) {
      toast.error("Invalid Student ID. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              <CardTitle className="text-2xl font-bold text-white">Student Login</CardTitle>
              <CardDescription className="text-white/80">
                Enter your Student ID to access your learning dashboard
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/90">Student ID</label>
                  <Input
                    type="text"
                    placeholder="Enter your Student ID"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                    disabled={isLoading}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Logging in...
                    </>
                  ) : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Login
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-white/70 text-sm">
                  Don't have a Student ID?{" "}
                  <button 
                    onClick={() => navigate("/teacher-signup")}
                    className="text-white font-semibold hover:underline"
                  >
                    Register as Teacher
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
