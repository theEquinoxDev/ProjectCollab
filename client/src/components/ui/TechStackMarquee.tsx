const TechStackMarquee = () => {
  const technologies = [
    { name: 'React', color: '#61DAFB' },
    { name: 'Node.js', color: '#339933' },
    { name: 'Python', color: '#3776AB' },
    { name: 'Rust', color: '#000000' },
    { name: 'Docker', color: '#2496ED' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'TypeScript', color: '#3178C6' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'PostgreSQL', color: '#4169E1' },
    { name: 'AWS', color: '#FF9900' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Git', color: '#F05032' },
    { name: 'VS Code', color: '#007ACC' },
    { name: 'Next.js', color: '#000000' },
    { name: 'Express', color: '#000000' },
    { name: 'Tailwind', color: '#06B6D4' },
  ];

  return (
    <section className="py-8 overflow-hidden bg-transparent">
      <div className="relative">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold theme-text mb-3 md:mb-4">Built with Modern Tech Stack</h2>
          <p className="theme-text-secondary mb-6 md:mb-8 text-sm md:text-base">Join developers working with cutting-edge technologies</p>
        </div>

        <div className="flex animate-marquee pause-marquee">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 mx-6 flex items-center gap-2 px-4 py-2 rounded-full theme-bg-surface-secondary theme-border hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 group"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              <span className="theme-text font-medium text-sm whitespace-nowrap group-hover:text-blue-400 transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackMarquee;
