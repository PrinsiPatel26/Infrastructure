import React from 'react';
import { HardHatIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { civilServices } from '../data/services';
import { images } from '../data/images';

export function CivilServicesSection() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Civil scope"
              title="Civil & Infrastructure Services"
              intro="Structural and site works that carry every other system we install." />
            
            <Reveal delay={0.1}>
              <figure className="mt-9">
                <img
                  src={images.bridge.src}
                  alt={images.bridge.alt}
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async" />
                
                <figcaption className="mt-3 border-l-2 border-royal pl-3 text-xs leading-relaxed text-ink/55">
                  {images.bridge.caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {civilServices.map((item, i) =>
              <Reveal as="li" key={item} delay={0.04 * i}>
                  <div className="flex h-full items-center gap-4 bg-white p-5 sm:p-6">
                    <HardHatIcon
                    className="h-5 w-5 shrink-0 text-royal"
                    aria-hidden="true" />
                  
                    <span className="font-display text-sm font-semibold text-navy">
                      {item}
                    </span>
                  </div>
                </Reveal>
              )}
              <Reveal as="li" delay={0.4}>
                <div className="flex h-full items-center bg-navy p-5 sm:p-6">
                  <p className="text-xs leading-relaxed text-white/70">
                    Civil scope is priced and sequenced alongside the equipment
                    it supports, so foundations, platforms and pipelines are
                    ready when installation starts.
                  </p>
                </div>
              </Reveal>
            </ul>
          </div>
        </div>
      </div>
    </section>);

}