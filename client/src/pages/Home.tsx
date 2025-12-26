import React from "react";
import { Link } from "react-router-dom";
import ProblemSection from "../components/ui/ProblemSection";
import HowItWorks from "../components/ui/HowItWorks";
import Features from "../components/ui/Features";
import LiveStats from "../components/ui/LiveStats";
import TechStackMarquee from "../components/ui/TechStackMarquee";
import FAQ from "../components/ui/FAQ";
import CTA from "../components/ui/CTA";
import Footer from "../components/ui/Footer";
import { Search, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      
      <div
        className="pointer-events-none absolute -top-10 right-[-360px] h-[700px] w-[1000px] rotate-12 opacity-75 mix-blend-lighten z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 80% 25%,rgba(51,122,255,0.36) 0%,transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-14 right-[-180px] h-64 w-[580px] opacity-80 mix-blend-lighten z-0"
        style={{
          background:
            "linear-gradient(135deg,rgba(51,122,255,0.34)_23%,transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[680px] h-48 rounded-full bg-gradient-to-br from-[#398cff]/40 via-[#337aff]/10 to-transparent blur-[120px] opacity-60 mt-0 mx-auto" />
      </div>

      <div className="relative z-10">
        <HeroSection />

        <TechStackMarquee />

        <ProblemSection />

        <div id="how-it-works" className="scroll-mt-20">
          <HowItWorks />
        </div>

        <div id="features" className="scroll-mt-20">
          <Features />
        </div>

        <LiveStats />

        <div id="faq" className="scroll-mt-20">
          <FAQ />
        </div>

        <CTA />

        <Footer />
      </div>
    </div>
  );
};


const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent theme-text pt-12 pb-4 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        
        <div className="inline-flex items-center gap-1 bg-[#112042]/60 px-2 py-1 mb-6 rounded-full shadow-lg backdrop-blur-[2px] border border-[#223b56]/50">
          <span className="bg-gradient-to-br from-[#58a6ff] to-[#337aff] w-1.5 h-1.5 rounded-full animate-pulse"></span>
          <span className="text-blue-200 text-sm font-semibold tracking-wide uppercase ml-1">
            ProjectCollab for Campus
          </span>
        </div>

       
        <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight">
          <span className="relative z-10">Stop Spamming Groups.</span>
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-white via-[#53aaff] to-[#337aff]">
          Start Shipping Code.
          </span>
        </h1>


        <p className="theme-text-secondary leading-relaxed max-w-xl mx-auto mb-8 text-lg">
          Campus-ready platform to find your team, showcase your skills, and
          build amazing projects for hackathons, coursework, and more.
        </p>

        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12 px-4">
          <Link 
            to="/register" 
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-transform text-white tracking-wider focus:outline-none flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          
          <Link 
            to="/projects"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base theme-bg-surface-secondary border theme-border hover:border-blue-500 transition-all text-blue-400 shadow-md focus:outline-none hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center gap-2"
          >
            <Search size={18} />
            Explore Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Home;