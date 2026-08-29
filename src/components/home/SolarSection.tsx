import React from 'react';
import { motion } from 'framer-motion';
import { SunIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { solarServices } from '../../data/services';
import { images } from '../../data/images';

export function SolarSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        className="absolute inset-0 blueprint-grid-dark"
        aria-hidden="true" />
      

      {/* Subtle solar energy visual: slow concentric pulse behind the sun mark */}
      <div
        className="pointer-events-none absolute -right-24 top-16 hidden h-72 w-72 lg:block"
        aria-hidden="true">
        
        {[0, 1, 2].map((ring) =>
        <motion.span
          key={ring}
          className="absolute inset-0 rounded-full border border-solar/20"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1.15, opacity: [0, 0.7, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: ring * 2,
            ease: 'linear'
          }} />

        )}
      </div>

      <div className="relative mx-auto max-w-shell px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Solar energy & infrastructure"
              title="Power that keeps running when the grid does not"
              intro="Solar pumping, drinking water systems, high-mast and street lighting, inverter and battery systems — installed, integrated and maintained."
              tone="light" />
            

            <Reveal delay={0.1}>
              <div className="mt-9 flex items-center gap-3 text-solar">
                <SunIcon className="h-5 w-5" aria-hidden="true" />
                <span className="text-[11px] tech-label">
                  Nine solar & electrical capabilities
                </span>
              </div>
            </Reveal>

            <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
              {solarServices.map((item, i) =>
              <Reveal as="li" key={item} delay={0.04 * i}>
                  <div className="flex items-center gap-3 border-b border-white/10 py-3.5">
                    <span
                    className="h-1.5 w-1.5 shrink-0 bg-solar"
                    aria-hidden="true" />
                  
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                </Reveal>
              )}
            </ul>
          </div>

          <Reveal delay={0.14} className="lg:col-span-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="relative">
                <img
                  src={images.solarMast.src}
                  alt={images.solarMast.alt}
                  className="h-full max-h-[520px] w-full object-cover"
                  loading="lazy"
                  decoding="async" />
                
                <figcaption className="mt-3 text-xs leading-relaxed text-white/50">
                  {images.solarMast.caption}
                </figcaption>
              </figure>
              <figure className="relative sm:mt-12">
                <img
                  src={images.jalMinar.src}
                  alt={images.jalMinar.alt}
                  className="h-full max-h-[520px] w-full object-cover"
                  loading="lazy"
                  decoding="async" />
                
                <figcaption className="mt-3 text-xs leading-relaxed text-white/50">
                  Solar powered drinking water system in daily use
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}