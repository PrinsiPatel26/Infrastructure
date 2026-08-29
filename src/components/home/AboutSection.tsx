import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { images } from '../../data/images';

const capabilityHighlights = [
{
  label: 'Field Execution',
  detail:
  'Work is planned, supervised and completed on site, not handed off after drawings.'
},
{
  label: 'Multi-Discipline',
  detail:
  'Civil, water and solar scopes handled by one team through a single project chain.'
},
{
  label: 'Rural Infrastructure',
  detail:
  'Built for village and institutional sites with limited access and utility support.'
},
{
  label: 'Long-Term Operation',
  detail:
  'Systems specified so they keep running with minimal intervention after handover.'
}];


export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-shell items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-2 lg:order-1">
          <div
            className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-2 border-t-2 border-solar lg:block"
            aria-hidden="true" />
          
          <img
            src={images.siteTeam.src}
            alt={images.siteTeam.alt}
            className="relative w-full object-cover"
            loading="lazy"
            decoding="async" />
          
          <p className="mt-3 border-l-2 border-royal pl-3 text-xs text-ink/55">
            {images.siteTeam.caption}
          </p>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About the company"
            title="Engineering Solutions That Create Real Impact"
            intro="We work across civil construction, water infrastructure, drinking water systems, RO plants, solar-powered systems and solar lighting projects — taking each one from site assessment through to commissioning and handover." />
          

          <Reveal delay={0.08}>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              Most of our work sits in places where infrastructure has to be
              practical before it is impressive: rural sites, community
              facilities and institutional locations where the deciding factors
              are ground conditions, water availability, power reliability and
              access. That shapes how we build — durable civil work, equipment
              chosen for the load it will actually see, and installations that
              can be maintained locally.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {capabilityHighlights.map((item, i) =>
            <Reveal as="li" key={item.label} delay={0.06 * i}>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-navy">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {item.detail}
                </p>
              </Reveal>
            )}
          </ul>

          <Reveal delay={0.2}>
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 border-b-2 border-solar pb-1 font-display text-sm font-semibold text-navy transition-colors duration-150 ease-smooth hover:text-royal">
              
              More about our approach
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                aria-hidden="true" />
              
            </Link>
          </Reveal>
        </div>
      </div>
    </section>);

}