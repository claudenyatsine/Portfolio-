import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  current?: boolean;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      current: true,
      description: [
        'Led development of microservices architecture serving 1M+ users',
        'Mentored junior developers and established coding standards',
        'Optimized application performance resulting in 40% faster load times',
        'Collaborated with product team to define technical requirements'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Implemented automated testing reducing bugs by 60%',
        'Built responsive designs for mobile and desktop platforms',
        'Integrated third-party APIs and payment systems'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe', 'Jest', 'SCSS']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2019 - 2020',
      description: [
        'Created interactive user interfaces for SaaS platform',
        'Improved user experience through A/B testing and analytics',
        'Collaborated with designers to implement pixel-perfect designs',
        'Contributed to open-source projects and company tech blog'
      ],
      technologies: ['Vue.js', 'JavaScript', 'CSS3', 'Webpack', 'Firebase']
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'Web Agency Pro',
      location: 'Boston, MA',
      period: '2018 - 2019',
      description: [
        'Built custom WordPress themes and plugins for clients',
        'Optimized websites for SEO and performance',
        'Maintained and updated existing client websites',
        'Learned modern development practices and workflows'
      ],
      technologies: ['WordPress', 'PHP', 'jQuery', 'MySQL', 'HTML5', 'CSS3']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the amazing companies I've worked with
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 z-10 ${
                  exp.current 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse' 
                    : 'bg-gray-600 border-2 border-gray-500'
                }`}></div>

                {/* Content */}
                <div className="ml-20 w-full">
                  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center text-indigo-400 mb-2">
                          <span className="font-medium">{exp.company}</span>
                          {exp.current && (
                            <span className="ml-2 px-2 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs border border-indigo-600/30">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-gray-400">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-300 text-sm leading-relaxed">
                          <ArrowRight size={14} className="mr-2 mt-0.5 text-indigo-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs border border-gray-600/30 hover:border-indigo-500/50 hover:text-indigo-300 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;