import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Navbar from "./components/shared/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import CreateProject from "./pages/CreateProject";
import MyProjects from "./pages/MyProjects";
import { useThemeStore } from "./context/useThemeStore";

function App() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen relative overflow-hidden selection:bg-blue-500/30 theme-text">
        
       
        <Toaster position="top-center" toastOptions={{
          style: {
            background: '#121212',
            color: '#fff',
            border: '1px solid #333'
          }
        }} />

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/projects" element={<Dashboard />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/my-projects" element={<MyProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;