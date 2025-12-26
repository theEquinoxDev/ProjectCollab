import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../context/useAuthStore";
import api from "../../services/api";
import toast from "react-hot-toast";
import { UserPlus, Mail, Lock, User, BookOpen, Github, Phone, Code, Loader2, ArrowLeft } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    college: "",
    year: 1,
    skills: "", 
    githubLink: "",
    whatsappNumber: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const skillsArray = formData.skills.split(",").map(skill => skill.trim()).filter(skill => skill !== "");

    const cleanNumber = formData.whatsappNumber.replace(/\D/g, '');

    try {
      const { data } = await api.post("/auth/signup", {
        ...formData,
        year: Number(formData.year),
        skills: skillsArray,
        whatsappNumber: cleanNumber
      });

      login(data.user, data.token);
      toast.success("Account created successfully!");
      navigate("/projects");
      
    } catch (error: any) {
      const message = error.response?.data?.message || "Signup failed";
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen theme-bg-surface flex items-center justify-center p-4 py-10 relative overflow-hidden">
      
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="w-full max-w-2xl relative z-10">
        <div className="theme-bg-surface-secondary backdrop-blur-xl theme-border rounded-2xl p-8 shadow-2xl">
          <Link to="/" className="inline-flex items-center theme-text-secondary hover:text-blue-400 mb-6 transition-colors text-sm font-medium mt-4">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold theme-text mb-2">Create Account</h1>
            <p className="theme-text-secondary">Join the community of builders</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input name="name" required onChange={handleChange} className="input-field w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" placeholder="John Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input name="email" type="email" required onChange={handleChange} className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" placeholder="john@college.edu" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input name="password" type="password" required onChange={handleChange} className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" placeholder="••••••••" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">College Name</label>
              <div className="relative">
                <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input name="college" required onChange={handleChange} className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" placeholder="IIT Bombay" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Year of Study</label>
              <select name="year" onChange={handleChange} className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 px-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all appearance-none">
                <option value="1" className="theme-bg-surface">1st Year</option>
                <option value="2" className="theme-bg-surface">2nd Year</option>
                <option value="3" className="theme-bg-surface">3rd Year</option>
                <option value="4" className="theme-bg-surface">4th Year</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Skills (Comma separated)</label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input name="skills" required onChange={handleChange} className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" placeholder="React, Node.js, Python, Figma" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">GitHub Profile Link</label>
              <div className="relative">
                <Github className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input name="githubLink" required onChange={handleChange} className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" placeholder="https://github.com/..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">WhatsApp Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input name="whatsappNumber" required onChange={handleChange} className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" placeholder="919999999999" />
              </div>
              <p className="text-xs theme-text-secondary">Include country code without '+' (e.g. 91...)</p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="md:col-span-2 w-full bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100 mt-4"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Creating Account...
                </>
              ) : (
                <>
                  <UserPlus size={20} />
                  Create Account
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center text-sm theme-text-secondary">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;