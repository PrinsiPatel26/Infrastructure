import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { services } from '../../data/services';

export function ServicesSection() {
  const [lead, ...rest] = services;

  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <SectionHeading
          eyebrow="Core services"
          title="Five disciplines, one delivery chain"
          intro="Civil structures, water supply, purification, solar pumping and solar lighting — scoped, built and commissioned by the same team." />
        

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {/* Lead service gets the dominant panel */}
          <Reveal className="lg:col-span-3">
            <Link
              to={`/services#${lead.id}`}
              className="group relative block overflow-hidden bg-navy">
              
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 overflow-hidden sm:h-80 lg:h-[420px]">
                  <img
                    src={lead.image}
                    alt={lead.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                    loading="lazy"
                    decoding="async" />
                  
                  <div
                    className="absolute inset-0 bg-navy/25"
                    aria-hidden="true" />
                  
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <span className="font-display text-5xl font-extrabold text-white/15">
                    {lead.number}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                    {lead.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base">
                    {lead.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {lead.capabilities.slice(0, 5).map((c) =>
                    <li
                      key={c}
                      className="border border-white/15 px-3 py-1.5 text-[10px] tech-label text-white/60">
                      
                        {c}
                      </li>
                    )}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-solar">
                    View service
                    <ArrowUpRightIcon
                      className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true" />
                    
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>

          {rest.map((service, i) =>
          <Reveal key={service.id} delay={0.06 * i} className="lg:col-span-1">
              <Link
              to={`/services#${service.id}`}
              className="group flex h-full flex-col border border-line bg-white transition-colors duration-200 ease-smooth hover:border-royal">
              
                <div className="relative h-52 overflow-hidden sm:h-56">
                  <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                  loading="lazy"
                  decoding="async" />
                
                  <span className="absolute left-0 top-0 bg-navy px-3 py-2 font-display text-xs font-bold text-white">
                    {service.number}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">
                    {service.description}
                  </p>
                  <span className="mt-auto flex items-center gap-2 pt-6 font-display text-xs font-semibold tech-label text-royal">
                    View service
                    <ArrowUpRightIcon
                    className="h-3.5 w-3.5 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true" />
                  
                  </span>
                </div>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}