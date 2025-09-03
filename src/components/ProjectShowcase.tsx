import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Bot, TrendingUp, Brain, MessageSquare, Zap, Calendar } from 'lucide-react';
const ProjectShowcase = () => {
  const projects = [{
    title: "AI Content Generator",
    description: "An AI content generator that creates engaging social media and marketing content to build real audience engagement and drive value.",
    icon: <MessageSquare className="h-6 w-6" />,
    tags: ["AI", "Content Generation", "Social Media", "Marketing"],
    color: "cyber-cyan"
  }, {
    title: "AI Scalping Trading Bot",
    description: "Python-based scalping trading bot for Binance that automatically trades and helps users gain profits on cryptocurrency with custom trading pairs.",
    icon: <TrendingUp className="h-6 w-6" />,
    tags: ["Python", "Trading", "Cryptocurrency", "Automation", "Binance API"],
    color: "cyber-purple"
  }, {
    title: "MRI Scan Brain Detector",
    description: "Deep learning neural network system that detects unusual structures and globs in MRI brain scans using advanced computer vision techniques.",
    icon: <Brain className="h-6 w-6" />,
    tags: ["Deep Learning", "Medical AI", "Computer Vision", "Neural Networks"],
    color: "cyber-magenta"
  }, {
    title: "Paper Trading Bot",
    description: "Python trading bot using Zerodha API that provides 100% satisfied signals to help users trade effectively in paper trading environment.",
    icon: <Bot className="h-6 w-6" />,
    tags: ["Python", "Zerodha API", "Trading Signals", "Automation"],
    color: "cyber-cyan"
  }, {
    title: "Python Threads Bot",
    description: "Automated social media bot that likes, comments, follows, and posts automatically without manual interference to help users grow organically.",
    icon: <Zap className="h-6 w-6" />,
    tags: ["Python", "Social Media", "Automation", "Growth Hacking"],
    color: "cyber-purple"
  }];
  const services = [{
    title: "Python Automation",
    description: "Custom Python automation solutions to streamline your business processes and eliminate repetitive tasks.",
    price: "Contact for Pricing"
  }, {
    title: "Custom AI Models",
    description: "Develop tailored AI models for your specific business needs using the latest machine learning techniques.",
    price: "Contact for Pricing"
  }];
  return <section className="py-20 container mx-auto px-4 md:px-6">
      

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projects.map((project, index) => <motion.div key={project.title} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: index * 0.1
      }}>
            <Card className={`bg-black/40 border-${project.color}/30 hover:border-${project.color} transition-all duration-300 card-hover h-full`}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-${project.color}/20 flex items-center justify-center mb-4`}>
                  <div className={`text-${project.color}`}>
                    {project.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-space">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="outline" className={`border-${project.color}/30 text-${project.color}`}>
                      {tag}
                    </Badge>)}
                </div>
              </CardContent>
            </Card>
          </motion.div>)}
      </div>

      {/* Services Section */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.6
    }} className="text-center mb-12">
        <h3 className="text-2xl md:text-3xl font-bold mb-6">
          Professional <span className="text-cyber-purple glow-text">Services</span>
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {services.map((service, index) => <motion.div key={service.title} initial={{
        opacity: 0,
        x: index % 2 === 0 ? -20 : 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.6,
        delay: 0.8
      }}>
            <Card className="bg-black/40 border-cyber-purple/30 hover:border-cyber-purple transition-all duration-300 card-hover">
              <CardHeader>
                <CardTitle className="text-xl font-space text-cyber-purple">{service.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-cyber-cyan font-semibold">{service.price}</span>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://shivanshrajauj6ax4r.contra.com/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      View Service
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>)}
      </div>

      {/* CTA Section */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 1.0
    }} className="text-center">
        <div className="bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 border border-cyber-purple/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss your AI and automation needs. From concept to deployment, I'll help you build intelligent solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="neon-button neon-button--cyan">
              <a href="https://shivanshrajauj6ax4r.contra.com/" target="_blank" rel="noopener noreferrer">
                Hire on Contra
              </a>
            </Button>
            <Button asChild className="neon-button neon-button--purple">
              <a href="https://shivanshrajauj6ax4r.contra.com/" target="_blank" rel="noopener noreferrer">
                View Services on Contra
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://calendly.com/aachcoder47/ritwikraj8908" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>;
};
export default ProjectShowcase;