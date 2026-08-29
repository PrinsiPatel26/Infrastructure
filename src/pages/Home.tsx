import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { WaterSolutions } from '../components/home/WaterSolutions';
import { SolarSection } from '../components/home/SolarSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CommunityImpact } from '../components/home/CommunityImpact';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../hooks/useSeo';
import { images } from '../data/images';

export function Home() {
  useSeo({ image: images.bridge.src });

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <WaterSolutions />
      <SolarSection />
      <WhyChooseUs />
      <CommunityImpact />
      <CTASection />
    </>);

}