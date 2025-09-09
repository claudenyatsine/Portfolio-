import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/claudenyatsine', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/claude-nyatsine-534290147/', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/claudenyatsine', label: 'Twitter' },
    { icon: Mail, href: 'mailto:nyatsinec@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-2xl font-bold text-white">
              <span className="text-indigo-400">{'<'}</span>
              Claude Nyatsine
              <span className="text-indigo-400">{'/>'}</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Full Stack Developer passionate about creating beautiful, functional, 
              and user-friendly applications that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:scale-110"
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>Harare, Zimbabwe</p>
              <p>nyatsinec@gmail.com</p>
              <p>+263 774 264540</p>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-600/30">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm flex items-center">
            <span>© {currentYear} Claude Nyatsine. </span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;