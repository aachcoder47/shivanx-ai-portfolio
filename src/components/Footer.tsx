import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-cyber-purple/20 bg-black/40 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code className="h-5 w-5 text-cyber-cyan" />
              <span className="text-lg font-bold font-space tracking-wider">Ritwik Raj</span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              AI engineer crafting innovative solutions at the intersection of technology and creativity.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-cyber-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-cyber-cyan transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyber-cyan transition-colors">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-cyber-cyan transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-cyber-purple" />
                <a href="mailto:sales@futuristiccreations.tech" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  sales@futuristiccreations.tech
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-cyber-purple" />
                <a href="tel:+917462085177" className="text-gray-400 hover:text-cyber-cyan transition-colors">
                  +91 7462085177
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyber-purple/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Ritwik Raj. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with <span className="text-cyber-magenta">❤</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
