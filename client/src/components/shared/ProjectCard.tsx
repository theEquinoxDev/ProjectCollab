import { useState } from "react";
import type Project  from "../../types";
import { useAuthStore } from "../../context/useAuthStore";
import { Users, Calendar, ArrowRight, Trophy, GraduationCap, Rocket, X, Loader2, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import toast from "react-hot-toast";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuthStore();
  
  const isOwner = user?._id === (typeof project.ownerId === 'object' ? project.ownerId._id : project.ownerId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleJoinClick = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    if (isOwner) {
      toast.error("You cannot join your own project");
      return;
    }

    setIsModalOpen(true);
  };

  const submitRequest = async () => {
    if (!message.trim()) {
      toast.error("Please write a short message");
      return;
    }

    setIsSending(true);
    try {
      await api.post(`/requests/project/${project._id}`, { message });
      toast.success("Request sent successfully!");
      setIsModalOpen(false);
      setMessage("");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Failed to send request");
    } finally {
      setIsSending(false);
    }
  };

  const getTypeIcon = () => {
    switch (project.type) {
      case 'hackathon': return <Trophy size={14} className="mr-1" />;
      case 'college': return <GraduationCap size={14} className="mr-1" />;
      case 'side': return <Rocket size={14} className="mr-1" />;
      default: return null;
    }
  };

  const getTypeText = () => {
    switch (project.type) {
      case 'hackathon': return 'Hackathon';
      case 'college': return 'College Project';
      case 'side': return 'Side Project';
      default: return project.type;
    }
  };

  return (
    <>
      <div className="glass-card p-6 flex flex-col h-full hover:border-blue-500/30 transition-all duration-300 group">
        
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 border ${
              project.type === 'hackathon' 
                ? 'bg-purple-500/10 border-purple-500/20 text-purple-300' 
                : 'bg-blue-500/10 border-blue-500/20 text-blue-300'
            }`}>
              {getTypeIcon()}
              {getTypeText()}
            </span>
            <h3 className="text-xl font-bold theme-text group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="theme-text-secondary text-sm mb-6 line-clamp-2 flex-grow">
          {project.description}
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm theme-text-muted">
            <Users size={16} className="mr-2" />
            <span>Team Size: {project.teamSize} members</span>
          </div>
          <div className="flex items-center text-sm theme-text-muted">
            <Calendar size={16} className="mr-2" />
            <span>Posted by {typeof project.ownerId === 'object' ? project.ownerId.name : 'Unknown'}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.skillsRequired.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-2 py-1 rounded-md theme-bg-surface-secondary theme-border text-xs theme-text-secondary">
              {skill}
            </span>
          ))}
          {project.skillsRequired.length > 3 && (
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300">
              +{project.skillsRequired.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-white/5">
          {isOwner ? (
            <button
              disabled
              className="w-full py-2 rounded-lg theme-border theme-text-secondary text-sm cursor-default"
            >
              You own this project
            </button>
          ) : !isAuthenticated ? (
            <button
              onClick={() => navigate('/login')}
              className="w-full py-2 rounded-lg bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white text-sm font-medium flex items-center justify-center gap-2"
            >
              Login to Join <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleJoinClick}
              className="w-full py-2 rounded-lg bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white text-sm font-medium flex items-center justify-center gap-2"
            >
              Request to Join <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="w-full max-w-md theme-bg-surface theme-border rounded-2xl p-6 shadow-2xl relative">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 theme-text-secondary hover:theme-text transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold theme-text mb-2">Join {project.title}</h3>
            <p className="theme-text-secondary text-sm mb-6">
              Tell the project owner why you are a good fit. Mention your skills and experience.
            </p>

            <textarea
              autoFocus
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hey! I'm a React expert and I'd love to help with the frontend..."
              className="w-full theme-bg-surface-secondary theme-border rounded-lg p-4 theme-text placeholder-gray-500 focus:outline-none focus:border-blue-500/50 resize-none mb-6"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 rounded-lg theme-border theme-text-secondary hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium text-sm"
              >
                Cancel
              </button>
              <button
                onClick={submitRequest}
                disabled={isSending}
                className="flex-1 py-2.5 rounded-lg bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white font-medium text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                Send Request
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;