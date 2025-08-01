
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center cyber-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/10 to-transparent pointer-events-none" />
      
      <div 
        className="container mx-auto px-4 md:px-6 py-24 relative z-10 flex flex-col items-center justify-center text-center"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 glitch-effect"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="gradient-text">Ritwik Raj</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm Ritwik Raj, an AI engineer crafting innovative solutions at the intersection of technology and creativity.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            asChild
            className="neon-button neon-button--purple"
          >
            <Link to="/projects">
              Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          
          <Button 
            asChild
            className="neon-button neon-button--cyan"
          >
            <a 
              href="https://www.fiverr.com/users/god_dev456" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Hire Me on Fiverr <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button 
            asChild
            className="neon-button neon-button--magenta"
          >
            <a 
              href="https://shivanshrajauj6ax4r.contra.com/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Hire Me on Contra <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div 
          className="animate-bounce cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <ArrowRight className="h-6 w-6 text-cyber-cyan transform rotate-90" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
