import React from 'react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { images } from '../../data/images';

export function CommunityImpact() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure>
              <img
                src={images.community.src}
                alt={images.community.alt}
                className="w-full object-cover"
                loading="lazy"
                decoding="async" />
              
              <figcaption className="mt-3 border-l-2 border-water pl-3 text-xs leading-relaxed text-ink/55">
                {images.community.caption}
              </figcaption>
            </figure>
          </Reveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Community impact"
              title="Infrastructure That Improves Everyday Life"
              intro="Our work is focused on creating practical infrastructure that directly benefits communities — from reliable drinking water and purification systems to solar-powered water supply and public lighting." />
            

            <Reveal delay={0.08}>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                A water point is a short walk instead of a long one. A high-mast
                light turns a dark village square into somewhere people can use
                after sunset. A purification unit changes what comes out of the
                tap. These are ordinary outcomes, and they are the ones we
                design and build for.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.12}>
                <figure className="h-full">
                  <img
                    src={images.jalMinar.src}
                    alt={images.jalMinar.alt}
                    className="h-64 w-full object-cover sm:h-72"
                    loading="lazy"
                    decoding="async" />
                  
                  <figcaption className="mt-3 text-xs leading-relaxed text-ink/55">
                    Household collection at a completed solar water system
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={0.18}>
                <figure className="h-full">
                  <img
                    src={images.siteTeam.src}
                    alt={images.siteTeam.alt}
                    className="h-64 w-full object-cover sm:h-72"
                    loading="lazy"
                    decoding="async" />
                  
                  <figcaption className="mt-3 text-xs leading-relaxed text-ink/55">
                    Joint inspection with residents at handover
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>);

}