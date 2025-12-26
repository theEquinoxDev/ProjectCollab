import React, { useEffect, useState } from "react";
import api from "../services/api";
import type Project from "../types";
import type JoinRequest from "../types";
import { useAuthStore } from "../context/useAuthStore";
import { useNavigate } from "react-router-dom";
import {
  Loader2,
  Github,
  MessageCircle,
  Check,
  X,
  Eye,
  ExternalLink,
  LayoutDashboard,
  Send,
  Clock,
} from "lucide-react";
import toast from "react-hot-toast";

interface PopulatedRequest extends Omit<JoinRequest, "projectId"> {
  projectId: Project;
}

const MyProjects = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const [activeTab, setActiveTab] = useState<"posts" | "applications">("posts");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
  }, [isAuthenticated, navigate]);

  const [myProjects, setMyProjects] = useState<Project[]>([]);
  const [myApplications, setMyApplications] = useState<PopulatedRequest[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [requestsForProject, setRequestsForProject] = useState<JoinRequest[]>(
    []
  );
  const [loadingRequests, setLoadingRequests] = useState(false);

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      if (activeTab === "posts") {
        const { data } = await api.get("/projects/my-projects");
        setMyProjects(data);
      } else {
        const { data } = await api.get("/requests/my-requests");
        setMyApplications(data);
      }
    } catch (error) {
      console.error("Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  };

  const openRequestsModal = async (project: Project) => {
    setSelectedProject(project);
    setLoadingRequests(true);
    try {
      const { data } = await api.get(`/requests/project/${project._id}`);
      setRequestsForProject(data);
    } catch (error) {
      toast.error("Failed to load requests");
    } finally {
      setLoadingRequests(false);
    }
  };

  const handleStatusUpdate = async (
    requestId: string,
    status: "accepted" | "rejected"
  ) => {
    try {
      await api.patch(`/requests/${requestId}`, { status });
      toast.success(`Applicant ${status}!`);
      setRequestsForProject((prev) =>
        prev.map((req) => (req._id === requestId ? { ...req, status } : req))
      );
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="min-h-screen theme-bg-surface pt-24 px-4 pb-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-white/10 pb-4 gap-4 md:gap-0">
          <div>
            <h1 className="text-3xl font-bold theme-text">Dashboard</h1>
            <p className="theme-text-secondary text-sm mt-1">
              Manage your projects and applications
            </p>
          </div>

          <div className="flex bg-white/10 border border-white/20 p-1 rounded-lg mt-4 md:mt-0 w-full md:w-auto">
            <button
              onClick={() => setActiveTab("posts")}
              className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all flex-1 md:flex-none justify-center ${
                activeTab === "posts"
                  ? "bg-gradient-to-tr from-[#287bff] to-[#51b8ff] text-white shadow-xl"
                  : "theme-text-secondary hover:theme-text"
              }`}
            >
              <LayoutDashboard size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">My Posts</span>
              <span className="sm:hidden">Posts</span>
            </button>
            <button
              onClick={() => setActiveTab("applications")}
              className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-all flex-1 md:flex-none justify-center ${
                activeTab === "applications"
                  ? "bg-gradient-to-tr from-[#287bff] to-[#51b8ff] text-white shadow-xl"
                  : "theme-text-secondary hover:theme-text"
              }`}
            >
              <Send size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">Sent Requests</span>
              <span className="sm:hidden">Requests</span>
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center p-20">
            <Loader2 className="animate-spin text-blue-500" />
          </div>
        ) : (
          <>
            {activeTab === "posts" &&
              (myProjects.length === 0 ? (
                <div className="theme-text-secondary text-center py-20 theme-bg-surface-secondary rounded-xl theme-border">
                  You haven't posted any projects yet.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myProjects.map((project) => (
                    <div
                      key={project._id}
                      className="glass-card p-6 flex flex-col group hover:border-blue-500/30 transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold theme-text line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="text-xs px-2 py-1 rounded theme-bg-surface-secondary theme-text-secondary capitalize">
                          {project.type}
                        </span>
                      </div>
                      <p className="theme-text-secondary text-sm line-clamp-2 mb-6 flex-grow">
                        {project.description}
                      </p>

                      <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-sm theme-text-muted">
                          Team: {project.teamSize}
                        </span>
                        <button
                          onClick={() => openRequestsModal(project)}
                          className="px-4 py-2 bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white text-sm rounded-lg flex items-center gap-2"
                        >
                          <Eye size={16} /> View Requests
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}

            {activeTab === "applications" && (
              <div className="space-y-4">
                {myApplications.length === 0 ? (
                  <div className="theme-text-secondary text-center py-20 theme-bg-surface-secondary rounded-xl theme-border">
                    You haven't applied to any projects yet.
                  </div>
                ) : (
                  myApplications.map((app) => (
                    <div
                      key={app._id}
                      className="glass-card p-6 flex flex-col md:flex-row items-center justify-between gap-6"
                    >
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold theme-text">
                            {app.projectId.title}
                          </h3>
                          <span
                            className={`text-xs px-2 py-1 rounded-full border capitalize ${
                              app.status === "accepted"
                                ? "bg-green-500/10 border-green-500/20 text-green-400"
                                : app.status === "rejected"
                                ? "bg-red-500/10 border-red-500/20 text-red-400"
                                : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {app.status}
                          </span>
                        </div>
                        <p className="theme-text-secondary text-sm italic">
                          "Your note: {app.message}"
                        </p>
                      </div>

                      <div className="flex items-center gap-4 min-w-[200px] justify-end">
                        {app.status === "accepted" ? (
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-green-400 font-medium mb-1">
                              <Check size={16} /> Accepted!
                            </div>
                            <p className="text-xs theme-text-muted">
                              The team lead has your WhatsApp number.
                            </p>
                          </div>
                        ) : app.status === "rejected" ? (
                          <div className="flex items-center gap-2 text-red-400 font-medium">
                            <X size={16} /> Not Selected
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-yellow-500 font-medium">
                            <Clock size={16} /> Pending Review
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}

        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="theme-bg-surface w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl theme-border shadow-2xl relative">
              <div className="p-6 theme-border sticky top-0 theme-bg-surface z-10 flex justify-between items-center">
                <h2 className="text-xl font-bold theme-text">
                  Requests for "{selectedProject.title}"
                </h2>
                <button onClick={() => setSelectedProject(null)}>
                  <X size={24} className="theme-text-secondary hover:theme-text" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {loadingRequests ? (
                  <div className="flex justify-center">
                    <Loader2 className="animate-spin text-blue-500" />
                  </div>
                ) : requestsForProject.length === 0 ? (
                  <div className="text-center theme-text-secondary">
                    No requests yet.
                  </div>
                ) : (
                  requestsForProject.map((request) => (
                    <div
                      key={request._id}
                      className="theme-bg-surface-secondary theme-border rounded-xl p-6 flex flex-col md:flex-row gap-6"
                    >
                      <div className="md:w-1/3 space-y-3">
                        <h3 className="text-lg font-bold theme-text">
                          {request.userId.name}
                        </h3>
                        <p className="text-sm theme-text-secondary">
                          {request.userId.college} • Year {request.userId.year}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {request.userId.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 theme-bg-surface-secondary rounded theme-text-secondary border theme-border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <a
                          href={request.userId.githubLink}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm theme-text-secondary hover:theme-text"
                        >
                          <Github size={16} /> GitHub Profile{" "}
                          <ExternalLink size={12} />
                        </a>
                      </div>

                      <div className="md:w-2/3 flex flex-col justify-between">
                        <div className="bg-black/20 p-4 rounded-lg mb-4">
                          <p className="theme-text-secondary text-sm">
                            "{request.message}"
                          </p>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                          {request.status === "pending" && (
                            <>
                              <button
                                onClick={() =>
                                  handleStatusUpdate(request._id, "rejected")
                                }
                                className="px-3 py-1.5 rounded border border-red-500/30 text-red-400 hover:bg-red-500/10 text-sm"
                              >
                                Reject
                              </button>
                              <button
                                onClick={() =>
                                  handleStatusUpdate(request._id, "accepted")
                                }
                                className="px-3 py-1.5 rounded bg-green-600 hover:bg-green-500 text-white text-sm"
                              >
                                Accept
                              </button>
                            </>
                          )}
                          {request.status === "accepted" && (
                            <a
                              href={`https://wa.me/${request.userId.whatsappNumber}`}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 bg-[#25D366] text-black font-bold text-sm rounded-lg flex items-center gap-2"
                            >
                              <MessageCircle size={18} fill="black" /> WhatsApp
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProjects;
