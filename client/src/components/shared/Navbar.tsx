import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogIn, User, Plus, Menu, X } from "lucide-react";
import { useAuthStore } from "../../context/useAuthStore";
import ThemeToggle from "../ui/ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-transparent md:bg-transparent md:backdrop-blur-[12px] backdrop-blur-[8px] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
           <span className="text-lg font-bold text-slate-900 dark:text-blue-400 drop-shadow-sm transition-all duration-300">
              ProjectCollab
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium theme-text-secondary hover:theme-text transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full group-hover:left-0"></span>
            </Link>

            {!isAuthenticated ? (
              <>
                <Link
                  to="/#how-it-works"
                  onClick={() => handleScroll("how-it-works")}
                  className="text-sm font-medium theme-text-secondary hover:theme-text transition-colors relative group"
                >
                  How it Works
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>

                <Link
                  to="/#features"
                  onClick={() => handleScroll("features")}
                  className="text-sm font-medium theme-text-secondary hover:theme-text transition-colors relative group"
                >
                  Features
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>

                <Link
                  to="/#faq"
                  onClick={() => handleScroll("faq")}
                  className="text-sm font-medium theme-text-secondary hover:theme-text transition-colors relative group"
                >
                  FAQ
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/projects"
                  className="text-sm font-medium theme-text-secondary hover:theme-text transition-colors relative group"
                >
                  Find Projects
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-500 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>

                <Link
                  to="/my-projects"
                  className="text-sm font-medium theme-text-secondary hover:theme-text transition-colors relative group"
                >
                  My Projects
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>

                <Link
                  to="/create-project"
                  className="text-sm font-medium theme-text-secondary hover:theme-text transition-colors relative group flex items-center gap-1"
                >
                  <Plus size={14} />
                  Post Project
                  <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-500 transition-all duration-700 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg theme-text-secondary hover:theme-text hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <span className="text-sm theme-text-secondary flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <User size={16} />
                  </div>
                  {user?.name}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg text-sm font-medium theme-text-secondary hover:theme-text border border-white/10 hover:border-blue-500 hover:bg-white/10 transition-all cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 rounded-lg text-sm font-medium theme-text-secondary hover:theme-text border hover:border-blue-500 border-white/10 hover:bg-white/5 transition-all cursor-pointer"
                >
                  Log In
                </button>
                <Link
            to="/register"
            className="px-4 py-2.5 rounded-lg font-medium text-sm bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-lg hover:shadow-xl hover:scale-105 transition-all text-white flex items-center gap-2"
          >
            Join Now <LogIn size={16} />
          </Link>
              </>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 top-20 bg-black/80 dark:bg-black/95 light:bg-white/95 backdrop-blur-xl z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="mx-4 mt-16 theme-bg-surface backdrop-blur-xl theme-border rounded-2xl shadow-2xl">
              <div className="flex flex-col p-6 space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium theme-text hover:text-blue-400 transition-colors py-3"
                >
                  Home
                </Link>

                {!isAuthenticated ? (
                  <>
                    <Link
                      to="/#how-it-works"
                      onClick={() => {
                        handleScroll("how-it-works");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-lg font-medium theme-text hover:text-blue-400 transition-colors py-3"
                    >
                      How it Works
                    </Link>

                    <Link
                      to="/#features"
                      onClick={() => {
                        handleScroll("features");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-lg font-medium theme-text hover:text-blue-400 transition-colors py-3"
                    >
                      Features
                    </Link>

                    <Link
                      to="/#faq"
                      onClick={() => {
                        handleScroll("faq");
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-lg font-medium theme-text hover:text-blue-400 transition-colors py-3"
                    >
                      FAQ
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/projects"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium theme-text hover:text-blue-400 transition-colors py-3"
                    >
                      Find Projects
                    </Link>

                    <Link
                      to="/my-projects"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors py-3"
                    >
                      My Projects
                    </Link>

                    <Link
                      to="/create-project"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium theme-text hover:text-blue-400 transition-colors py-3 flex items-center gap-2"
                    >
                      <Plus size={18} />
                      Post Project
                    </Link>
                  </>
                )}

                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex justify-center mb-4">
                    <ThemeToggle />
                  </div>
                  {isAuthenticated ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                          <User size={20} />
                        </div>
                        <span className="text-lg theme-text-secondary">
                          {user?.name}
                        </span>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setIsMobileMenuOpen(false);
                        }}
                        className="text-lg font-medium text-red-400 hover:text-red-300 transition-colors py-3"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Link
                        to="/login"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-lg font-medium theme-text hover:text-blue-400 transition-colors py-3"
                      >
                        Log In
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-6 py-3 rounded-full text-lg font-medium bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-all text-white text-center"
                      >
                        Join Now
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
