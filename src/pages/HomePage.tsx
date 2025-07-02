
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import FiverrSection from '@/components/FiverrSection';
import BackgroundEffect from '@/components/BackgroundEffect';

const HomePage = () => {
  return (
    <>
      <BackgroundEffect />
      <HeroSection />
      <FeaturedProjects />
      <FiverrSection />
    </>
  );
};

export default HomePage;
