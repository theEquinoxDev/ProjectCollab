import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
     
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 px-4 py-2 rounded-full mb-6">
          <Sparkles className="text-blue-400" size={16} />
          <span className="text-blue-300 text-sm font-medium">Ready to Build Amazing Projects?</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold theme-text mb-4">
          Start Your Journey Today
        </h2>

        <p className="theme-text-secondary text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of campus developers who are already building incredible projects together.
          Find your perfect team or start your next big idea.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            to="/register"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base bg-gradient-to-tr from-[#287bff] to-[#51b8ff] shadow-xl hover:scale-105 transition-transform text-white tracking-wider focus:outline-none flex items-center justify-center gap-2"
          >
            Get Started Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/projects"
            className="px-8 py-4 border theme-border theme-text font-medium rounded-lg hover:bg-black/5 dark:hover:bg-white/10 hover:border-blue-500 transition-all duration-300"
          >
            Browse Projects
          </Link>
        </div>

        <div className="mt-8 text-gray-500 text-sm">
          <p>No credit card required • Free forever • Join in 2 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
