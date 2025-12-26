import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import toast from "react-hot-toast";
import { Loader2, ArrowLeft, Type, AlignLeft, Users, Code, Layers } from "lucide-react";
import { useAuthStore } from "../context/useAuthStore";

const CreateProject = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
  }, [isAuthenticated, navigate]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "hackathon", // Default value
    teamSize: 3,
    skillsRequired: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const skillsArray = formData.skillsRequired.split(",").map(s => s.trim()).filter(s => s !== "");

    try {
      await api.post("/projects", {
        ...formData,
        skillsRequired: skillsArray,
        teamSize: Number(formData.teamSize)
      });
      
      toast.success("Project posted successfully!");
      navigate("/projects"); // Go back to feed
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to create project");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen theme-bg-surface flex items-center justify-center p-4 py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-3xl relative z-10">
        
        <button 
          onClick={() => navigate("/projects")} 
          className="inline-flex items-center theme-text-secondary hover:theme-text mb-6 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
        </button>

        <div className="glass-card p-8 rounded-2xl shadow-2xl">
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold theme-text mb-2">Post a New Project</h1>
            <p className="theme-text-secondary">Describe your idea and find the perfect team.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Project Title</label>
              <div className="relative">
                <Type className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input 
                  name="title" 
                  required 
                  onChange={handleChange} 
                  className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" 
                  placeholder="e.g. AI Resume Builder" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Description</label>
              <div className="relative">
                <AlignLeft className="absolute left-3 top-4 theme-text-secondary" size={18} />
                <textarea 
                  name="description" 
                  required 
                  rows={4}
                  onChange={handleChange} 
                  className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all resize-none" 
                  placeholder="Explain what you are building and who you need..." 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium theme-text-secondary">Project Type</label>
                <div className="relative">
                  <Layers className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                  <select 
                    name="type" 
                    onChange={handleChange} 
                    className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all appearance-none"
                  >
                    <option value="hackathon" className="theme-bg-surface">Hackathon</option>
                    <option value="college" className="theme-bg-surface">College Project</option>
                    <option value="side" className="theme-bg-surface">Side Project</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium theme-text-secondary">Team Size Needed</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                  <input 
                    name="teamSize" 
                    type="number" 
                    min="1" 
                    max="10"
                    defaultValue={3}
                    onChange={handleChange} 
                    className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" 
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium theme-text-secondary">Skills Required (Comma separated)</label>
              <div className="relative">
                <Code className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
                <input 
                  name="skillsRequired" 
                  required 
                  onChange={handleChange} 
                  className="w-full theme-bg-surface-secondary theme-border rounded-lg py-3 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all" 
                  placeholder="React, Node.js, Figma, Python" 
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Posting...
                </>
              ) : (
                "Create Project"
              )}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;