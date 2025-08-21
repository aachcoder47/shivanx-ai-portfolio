import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const YouTubeSection = () => {
  const videos = [
    {
      id: "DeORzP0go5I",
      title: "Time Series Talk : Autocorrelation and Partial Autocorrelation",
      description: "Intuitive understanding of autocorrelation and partial autocorrelation in time series forecasting",
      thumbnail: `https://img.youtube.com/vi/DeORzP0go5I/maxresdefault.jpg`,
      views: "455K",
      tags: ["Time Series", "Autocorrelation", "Statistics"],
      url: "https://www.youtube.com/watch?v=DeORzP0go5I"
    },
    {
      id: "3UmyHed0iYE",
      title: "Time Series Talk : ARIMA Model",
      description: "Intro to the ARIMA model in time series analysis",
      thumbnail: `https://img.youtube.com/vi/3UmyHed0iYE/maxresdefault.jpg`,
      views: "376K",
      tags: ["Time Series", "ARIMA", "Forecasting"],
      url: "https://www.youtube.com/watch?v=3UmyHed0iYE"
    },
    {
      id: "5-2C4eO4cPQ",
      title: "Time Series Talk : Autoregressive Model",
      description: "Gentle intro to the AR model in Time Series Forecasting",
      thumbnail: `https://img.youtube.com/vi/5-2C4eO4cPQ/maxresdefault.jpg`,
      views: "362K",
      tags: ["Time Series", "AR Model", "Forecasting"],
      url: "https://www.youtube.com/watch?v=5-2C4eO4cPQ"
    },
    {
      id: "voryLhxiPzE",
      title: "Time Series Talk : Moving Average Model",
      description: "A gentle intro to the Moving Average model in Time Series Analysis",
      thumbnail: `https://img.youtube.com/vi/voryLhxiPzE/maxresdefault.jpg`,
      views: "219K",
      tags: ["Time Series", "MA Model", "Analysis"],
      url: "https://www.youtube.com/watch?v=voryLhxiPzE"
    },
    {
      id: "oY-j2Wof51c",
      title: "Time Series Talk : Stationarity",
      description: "Intro to stationarity in time series analysis",
      thumbnail: `https://img.youtube.com/vi/oY-j2Wof51c/maxresdefault.jpg`,
      views: "193K",
      tags: ["Time Series", "Stationarity", "Statistics"],
      url: "https://www.youtube.com/watch?v=oY-j2Wof51c"
    },
    {
      id: "HhvTlaN06AM",
      title: "Time Series Talk : ARMA Model",
      description: "The Autoregressive Moving Average (ARMA) model in time series analysis",
      thumbnail: `https://img.youtube.com/vi/HhvTlaN06AM/maxresdefault.jpg`,
      views: "189K",
      tags: ["Time Series", "ARMA", "Forecasting"],
      url: "https://www.youtube.com/watch?v=HhvTlaN06AM"
    },
    {
      id: "ugOvehrTRRw",
      title: "Unit Roots : Time Series Talk",
      description: "All about unit roots and why they pose such a problem for us",
      thumbnail: `https://img.youtube.com/vi/ugOvehrTRRw/maxresdefault.jpg`,
      views: "142K",
      tags: ["Time Series", "Unit Roots", "Statistics"],
      url: "https://www.youtube.com/watch?v=ugOvehrTRRw"
    },
    {
      id: "1opjnegd_hA",
      title: "Time Series Talk : Augmented Dickey Fuller Test + Code",
      description: "Theory and code behind the Augmented Dickey Fuller Test",
      thumbnail: `https://img.youtube.com/vi/1opjnegd_hA/maxresdefault.jpg`,
      views: "141K",
      tags: ["Time Series", "ADF Test", "Python"],
      url: "https://www.youtube.com/watch?v=1opjnegd_hA"
    },
    {
      id: "inoBpq1UEn4",
      title: "GARCH Model : Time Series Talk",
      description: "All about the GARCH model in Time Series Analysis!",
      thumbnail: `https://img.youtube.com/vi/inoBpq1UEn4/maxresdefault.jpg`,
      views: "109K",
      tags: ["Time Series", "GARCH", "Volatility"],
      url: "https://www.youtube.com/watch?v=inoBpq1UEn4"
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