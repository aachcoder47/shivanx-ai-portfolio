
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundEffect from '@/components/BackgroundEffect';

const AboutPage = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Senior AI Engineer',
      company: 'Futuristic Creations',
      description: 'Leading AI development for multiple enterprise clients, focusing on natural language processing and predictive analytics solutions.'
    },
    {
      year: '2021',
      title: 'Machine Learning Engineer',
      company: 'Tech Innovations Inc.',
      description: 'Developed and deployed machine learning models for computer vision applications, particularly in medical imaging analysis.'
    },
    {
      year: '2019',
      title: 'AI Research Assistant',
      company: 'University AI Lab',
      description: 'Conducted research on generative adversarial networks and contributed to multiple published papers in the field.'
    },
    {
      year: '2018',
      title: 'MSc in Artificial Intelligence',
      company: 'Tech University',
      description: 'Specialized in deep learning and neural networks, graduated with honors.'
    }
  ];

  const skills = [
    'Machine Learning', 'Deep Learning', 'Natural Language Processing', 
    'Computer Vision', 'Neural Networks', 'Data Analysis', 
    'Python', 'TensorFlow', 'PyTorch', 'AWS', 'GCP',
    'React', 'Node.js', 'MongoDB'
  ];

  return (
    <>
      <BackgroundEffect />
      <section className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-cyber-purple glow-text">Me</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              AI engineer passionate about creating innovative solutions that push the boundaries of technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-2"
            >
              <h2 className="text-2xl font-bold mb-4">My Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  As an AI engineer, I've dedicated my career to exploring the intersection of artificial intelligence and practical problem-solving. With a strong background in machine learning, deep learning, and software development, I specialize in creating AI solutions that address real-world challenges.
                </p>
                <p>
                  My journey in AI began during my Master's degree, where I focused on neural networks and their applications in computer vision. This academic foundation quickly evolved into practical expertise as I joined research teams and later transitioned to industry roles.
                </p>
                <p>
                  Today, I focus on developing cutting-edge AI systems that combine technical excellence with intuitive user experiences. Whether creating intelligent automation tools, predictive analytics systems, or creative AI applications, my goal is always to push the boundaries of what's possible while delivering tangible benefits.
                </p>
                <p>
                  When I'm not coding, I enjoy sharing knowledge through technical writing and mentorship, exploring the latest research in machine learning, and contemplating the ethical implications of AI advancement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-block px-3 py-1 rounded-full text-sm border bg-black/40 border-cyber-purple/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Professional Journey</h2>
            <div className="relative">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="ml-2">
                    <span className="text-sm text-cyber-purple">{item.year}</span>
                    <h3 className="text-lg font-bold mt-1">{item.title}</h3>
                    <p className="text-gray-400">{item.company}</p>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
