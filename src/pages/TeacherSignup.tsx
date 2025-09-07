import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { BookOpen, Loader2, UserPlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function TeacherSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "",
    subjects: [] as string[],
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const subjects = [
    { value: "math", label: "Mathematics" },
    { value: "physics", label: "Physics" },
    { value: "english", label: "English" },
    { value: "biology", label: "Biology" },
    { value: "punjabi", label: "Punjabi" },
  ];

  const handleSubjectToggle = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.grade || formData.subjects.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store teacher data in localStorage for demo
      localStorage.setItem("teacherData", JSON.stringify(formData));
      localStorage.setItem("userRole", "teacher");
      
      toast.success("Registration successful! Welcome to the platform.");
      navigate("/teacher-dashboard");
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
            <CardHeader className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex justify-center mb-4"
              >
                <div className="p-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 shadow-lg">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </motion.div>
              <CardTitle className="text-2xl font-bold text-white">Teacher Registration</CardTitle>
              <CardDescription className="text-white/80">
                Join our digital learning platform for rural education
              </CardDescription>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <Button
                  variant="outline"
                  className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => navigate("/student-login")}
                >
                  Login as Student
                </Button>
                <Button
                  variant="outline"
                  className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => navigate("/auth")}
                >
                  Login as Teacher
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                      disabled={isLoading}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Email *</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="backdrop-blur-sm bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white/50"
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/90">Grade/Class *</label>
                  <Select value={formData.grade} onValueChange={(value) => setFormData(prev => ({ ...prev, grade: value }))}>
                    <SelectTrigger className="backdrop-blur-sm bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="Select grade you teach" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8">8th Grade</SelectItem>
                      <SelectItem value="9">9th Grade</SelectItem>
                      <SelectItem value="10">10th Grade</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-white/90">Subjects You Teach *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {subjects.map((subject) => (
                      <motion.button
                        key={subject.value}
                        type="button"
                        onClick={() => handleSubjectToggle(subject.value)}
                        className={`p-3 rounded-lg border transition-all duration-300 ${
                          formData.subjects.includes(subject.value)
                            ? "bg-white/20 border-white/50 text-white"
                            : "bg-white/5 border-white/20 text-white/70 hover:bg-white/10"
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-sm font-medium">{subject.label}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Create Account
                    </>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center space-y-2">
                <p className="text-white/70 text-sm">
                  Already have an account?
                </p>
                <div className="flex items-center justify-center gap-3">
                  <Button
                    variant="outline"
                    className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={() => navigate("/student-login")}
                  >
                    Login as Student
                  </Button>
                  <Button
                    variant="outline"
                    className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
                    onClick={() => navigate("/auth")}
                  >
                    Login as Teacher
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}