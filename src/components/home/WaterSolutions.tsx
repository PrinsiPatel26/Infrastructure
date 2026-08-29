import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { waterChain } from '../../data/services';
import { images } from '../../data/images';

const waterCapabilities = [
'RO Plant',
'Water Treatment',
'Jal Minar',
'Elevated Storage',
'Pumping',
'Pipeline Network',
'Drinking Water Points'];


export function WaterSolutions() {
  return (
    <section className="relative overflow-hidden bg-mist py-20 lg:py-28">
      {/* Water-flow motion: slow horizontal drift, kept faint */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-water/40"
        initial={{ scaleX: 0, transformOrigin: 'left' }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
        aria-hidden="true" />
      

      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <SectionHeading
          eyebrow="Water solutions"
          title="Reliable Water. Sustainable Infrastructure."
          intro="Every water project runs through the same chain — from the source, through treatment and storage, to the tap a household actually uses." />
        

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <ol className="relative space-y-0">
              {waterChain.map((stage, i) =>
              <Reveal as="li" key={stage.stage} delay={0.06 * i}>
                  <div className="flex gap-5 border-b border-line py-5 last:border-b-0">
                    <div className="flex flex-col items-center">
                      <span className="grid h-9 w-9 shrink-0 place-items-center border border-water/40 bg-white text-[11px] font-bold text-water">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {i < waterChain.length - 1 &&
                    <span
                      className="mt-1 w-px flex-1 bg-water/25"
                      aria-hidden="true" />

                    }
                    </div>
                    <div className="pt-1">
                      <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                        {stage.stage}
                        {i < waterChain.length - 1 &&
                      <ChevronRightIcon
                        className="h-4 w-4 text-water/60"
                        aria-hidden="true" />

                      }
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                        {stage.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )}
            </ol>

            <Reveal delay={0.2}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {waterCapabilities.map((c) =>
                <li
                  key={c}
                  className="border border-water/30 bg-white px-3 py-2 text-[10px] tech-label text-royal">
                  
                    {c}
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="relative">
              <img
                src={images.roPlant.src}
                alt={images.roPlant.alt}
                className="w-full object-cover"
                loading="lazy"
                decoding="async" />
              
              <div className="border border-t-0 border-line bg-white p-5">
                <p className="text-[10px] tech-label text-water">
                  Treatment stage
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {images.roPlant.caption}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}