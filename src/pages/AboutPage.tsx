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
              <p className="text-gray-300">
                When I'm not coding, you'll find me spending time with my furry companion, exploring new technologies, or brainstorming the next big innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
