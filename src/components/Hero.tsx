import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const roles = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Software Engineer',
  'Frontend Specialist',
];

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentIndex];

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      setDisplayText(currentRole.substring(0, charIndex + 1));
      timeoutId = setTimeout(() => setCharIndex(charIndex + 1), 100);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      setDisplayText(currentRole.substring(0, charIndex - 1));
      timeoutId = setTimeout(() => setCharIndex(charIndex - 1), 50);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % roles.length);
      timeoutId = setTimeout(() => setCharIndex(0), 500);
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-start bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23919191%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <div className="mb-8 animate-fadeInUp flex justify-start">
          <div className="w-32 h-32 mb-6 relative" style={{ margin: '0 auto' }}>
            {/*<div className="w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold animate-pulse">
              CMN
            </div>*/}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-ping opacity-20"></div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Claude Nyatsine</span>
        </h1>
        
        <div className="min-h-[60px]">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
            I'm a <span className="text-indigo-400 font-semibold">{displayText}</span>
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mr-auto leading-relaxed">
          Passionate about creating beautiful, functional, and user-friendly applications 
          that solve real-world problems and deliver exceptional user experiences.
        </p>

        <div className="flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </a>
          <a
            href="#"
            className="border-2 border-indigo-400 text-indigo-400 px-8 py-4 rounded-full hover:bg-indigo-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <Download size={20} />
            <span>Download CV</span>
          </a>
        </div>

        <div className="flex justify-start space-x-6">
          <a href="https://github.com/claudenyatsine" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/claude-nyatsine-534290147/" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:nyatsinec@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 animate-bounce" style={{ left: '50%', transform: 'translateX(-50%)' }}>
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  )
};

export default Hero;