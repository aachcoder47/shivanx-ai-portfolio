
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import BackgroundEffect from '@/components/BackgroundEffect';

const ProjectsPage = () => {
  const projects = [
    {
      title: "AI PPT Generator",
      description: "A tool that transforms text into professional PowerPoint presentations using AI.",
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
    },
    {
      title: "MRI Scan Detector",
      description: "A machine learning model that analyzes MRI scans for diagnostic purposes.",
      image: "/placeholder.svg",
      slug: "mri-scan-detector",
      color: "purple" as const,
      demoLink: "https://gitlab.com/aach1/mri-scan-detector",
    },
    {
      title: "Scalping Trading Bot",
      description: "An automated trading bot optimized for scalping strategies.",
      image: "/placeholder.svg",
      slug: "scalping-trading-bot",
      color: "cyan" as const,
      demoLink: "https://gitlab.com/aach1/scalping-trading-bot",
    }
  ];

  return (
    <>
      <BackgroundEffect />
      <section className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            AI <span className="text-cyber-purple glow-text">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my portfolio of innovative AI solutions that push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.slug} 
              {...project} 
              index={index} 
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
