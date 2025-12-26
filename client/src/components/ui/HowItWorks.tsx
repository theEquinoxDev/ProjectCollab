import React from "react";
import { UserPlus, Search, MessageCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create Profile",
      description: "Add your skills, GitHub profile, and connect your WhatsApp"
    },
    {
      icon: Search,
      title: "Post or Apply",
      description: "Post your project or find teams that match your skills"
    },
    {
      icon: MessageCircle,
      title: "Connect Instantly",
      description: "Get WhatsApp numbers automatically after acceptance"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold theme-text mb-3 md:mb-4">
            How It Works
          </h2>
          <p className="theme-text-secondary mb-6 md:mb-8 text-sm md:text-base">
            Three simple steps to find your perfect project partner
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4 relative">
              <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-[#287bff] to-[#51b8ff] flex items-center justify-center text-white font-bold text-xs md:text-sm relative z-10 shadow-lg">
                {index + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-3 md:left-4 top-7 md:top-8 w-0.5 h-12 md:h-16 bg-gradient-to-b from-[#287bff]/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
