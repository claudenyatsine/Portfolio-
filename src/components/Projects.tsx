import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import malariaDashboard from '../assets/images/malaria-dashboard.png';
import superfert from '../assets/images/superfert.png';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Interactive Malaria Dashboard',
      description: 'Full-stack Interactive Malaria Dashboard which gives insights on the prevalance rate with cases and mortalities.',
      longDescription: 'The Malaria Dashboard is a data visualization and analysis tool designed to provide a comprehensive, interactive view of malaria-related data. Built as a modern web application, the dashboard empowers public health officials, researchers, and students to gain critical insights, identify trends, and make data-driven decisions in the fight against malaria.',
      image: malariaDashboard,
      tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Firestore', 'Tailwind CSS', 'Radix UI','Firebase Local Emulator Suite','Vercel'],
      liveUrl: 'https://malaria-dashboard-virid.vercel.app/',
      githubUrl: 'https://github.com/claudenyatsine/malaria-dashboard',
      featured: true,
    },
    {
      id: 2,
      title: 'SuperFert App',
      description: 'This is a project to showcase the z-index css properties in a real-world application.',
      longDescription: 'This project demonstrates the practical application of CSS z-index properties in building layered user interfaces, creating depth and interactivity in web applications.',
      image: superfert,
      tags: ['React'],
      liveUrl: 'https://vercel.com/nyatsinec-5166s-projects/super-fert-app',
      githubUrl: 'https://github.com/claudenyatsine/super-fert-app',
      featured: true,
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'A comprehensive learning management system for online education and course management.',
      longDescription: 'A robust platform for educators and students to manage courses, assignments, and learning materials with modern UI and responsive design.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management and insights',
      longDescription: 'A comprehensive social media analytics dashboard with data visualization, performance metrics, and automated reporting features.',
      image: 'https://images.pexels.com/photos/267371/pexels-photo-267371.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio showcasing creative work',
      longDescription: 'A modern, fully responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'CSS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time messaging app with modern UI and features',
      longDescription: 'A full-featured chat application with real-time messaging, file sharing, group chats, and user presence indicators.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Some of the projects I've worked on recently
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-400 text-sm font-medium">Featured Project</span>
                    <ArrowRight size={16} className="text-indigo-400" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">{project.title}</h3>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                    <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-2xl transition-transform duration-300 group-hover:transform group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid 
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-indigo-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:text-indigo-400 transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-indigo-400 rounded text-xs">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Projects;