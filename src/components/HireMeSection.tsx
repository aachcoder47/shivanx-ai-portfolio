import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HireMeSection = () => {
  return (
    <section className="py-20 container mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to <span className="text-cyber-cyan glow-text">Hire Me?</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8">
          Let's discuss your project and bring your AI vision to life. From custom models to automation scripts, 
          I'm here to deliver cutting-edge solutions tailored to your needs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-black/40 border-cyber-cyan/30 hover:border-cyber-cyan transition-all duration-300 card-hover h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-space text-cyber-cyan">Get In Touch</CardTitle>
              <CardDescription className="text-gray-400">
                Multiple ways to reach me for your AI development needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button asChild className="w-full justify-start neon-button neon-button--cyan">
                  <a 
                    href="https://www.fiverr.com/users/god_dev456" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MessageCircle className="mr-3 h-4 w-4" />
                    Message Me on Fiverr
                  </a>
                </Button>
              </div>
              
              <div className="bg-cyber-cyan/10 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-cyber-cyan mb-2">Quick Response Guaranteed</h4>
                <p className="text-gray-300 text-sm">
                  Average response time: 2 hours. Message me on Fiverr for the fastest communication 
                  and to discuss your project requirements in detail.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Portfolio & Expertise */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-black/40 border-cyber-purple/30 hover:border-cyber-purple transition-all duration-300 card-hover h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-space text-cyber-purple">My Expertise</CardTitle>
              <CardDescription className="text-gray-400">
                Specialized AI solutions with proven track record
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-cyber-purple/10 rounded-lg p-3 text-center">
                  <div className="font-semibold text-cyber-purple">3+ Years</div>
                  <div className="text-gray-400">Python Experience</div>
                </div>
                <div className="bg-cyber-cyan/10 rounded-lg p-3 text-center">
                  <div className="font-semibold text-cyber-cyan">35+ Reviews</div>
                  <div className="text-gray-400">5-Star Rating</div>
                </div>
                <div className="bg-cyber-purple/10 rounded-lg p-3 text-center">
                  <div className="font-semibold text-cyber-purple">Fast Delivery</div>
                  <div className="text-gray-400">2-Hour Response</div>
                </div>
                <div className="bg-cyber-cyan/10 rounded-lg p-3 text-center">
                  <div className="font-semibold text-cyber-cyan">24/7 Support</div>
                  <div className="text-gray-400">Always Available</div>
                </div>
              </div>
              
              <Button asChild className="w-full neon-button neon-button--purple">
                <a 
                  href="https://shivanx-ai-portfolio.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  View Full Portfolio
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 border border-cyber-purple/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            From concept to deployment, I'll help you build intelligent solutions that drive real business value. 
            Let's discuss your requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="neon-button neon-button--cyan">
              <a 
                href="https://www.fiverr.com/users/god_dev456" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Hire Me on Fiverr
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/contact">
                Free Consultation
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HireMeSection;