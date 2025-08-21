import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const YouTubeSection = () => {
  const videos = [
    {
      id: "UhHSX5CahkU",
      title: "Do Pokemon Really Need All 6 Stats?",
      description: "A whole new stat system for Pokemon! Exploring statistical analysis and data science concepts through Pokemon mechanics.",
      thumbnail: `https://img.youtube.com/vi/UhHSX5CahkU/maxresdefault.jpg`,
      views: "21K",
      duration: "12:45",
      tags: ["Statistics", "Data Science", "Pokemon"],
      url: "https://www.youtube.com/watch?v=UhHSX5CahkU"
    },
    {
      id: "33kb37NYOTc", 
      title: "The 4 Must-Know LLM Parameters and the Intuitive Math Behind Them",
      description: "The intuitive mathematics behind the four LLM parameters that will most help perfect your LLM applications!",
      thumbnail: `https://img.youtube.com/vi/33kb37NYOTc/maxresdefault.jpg`,
      views: "3.4K",
      duration: "15:20",
      tags: ["LLM", "Machine Learning", "AI"]
    },
    {
      id: "ZoJ2OctrFLA",
      title: "Why Are Time Series Special? : Time Series Talk",
      description: "So ... what's so special about time series? Deep dive into time series analysis and its unique properties.",
      thumbnail: `https://img.youtube.com/vi/ZoJ2OctrFLA/maxresdefault.jpg`,
      views: "101K", 
      duration: "10:30",
      tags: ["Time Series", "Statistics", "Analysis"]
    },
    {
      id: "1opjnegd_hA",
      title: "Time Series Talk : Augmented Dickey Fuller Test + Code",
      description: "Theory and code behind the Augmented Dickey Fuller Test for testing stationarity in time series data.",
      thumbnail: `https://img.youtube.com/vi/1opjnegd_hA/maxresdefault.jpg`,
      views: "141K",
      duration: "18:15",
      tags: ["Time Series", "Statistics", "Python"]
    },
    {
      id: "g2ext963IZg",
      title: "What is R Squared?",
      description: "Understanding R-squared: the coefficient of determination and its role in evaluating model performance.",
      thumbnail: `https://img.youtube.com/vi/g2ext963IZg/maxresdefault.jpg`,
      views: "33K",
      duration: "8:45",
      tags: ["Statistics", "Regression", "R-squared"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-cyber-purple/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-4 glitch-effect">
            YouTube Channel
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Watch my latest tutorials on AI, machine learning, and automation
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <svg className="w-8 h-8 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-lg font-semibold">@Ritwik8908</span>
          </div>
          
          <Button 
            size="lg" 
            variant="outline"
            className="bg-red-600 hover:bg-red-700 text-white border-red-600 hover:border-red-700"
            asChild
          >
            <a 
              href="https://www.youtube.com/@Ritwik8908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe to Channel
            </a>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-cyber-purple/20 hover:border-cyber-purple/40 transition-all duration-300 group cursor-pointer" onClick={() => window.open(video.url || `https://www.youtube.com/watch?v=${video.id}`, '_blank')}>
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    {video.views} views
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-cyber-purple transition-colors">
                    {video.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {video.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {video.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a 
              href="https://www.youtube.com/@Ritwik8908" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View All Videos
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;