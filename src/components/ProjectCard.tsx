
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  index: number;
  color?: 'purple' | 'cyan' | 'magenta';
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  slug,
  index,
  color = 'purple'
}: ProjectCardProps) => {
  const colorVariants = {
    purple: "from-cyber-purple/20 to-transparent border-cyber-purple/30 hover:border-cyber-purple",
    cyan: "from-cyber-cyan/20 to-transparent border-cyber-cyan/30 hover:border-cyber-cyan",
    magenta: "from-cyber-magenta/20 to-transparent border-cyber-magenta/30 hover:border-cyber-magenta",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link 
        to={`/projects/${slug}`} 
        className={cn(
          "block relative overflow-hidden rounded-lg border bg-gradient-to-b p-6 card-hover",
          colorVariants[color]
        )}
      >
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2 font-space">{title}</h3>
          <p className="text-gray-400 mb-6">{description}</p>
          <div className="flex items-center text-sm font-medium">
            <span className={`text-cyber-${color}`}>View Project</span>
            <ArrowUpRight className={`ml-1 h-4 w-4 text-cyber-${color}`} />
          </div>
        </div>
        
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-40 w-40 rounded-full bg-cyber-purple/20 blur-2xl" />
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
