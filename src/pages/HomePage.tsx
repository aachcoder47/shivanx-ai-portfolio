
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import FiverrSection from '@/components/FiverrSection';
import HireMeSection from '@/components/HireMeSection';
import BackgroundEffect from '@/components/BackgroundEffect';

const HomePage = () => {
  return (
    <>
      <BackgroundEffect />
      <HeroSection />
      <FeaturedProjects />
      <FiverrSection />
      <HireMeSection />
    </>
  );
};

export default HomePage;
