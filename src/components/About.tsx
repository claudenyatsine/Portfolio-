import React from 'react';
import { Code, Palette, Coffee, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable solutions' },
    { icon: Palette, title: 'Design Focus', description: 'Creating beautiful and intuitive interfaces' },
    { icon: Coffee, title: 'Problem Solver', description: 'Turning complex problems into simple solutions' },
    { icon: Users, title: 'Team Player', description: 'Collaborating effectively in diverse teams' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="mb-6 leading-relaxed">
                I'm a passionate Full Stack Junior Developer and currently advancing my skills as an alumni at Uncommon. My motivation and inspiration is greatly fueled by the fascination to comprehend the whole science behind the User interfaces we experience day by day, how they work, their ecosystem and everything that brings life to them. This drives the zeal to constantly learn with the aim in future to create something which is revolutionary in the tech world.
              </p>
              
              <p className="mb-6 leading-relaxed">
                Although time is very paramount to me, I always strive to find a balance between my professional and personal life as well as making it a point to schedule my time to connecting with stakeholders, peers in the tech industry, exploring new technologies and engaging in meaningful conversations.
              </p>

              <p className="leading-relaxed">
                I'm always excited to take on new challenges and work with teams that are passionate 
                about creating something meaningful. Let's build something amazing together!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-sm border border-indigo-600/30">
                Available for Freelance
              </span>
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-600/30">
                Open to Opportunities
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;