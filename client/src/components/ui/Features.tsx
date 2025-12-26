import { Filter, Github, Zap, Users, Search, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Filter,
      title: "Skill-Based Filtering",
      description: "Find partners with exact skills you need"
    },
    {
      icon: Github,
      title: "Verified GitHub Profiles",
      description: "View portfolios and code quality"
    },
    {
      icon: Zap,
      title: "One-Click Apply",
      description: "Apply to projects with a single click"
    },
    {
      icon: Users,
      title: "Team Matching",
      description: "Smart suggestions for team compositions"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Filter by project type, skills, team size"
    },
    {
      icon: Shield,
      title: "Verified Students",
      description: "College email verification"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold theme-text mb-3 md:mb-4">
            Key Features
          </h2>
          <p className="theme-text-secondary text-sm md:text-base">
            Built specifically for campus developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group theme-bg-surface-secondary theme-border rounded-xl p-5 backdrop-blur-sm shadow-lg hover:shadow-blue-500/20 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-400/30 hover:bg-gradient-to-br hover:from-blue-500/5 hover:via-blue-600/5 hover:to-blue-700/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/30 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/30 group-hover:to-blue-600/40 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="theme-text font-semibold mb-2 text-base group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="theme-text-secondary text-sm leading-relaxed group-hover:text-blue-800 dark:group-hover:text-gray-400 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
