import React from 'react';
import { PageHero } from '../components/PageHero';
import { ProcessSection } from '../components/ProcessSection';
import { CivilServicesSection } from '../components/CivilServicesSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CommunityImpact } from '../components/home/CommunityImpact';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../hooks/useSeo';
import { images } from '../data/images';

export function OurWork() {
  useSeo({
    title: 'Our Work',
    description:
    'How infrastructure projects are executed on site — from assessment and planning through civil work, installation, commissioning and handover.',
    image: images.siteTeam.src
  });

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="How work gets done on site"
        intro="A fixed execution sequence, a defined civil scope, and the reasons projects hold up after handover."
        image={images.siteTeam.src}
        imageAlt={images.siteTeam.alt} />
      
      <ProcessSection />
      <CivilServicesSection />
      <WhyChooseUs />
      <CommunityImpact />
      <CTASection />
    </>);

}