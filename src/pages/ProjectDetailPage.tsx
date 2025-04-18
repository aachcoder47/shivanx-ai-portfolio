import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BackgroundEffect from '@/components/BackgroundEffect';
import { useToast } from '@/hooks/use-toast';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  
  // Project data - in a real app this would come from an API or database
  const projectData = {
    'ai-ppt-generator': {
      title: 'AI PPT Generator',
      description: 'A tool that transforms text into professional PowerPoint presentations using AI.',
      color: 'purple' as const,
      demoLink: 'https://huggingface.co/spaces/ash2203/AI_PPT_Generator',
      fullDescription: `
        The AI PPT Generator is an advanced tool that leverages natural language processing and computer vision to automatically create stunning PowerPoint presentations from text input.
        
        By analyzing the content structure, identifying key points, and applying design principles, it creates professional slides that maintain visual consistency and engagement.
        
        This tool saves hours of manual presentation creation while ensuring high-quality results.
      `,
      features: [
        'Text-to-slide conversion with smart content organization',
        'Automatic image suggestion based on content',
        'Multiple design themes and customization options',
        'Export to PowerPoint or Google Slides formats'
      ],
      technologies: ['Natural Language Processing', 'Computer Vision', 'React', 'Python', 'FastAPI']
    },
    'docai-chatbot': {
      title: 'DocAI Chatbot',
      description: 'An AI-powered chatbot designed to assist with document-related queries.',
      color: 'cyan' as const,
      demoLink: 'https://huggingface.co/spaces/aach456/DocAI-chatbot',
      fullDescription: `
        DocAI is an intelligent chatbot built to help users quickly find information within large collections of documents. 
        
        Using advanced natural language understanding capabilities, it can analyze questions, search through document repositories, and provide accurate, contextual answers with source citations.
        
        This solution is perfect for knowledge management, customer support, and research applications.
      `,
      features: [
        'Document ingestion and indexing',
        'Natural language query processing',
        'Contextual answer generation with citations',
        'Integration with popular document platforms'
      ],
      technologies: ['Large Language Models', 'Vector Embeddings', 'React', 'Node.js', 'MongoDB']
    },
    'music-generation-ai': {
      title: 'Music Generation AI',
      description: 'An AI system that composes music based on user input.',
      color: 'magenta' as const,
      demoLink: 'https://huggingface.co/spaces/aach456/music-gen-ai',
      fullDescription: `
        The Music Generation AI is a creative tool that composes original music pieces based on user-defined parameters. 
        
        It can generate compositions in various genres, moods, and styles, allowing users to tweak and refine the output until they achieve their desired sound.
        
        Whether for creating background music for videos, developing video game soundtracks, or just exploring musical creativity, this AI offers endless possibilities.
      `,
      features: [
        'Multi-genre music composition',
        'Mood and tempo customization',
        'Instrument selection and arrangement',
        'Export to various audio formats'
      ],
      technologies: ['Deep Learning', 'Audio Signal Processing', 'React', 'Python', 'TensorFlow']
    },
    'mri-scan-detector': {
      title: 'MRI Scan Detector',
      description: 'A machine learning model that analyzes MRI scans for diagnostic purposes.',
      color: 'purple' as const,
      demoLink: 'https://gitlab.com/aach1/mri-scan-detector',
      fullDescription: `
        The MRI Scan Detector is a medical AI tool designed to assist radiologists in analyzing Magnetic Resonance Imaging scans. 
        
        Using deep learning algorithms trained on thousands of annotated medical images, it can detect and highlight potential abnormalities, helping medical professionals make faster and more accurate diagnoses.
        
        This tool serves as a second opinion system, enhancing diagnostic accuracy while reducing review time.
      `,
      features: [
        'Automated anomaly detection in MRI scans',
        'Region-of-interest highlighting',
        'Confidence scoring for findings',
        'Integration with medical imaging systems'
      ],
      technologies: ['Computer Vision', 'Medical Imaging', 'PyTorch', 'Python', 'DICOM Standards']
    },
    'scalping-trading-bot': {
      title: 'Scalping Trading Bot',
      description: 'An automated trading bot optimized for scalping strategies.',
      color: 'cyan' as const,
      demoLink: 'https://gitlab.com/aach1/scalping-trading-bot',
      fullDescription: `
        The Scalping Trading Bot is an algorithmic trading system designed for high-frequency, small-profit trades in financial markets. 
        
        It employs various technical indicators and pattern recognition techniques to identify short-term trading opportunities, executing trades with precision timing to capitalize on small price movements.
        
        With risk management features and performance analytics, this bot helps traders implement systematic strategies while minimizing emotional decision-making.
      `,
      features: [
        'Real-time market data analysis',
        'Multiple technical indicator support',
        'Customizable trading parameters',
        'Risk management controls and reporting'
      ],
      technologies: ['Machine Learning', 'Time Series Analysis', 'Python', 'Node.js', 'Trading APIs']
    }
  };
  
  const project = projectData[slug as keyof typeof projectData];
  
  if (!project) {
    return (
      <div className="pt-32 pb-24 container mx-auto px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </div>
    );
  }
  
  const handleDemoClick = () => {
    if (project.demoLink) {
      window.open(project.demoLink, '_blank');
    } else {
      toast({
        title: "Demo Coming Soon",
        description: "The live demo for this project will be available soon.",
      });
    }
  };

  return (
    <>
      <BackgroundEffect />
      <section className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-cyber-cyan hover:text-cyber-purple mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className={`text-cyber-${project.color} glow-text`}>{project.title}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">{project.description}</p>
            
            <div className="bg-black/40 border border-cyber-purple/20 rounded-lg p-6 mb-12">
              <div className="prose prose-invert max-w-none">
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-300 mb-4">{paragraph}</p>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className={`inline-block w-2 h-2 rounded-full bg-cyber-${project.color} mt-2 mr-2`} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`inline-block px-3 py-1 rounded-full text-sm border bg-black/40 border-cyber-${project.color}/50`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className={`neon-button neon-button--${project.color}`}
                onClick={handleDemoClick}
              >
                View Live Demo
              </Button>
              
              <Button 
                variant="outline" 
                className="border-gray-600 hover:bg-gray-800"
                onClick={handleDemoClick}
              >
                View Code Repository
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
