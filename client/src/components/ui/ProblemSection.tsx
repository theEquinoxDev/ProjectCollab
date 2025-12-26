import React from "react";
import { MessageCircle, Users } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold theme-text mb-3 md:mb-4">
            Why Traditional Methods Suck
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-red-400 font-bold">✗</span>
              <h3 className="text-lg font-semibold text-red-400">The Old Way</h3>
            </div>

            <div className="space-y-4">
              <div className="group bg-gradient-to-br from-red-500/10 via-red-600/5 to-red-700/10 border border-red-500/20 rounded-xl p-5 backdrop-blur-sm shadow-lg hover:shadow-red-500/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-red-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <MessageCircle className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-red-300 font-semibold text-sm">WhatsApp Groups</span>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed pl-11">
                  Scrolling through 500 messages just to find a developer
                </p>
              </div>

              <div className="group bg-gradient-to-br from-red-500/10 via-red-600/5 to-red-700/10 border border-red-500/20 rounded-xl p-5 backdrop-blur-sm shadow-lg hover:shadow-red-500/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-red-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <Users className="w-4 h-4 text-red-400" />
                  </div>
                  <span className="text-red-300 font-semibold text-sm">Campus Forums</span>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed pl-11">
                  Posts get lost, responses are inconsistent
                </p>
              </div>

              <div className="group bg-gradient-to-br from-red-500/10 via-red-600/5 to-red-700/10 border border-red-500/20 rounded-xl p-5 backdrop-blur-sm shadow-lg hover:shadow-red-500/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-red-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                    <span className="text-red-300 font-bold text-sm">#</span>
                  </div>
                  <span className="text-red-300 font-semibold text-sm">Discord Servers</span>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed pl-11">
                  Too many channels, notifications overwhelming
                </p>
              </div>
            </div>
          </div>

          <div className="flex md:hidden items-center justify-center py-6">
            <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white font-bold text-sm">VS</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-400 font-bold">✓</span>
              <h3 className="text-lg font-semibold text-blue-400">ProjectCollab</h3>
            </div>

            <div className="space-y-4">
              <div className="group bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-blue-700/10 border border-blue-500/20 rounded-xl p-5 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-blue-400 font-bold text-sm">•</span>
                  </div>
                  <span className="text-blue-300 font-semibold text-sm">Skill Matching</span>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed pl-11">
                  Find partners with exact skills instantly
                </p>
              </div>

              <div className="group bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-blue-700/10 border border-blue-500/20 rounded-xl p-5 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-blue-400 font-bold text-sm">•</span>
                  </div>
                  <span className="text-blue-300 font-semibold text-sm">One-Click Connect</span>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed pl-11">
                  Get WhatsApp numbers after acceptance
                </p>
              </div>

              <div className="group bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-blue-700/10 border border-blue-500/20 rounded-xl p-5 backdrop-blur-sm shadow-lg hover:shadow-blue-500/10 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <span className="text-blue-400 font-bold text-sm">•</span>
                  </div>
                  <span className="text-blue-300 font-semibold text-sm">Centralized Platform</span>
                </div>
                <p className="theme-text-secondary text-sm leading-relaxed pl-11">
                  Everything in one place, no more scattered chats
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;