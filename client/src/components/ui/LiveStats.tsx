import React from "react";

const LiveStats = () => {
  return (
    <section className="pt-8 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold theme-text mb-3 md:mb-4">
          Join 200+ Campus Developers
        </h2>
        <p className="theme-text-secondary mb-6 md:mb-8 text-sm md:text-base">
          Students from top engineering colleges are already building projects together
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="theme-bg-surface-secondary theme-border rounded-lg p-3 md:p-4 text-center">
            <div className="text-xl md:text-2xl font-bold text-blue-400 mb-1 animate-pulse">200+</div>
            <div className="theme-text-secondary text-xs md:text-sm">Active Developers</div>
          </div>

          <div className="theme-bg-surface-secondary theme-border rounded-lg p-3 md:p-4 text-center">
            <div className="text-xl md:text-2xl font-bold text-green-400 mb-1 animate-pulse">50+</div>
            <div className="theme-text-secondary text-xs md:text-sm">Projects Completed</div>
          </div>

          <div className="theme-bg-surface-secondary theme-border rounded-lg p-3 md:p-4 text-center">
            <div className="text-xl md:text-2xl font-bold text-purple-400 mb-1 animate-pulse">15+</div>
            <div className="theme-text-secondary text-xs md:text-sm">Skills Covered</div>
          </div>

          <div className="theme-bg-surface-secondary theme-border rounded-lg p-3 md:p-4 text-center">
            <div className="text-xl md:text-2xl font-bold text-yellow-400 mb-1 animate-pulse">95%</div>
            <div className="theme-text-secondary text-xs md:text-sm">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStats;
