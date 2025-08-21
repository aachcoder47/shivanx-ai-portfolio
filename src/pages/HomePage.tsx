
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProjectShowcase from '@/components/ProjectShowcase';
import YouTubeSection from '@/components/YouTubeSection';
import FiverrSection from '@/components/FiverrSection';
import HireMeSection from '@/components/HireMeSection';
import BackgroundEffect from '@/components/BackgroundEffect';

const HomePage = () => {
  return (
    <>
      <BackgroundEffect />
      <HeroSection />
      <FeaturedProjects />
      <ProjectShowcase />
      <YouTubeSection />
      <FiverrSection />
      <HireMeSection />
    </>
  );
};

export default HomePage;
