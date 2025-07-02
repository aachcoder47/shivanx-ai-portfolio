import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FiverrSection = () => {
  const fiverrGigs = [
    {
      title: "AI Images and Videos for Your Business",
      description: "I will generate high-quality AI images and videos tailored to your business needs using Midjourney, DALL·E, RunwayML, and Sora. Perfect for social media, advertising, websites, or product promotion.",
      price: "Starting at ₹2,249",
      delivery: "3-7 days",
      rating: 5.0,
      reviews: 15,
      skills: ["Stable Diffusion", "3D", "Fashion", "Website Design"],
      level: "Expert AI Developer",
      gigUrl: "https://www.fiverr.com/s/5r80Gyb"
    },
    {
      title: "Custom AI Model Development",
      description: "I will develop custom AI/ML models to solve real-world business problems from automation and prediction to personalization and analytics. Scalable solutions for startups and enterprises.",
      price: "Starting at ₹12,592",
      delivery: "7-30 days", 
      rating: 5.0,
      reviews: 8,
      skills: ["Custom ML Models", "Predictive Analytics", "NLP", "Computer Vision"],
      level: "Expert AI Developer",
      gigUrl: "https://www.fiverr.com/s/pdX3p4Y"
    },
    {
      title: "Python Automation Scripts",
      description: "I will write custom Python automation scripts to save time and streamline your work. From web scraping to data processing, email automation, and AI-powered automations.",
      price: "Starting at ₹5,000",
      delivery: "3-10 days",
      rating: 4.9,
      reviews: 12,
      skills: ["Python", "Web Scraping", "API Integration", "Task Automation"],
      level: "Expert AI Developer",
      gigUrl: "https://www.fiverr.com/s/pdX3pXo"
    }
  ];

  return (
    <section className="py-20 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Fiverr <span className="text-cyber-purple glow-text">Services</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          Professional AI development services available on Fiverr. Get custom solutions tailored to your business needs.
        </p>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <Badge variant="secondary" className="bg-cyber-purple/20 text-cyber-purple">
            Level 2 Seller
          </Badge>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-gray-300 ml-2">4.9 (35 reviews)</span>
          </div>
        </div>
        <Button asChild className="neon-button neon-button--purple">
          <a 
            href="https://www.fiverr.com/users/god_dev456" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Visit My Fiverr Profile
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fiverrGigs.map((gig, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="bg-black/40 border-cyber-purple/30 hover:border-cyber-purple transition-all duration-300 card-hover h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="text-xs mb-2">
                    {gig.level}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-400">{gig.rating} ({gig.reviews})</span>
                  </div>
                </div>
                <CardTitle className="text-lg font-space">{gig.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {gig.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-1 mb-4">
                  {gig.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4 text-cyber-cyan" />
                      <span className="text-gray-300">{gig.delivery}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-cyber-purple" />
                      <span className="text-cyber-purple font-medium">{gig.price}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full neon-button neon-button--cyan">
                    <a 
                      href={gig.gigUrl || "https://www.fiverr.com/users/god_dev456"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="bg-cyber-purple/10 border border-cyber-purple/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Why Choose My Services?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-cyber-cyan mb-2">Expert AI Development</h4>
              <p className="text-gray-300">Specialized in cutting-edge AI technologies and machine learning solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyber-cyan mb-2">Fast Delivery</h4>
              <p className="text-gray-300">Quick turnaround times without compromising on quality and functionality.</p>
            </div>
            <div>
              <h4 className="font-semibold text-cyber-cyan mb-2">24/7 Support</h4>
              <p className="text-gray-300">Continuous support and maintenance for all delivered projects.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FiverrSection;