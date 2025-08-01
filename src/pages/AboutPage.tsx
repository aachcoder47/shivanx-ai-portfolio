import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import BackgroundEffect from '@/components/BackgroundEffect';

const AboutPage = () => {
  return (
    <>
      <BackgroundEffect />
      <section className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-cyber-purple glow-text">Me</span>
            </h1>
            <div className="flex justify-center mb-8">
              <Avatar className="w-32 h-32 border-4 border-cyber-purple">
                <AvatarImage 
                  src="/lovable-uploads/03f359e0-a920-4d33-ac50-62756adbe544.png" 
                  alt="Ritwik Raj" 
                  className="object-cover"
                />
                <AvatarFallback>RR</AvatarFallback>
              </Avatar>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Hi, I'm Ritwik Raj, an AI engineer passionate about creating innovative solutions at the intersection of technology and creativity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Personal Snapshot</h2>
              <img 
                src="/lovable-uploads/55e5506c-9c8a-4af9-a884-d94269d3e251.png" 
                alt="Ritwik with his dog" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">My Journey</h2>
              <p className="text-gray-300 mb-4">
                As an AI engineer, I'm driven by the potential of technology to solve complex problems and create meaningful experiences. My work spans various domains, from machine learning to innovative software solutions.
              </p>
              <p className="text-gray-300 mb-6">
                When I'm not coding, you'll find me spending time with my furry companion, exploring new technologies, or brainstorming the next big innovation.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="https://shivanx-ai-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/30 rounded-lg hover:bg-cyber-purple/30 transition-colors text-cyber-purple font-medium"
                >
                  Portfolio Website
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <a 
                  href="https://www.freelancer.com/u/ritwikraj56?sb=t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyber-cyan/20 border border-cyber-cyan/30 rounded-lg hover:bg-cyber-cyan/30 transition-colors text-cyber-cyan font-medium ml-3"
                >
                  Freelancer Profile
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <a 
                  href="https://shivanshrajauj6ax4r.contra.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-cyber-purple/20 border border-cyber-purple/30 rounded-lg hover:bg-cyber-purple/30 transition-colors text-cyber-purple font-medium block mt-3"
                >
                  Contra Portfolio
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-cyber-purple/10 to-cyber-cyan/10 rounded-lg border border-cyber-purple/20">
                <h3 className="text-lg font-semibold text-cyber-cyan mb-4">Professional Highlights</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-cyber-purple">5.0 ★</div>
                    <div className="text-gray-400">Perfect Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-cyber-cyan">100%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-cyber-purple">$15/hr</div>
                    <div className="text-gray-400">Competitive Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-cyber-cyan">6+ Projects</div>
                    <div className="text-gray-400">Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;