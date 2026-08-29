import React from 'react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { advantages } from '../../data/services';

export function WhyChooseUs() {
  return (
    <section className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why choose us"
          title="Built for Real-World Infrastructure"
          intro="Six things that decide whether an infrastructure project actually works after the team leaves site." />
        

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, i) =>
          <Reveal key={advantage.title} delay={0.05 * i}>
              <div className="group h-full bg-white p-7 transition-colors duration-200 ease-smooth lg:p-9">
                <span className="font-display text-xs font-bold text-royal/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {advantage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {advantage.detail}
                </p>
                <span
                className="mt-6 block h-0.5 w-10 bg-solar transition-all duration-200 ease-smooth group-hover:w-20"
                aria-hidden="true" />
              
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}