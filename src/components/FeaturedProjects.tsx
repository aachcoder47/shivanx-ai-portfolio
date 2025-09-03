
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: "AI PPT Generator",
      description: "A tool that transforms text into professional PowerPoint presentations using AI. (Currently not working)",
      image: "/placeholder.svg",
      slug: "ai-ppt-generator",
      color: "purple" as const,
      demoLink: "https://huggingface.co/spaces/ash2203/AI_PPT_Generator",
    },
    {
      title: "DocAI Chatbot",
      description: "An AI-powered chatbot designed to assist with document-related queries.",
      image: "/placeholder.svg",
      slug: "docai-chatbot",
      color: "cyan" as const,
      demoLink: "https://huggingface.co/spaces/aach456/DocAI-chatbot",
    },
    {
      title: "Music Generation AI",
      description: "An AI system that composes music based on user input.",
      image: "/placeholder.svg",
      slug: "music-generation-ai",
      color: "magenta" as const,
      demoLink: "https://huggingface.co/spaces/aach456/music-gen-ai",
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Featured <span className="text-cyber-purple glow-text">Projects</span>
        </h2>
        <Link 
          to="/projects" 
          className="flex items-center text-cyber-cyan hover:text-cyber-purple transition-colors group"
        >
          View All
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            {...project} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
