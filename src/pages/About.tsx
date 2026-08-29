import React from 'react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { CommunityImpact } from '../components/home/CommunityImpact';
import { ProcessSection } from '../components/ProcessSection';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../hooks/useSeo';
import { images } from '../data/images';
import { services } from '../data/services';
import { contactPerson } from '../data/site';

const approach = [
{
  title: 'Assess before designing',
  detail:
  'Ground conditions, water source, load and access are checked on site first. The design follows what the site allows, not the other way round.'
},
{
  title: 'Build the civil scope properly',
  detail:
  'Foundations, platforms and structures are the part nobody sees once the equipment is installed — and the part that decides how long it lasts.'
},
{
  title: 'Install and commission ourselves',
  detail:
  'Pumps, panels, purification units, poles and pipelines are installed by the same team that built the civil works, so responsibility stays in one place.'
},
{
  title: 'Stay reachable after handover',
  detail:
  'Systems are specified so they can be serviced locally, with maintenance support available when it is needed.'
}];


export function About() {
  useSeo({
    title: 'About',
    description:
    'Civil construction, water infrastructure and solar energy projects executed end to end, with a focus on rural and community infrastructure.',
    image: images.siteTeam.src
  });

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineering Solutions That Create Real Impact"
        intro="Civil infrastructure, water supply, purification and solar energy — planned, built and commissioned by one team."
        image={images.bridge.src}
        imageAlt={images.bridge.alt} />
      

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-shell gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Company introduction"
              title="Practical engineering for places that need it most" />
            
            <Reveal delay={0.06}>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/70">
                <p>
                  We work across civil construction, water infrastructure,
                  drinking water systems, RO plants, solar-powered systems and
                  solar lighting projects. A single project can run from an
                  excavation and RCC foundation through to a commissioned solar
                  pump and a working tap — and it is treated as one job, not a
                  chain of separate contracts.
                </p>
                <p>
                  Much of the work is in rural and community locations, where
                  grid power is unreliable, access is difficult and maintenance
                  has to be simple. That environment sets the standard: durable
                  materials, straightforward workmanship and equipment matched to
                  the conditions it will actually operate in.
                </p>
                <p>
                  Every project is supervised at site level. Setting out,
                  shuttering, casting, pipework, electrical termination and
                  testing are all checked in person before a system is handed
                  over.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="border border-line bg-mist p-7 lg:p-9">
              <h2 className="text-[11px] tech-label text-royal">
                Capability areas
              </h2>
              <ul className="mt-5 divide-y divide-line">
                {services.map((service) =>
                <li
                  key={service.id}
                  className="flex items-baseline gap-4 py-4">
                  
                    <span className="font-display text-xs font-bold text-royal/50">
                      {service.number}
                    </span>
                    <span>
                      <span className="block font-display text-sm font-bold text-navy">
                        {service.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-ink/60">
                        {service.short}
                      </span>
                    </span>
                  </li>
                )}
              </ul>
            </div>

            <div className="mt-5 border border-line p-7 lg:p-9">
              <h2 className="text-[11px] tech-label text-royal">
                Project contact
              </h2>
              <p className="mt-4 font-display text-lg font-bold text-navy">
                {contactPerson.name}
              </p>
              <p className="text-sm text-ink/65">{contactPerson.role}</p>
              <p className="mt-1 text-xs text-ink/50">
                {contactPerson.credentials}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {contactPerson.capabilities.map((c) =>
                <li
                  key={c}
                  className="border border-line px-2.5 py-1.5 text-[10px] tech-label text-ink/60">
                  
                    {c}
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our approach"
            title="Four commitments on every project" />
          
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
            {approach.map((item, i) =>
            <Reveal key={item.title} delay={0.06 * i}>
                <div className="h-full bg-white p-7 lg:p-9">
                  <span className="font-display text-xs font-bold text-solar">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CommunityImpact />
      <CTASection />
    </>);

}