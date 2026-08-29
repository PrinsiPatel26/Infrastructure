import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { processSteps } from '../data/services';

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%']
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our work process"
          title="From Planning to Execution"
          intro="A fixed sequence on every project, so nothing depends on assumptions made off site." />
        

        <div ref={ref} className="relative mt-14">
          {/* Progress rail */}
          <div
            className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line lg:left-0 lg:top-[19px] lg:h-px lg:w-full"
            aria-hidden="true">
            
            <motion.span
              className="block h-full w-full origin-top bg-royal lg:origin-left"
              style={{ scaleY: lineScale, scaleX: lineScale }} />
            
          </div>

          <ol className="grid gap-8 lg:grid-cols-6 lg:gap-5">
            {processSteps.map((step, i) =>
            <Reveal as="li" key={step.number} delay={0.06 * i}>
                <div className="relative flex gap-5 lg:block">
                  <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center border border-royal bg-white font-display text-xs font-bold text-royal">
                    {step.number}
                  </span>
                  <div className="lg:mt-6">
                    <h3 className="font-display text-base font-bold leading-snug text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </ol>
        </div>
      </div>
    </section>);

}