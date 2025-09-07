import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Monitor, Users, Wifi, Globe, ArrowRight, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function Landing() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Offline Learning",
      description: "Access educational content even without internet connectivity"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Local Language Support", 
      description: "Interactive lessons available in Punjabi and English"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Teacher Dashboard",
      description: "Monitor student progress and track learning outcomes"
    },
    {
      icon: <Wifi className="h-8 w-8" />,
      title: "Low Bandwidth Optimized",
      description: "Designed to work on low-end devices and poor connectivity"
    }
  ];

  const subjects = [
    { name: "Mathematics", icon: "📐", color: "from-blue-400 to-purple-600" },
    { name: "Physics", icon: "⚡", color: "from-green-400 to-blue-600" },
    { name: "English", icon: "📚", color: "from-red-400 to-pink-600" },
    { name: "Biology", icon: "🧬", color: "from-emerald-400 to-teal-600" },
    { name: "Punjabi", icon: "🎭", color: "from-orange-400 to-red-600" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">EduNabha</h1>
                <p className="text-xs text-white/70">Digital Learning Platform</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex space-x-3"
            >
              <Button
                onClick={() => navigate("/student-login")}
                variant="outline"
                className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Student Login
              </Button>
              <Button
                onClick={() => navigate("/teacher-signup")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Teacher Signup
              </Button>
              <Button
                asChild
                variant="outline"
                className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <a href="/project-1757255689.zip" download>
                  Download ZIP
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Digital Learning for
              <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {" "}Rural Students
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Empowering students in Nabha with quality digital education, 
              interactive lessons, and offline accessibility for the modern world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => navigate("/student-login")}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate("/teacher-signup")}
                variant="outline"
                size="lg"
                className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Join as Teacher
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Rural Education
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Addressing the unique challenges of rural schools with innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white w-fit mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Curriculum
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Interactive lessons across core subjects for grades 8-10
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className={`p-8 rounded-2xl bg-gradient-to-br ${subject.color} backdrop-blur-xl shadow-2xl`}>
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <h3 className="text-white font-semibold text-lg">{subject.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "500+", label: "Students Enrolled", icon: <Users className="h-8 w-8" /> },
              { number: "50+", label: "Teachers Registered", icon: <BookOpen className="h-8 w-8" /> },
              { number: "95%", label: "Offline Accessibility", icon: <CheckCircle className="h-8 w-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
                  <CardContent className="pt-8 pb-8">
                    <div className="flex justify-center mb-4 text-blue-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-white/70">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
              <CardContent className="pt-12 pb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Rural Education?
                </h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of students and teachers already using our platform 
                  to bridge the digital divide in education.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => navigate("/student-login")}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Star className="mr-2 h-5 w-5" />
                    Get Started Today
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-xl bg-white/5 border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">EduNabha</h3>
                <p className="text-sm text-white/60">Government of Punjab Initiative</p>
              </div>
            </div>
            <div className="text-white/60 text-sm">
              © 2024 Department of Higher Education, Punjab. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}