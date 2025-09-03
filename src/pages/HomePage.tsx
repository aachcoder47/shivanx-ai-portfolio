
import React from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ProjectShowcase from '@/components/ProjectShowcase';
import HireMeSection from '@/components/HireMeSection';
import BackgroundEffect from '@/components/BackgroundEffect';
import SchedulePopup from '@/components/SchedulePopup';

const HomePage = () => {
  return (
    <>
      <BackgroundEffect />
      <HeroSection />
      <FeaturedProjects />
      <ProjectShowcase />
      <HireMeSection />
      <SchedulePopup />
    </>
  );
};

export default HomePage;
