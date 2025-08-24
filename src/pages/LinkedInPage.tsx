import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, LinkedinIcon, MessageCircle, Users, Award, TrendingUp } from 'lucide-react';

const LinkedInPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 glitch-effect">
            LinkedIn Profile
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with me on LinkedIn for professional networking and career opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <LinkedinIcon className="w-16 h-16 text-blue-500" />
                </div>
                <CardTitle className="text-2xl font-space text-cyber-cyan">Ritwik Raj</CardTitle>
                <p className="text-muted-foreground">AI Engineer & Machine Learning Specialist</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-cyber-cyan/10 rounded-lg p-4">
                  <h4 className="font-semibold text-cyber-cyan mb-2">Professional Summary</h4>
                  <p className="text-sm text-muted-foreground">
                    Passionate AI Engineer with 3+ years of experience in Python development, 
                    machine learning, and automation. Specialized in creating innovative AI solutions 
                    that drive business value and efficiency.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-cyber-purple/10 rounded-lg p-3 text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-cyber-purple" />
                    <div className="font-semibold text-cyber-purple">500+</div>
                    <div className="text-xs text-muted-foreground">Connections</div>
                  </div>
                  <div className="bg-cyber-cyan/10 rounded-lg p-3 text-center">
                    <Award className="w-6 h-6 mx-auto mb-2 text-cyber-cyan" />
                    <div className="font-semibold text-cyber-cyan">Top Rated</div>
                    <div className="text-xs text-muted-foreground">Freelancer</div>
                  </div>
                </div>

                <Button asChild className="w-full neon-button neon-button--cyan">
                  <a 
                    href="https://www.linkedin.com/in/ritwik-raj-692517372/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <LinkedinIcon className="mr-2 h-4 w-4" />
                    View LinkedIn Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300 h-full">
              <CardHeader>
                <CardTitle className="text-2xl font-space text-cyber-purple flex items-center">
                  <TrendingUp className="mr-2 h-6 w-6" />
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Core Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Machine Learning</Badge>
                    <Badge variant="secondary">TensorFlow</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">Scikit-learn</Badge>
                    <Badge variant="secondary">Pandas</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Time Series Analysis</Badge>
                    <Badge variant="outline">NLP</Badge>
                    <Badge variant="outline">Computer Vision</Badge>
                    <Badge variant="outline">Deep Learning</Badge>
                    <Badge variant="outline">Data Science</Badge>
                    <Badge variant="outline">Automation</Badge>
                  </div>
                </div>

                <div className="bg-cyber-purple/10 rounded-lg p-4">
                  <h4 className="font-semibold text-cyber-purple mb-2">Let's Connect!</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Follow my journey in AI and machine learning. I regularly share insights, 
                    tutorials, and industry updates.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a 
                      href="https://www.linkedin.com/in/ritwik-raj-692517372/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send Message on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-cyber-purple/20 to-cyber-cyan/20 border border-cyber-purple/30 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, and innovative AI projects. 
              Let's connect and explore how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="neon-button neon-button--cyan">
                <a 
                  href="https://www.linkedin.com/in/ritwik-raj-692517372/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline">
                <a 
                  href="https://calendly.com/aachcoder47/ritwikraj8908" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Schedule a Meeting
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LinkedInPage;