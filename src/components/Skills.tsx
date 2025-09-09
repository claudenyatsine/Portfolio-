import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Languages' },
    { name: 'TypeScript', level: 70, category: 'Languages' },
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 40, category: 'Languages' },
    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'REST', level: 75, category: 'API' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'Express.js', level: 85, category: 'Backend' },
    { name: 'Git/GitHub', level: 90, category: 'Tools' },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  useEffect(() => {
    const timer = setTimeout(() => {
      const newLevels: { [key: string]: number } = {};
      skills.forEach(skill => {
        newLevels[skill.name] = skill.level;
      });
      setAnimatedLevels(newLevels);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <div
              key={category}
              className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category}
              </h3>
              <div className="space-y-4">
                {getSkillsByCategory(category).map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-indigo-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${animatedLevels[skill.name] || 0}%`,
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'MongoDB', 'REST APIs', 'Git', 'Figma'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300 hover:transform hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;