import { useEffect, useState } from "react";
import api from "../services/api";
import type Project  from "../types";
import ProjectCard from "../components/shared/ProjectCard";
import { Loader2, Plus, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<"all" | "hackathon" | "college" | "side">("all");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get("/projects");
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    let result = projects;

    if (selectedType !== "all") {
      result = result.filter((p) => p.type === selectedType);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.skillsRequired.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    setFilteredProjects(result);
  }, [searchQuery, selectedType, projects]);

  if (isLoading) {
    return (
      <div className="min-h-screen theme-bg-surface flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-bg-surface pt-24 px-4 pb-12 relative">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold theme-text mb-2">Explore Projects</h1>
            <p className="theme-text-secondary">Find a team and start building today.</p>
          </div>
          
          <Link
            to="/create-project"
            className="px-6 py-2.5 rounded-full bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white font-medium flex items-center gap-2"
          >
            <Plus size={18} />
            Post a Project
          </Link>
        </div>

        <div className="glass-card p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-center">
          
          <div className="relative flex-grow w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
            <input
              type="text"
              placeholder="Search by title or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full theme-bg-surface-secondary theme-border rounded-lg py-2.5 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none transition-all"
            />
          </div>

          <div className="relative w-full md:w-auto min-w-[200px]">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 theme-text-secondary" size={18} />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="w-full theme-bg-surface-secondary theme-border rounded-lg py-2.5 pl-10 pr-4 theme-text focus:border-blue-500/50 focus:outline-none appearance-none cursor-pointer"
            >
              <option value="all" className="theme-bg-surface">All Categories</option>
              <option value="hackathon" className="theme-bg-surface">Hackathon</option>
              <option value="college" className="theme-bg-surface">College Project</option>
              <option value="side" className="theme-bg-surface">Side Project</option>
            </select>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
            <Search className="w-12 h-12 theme-text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-medium theme-text mb-2">No projects found</h3>
            <p className="theme-text-secondary mb-6">Try adjusting your search or filters.</p>
            <button 
              onClick={() => { setSearchQuery(""); setSelectedType("all"); }}
              className="text-blue-400 hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;