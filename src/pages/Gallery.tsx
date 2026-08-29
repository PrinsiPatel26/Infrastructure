import React, { useMemo, useState } from 'react';
import { PageHero } from '../components/PageHero';
import { Lightbox } from '../components/Lightbox';
import { Reveal } from '../components/Reveal';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../hooks/useSeo';
import { galleryItems, galleryCategories } from '../data/gallery';
import { images } from '../data/images';

export function GalleryPage() {
  const [filter, setFilter] = useState<string>('All');
  const [index, setIndex] = useState<number | null>(null);

  useSeo({
    title: 'Gallery',
    description:
    'Photographs from civil construction, water supply, RO plant, solar and community infrastructure project sites.',
    image: images.solarMast.src
  });

  const items = useMemo(
    () =>
    filter === 'All' ?
    galleryItems :
    galleryItems.filter((i) => i.category === filter),
    [filter]
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Project photography"
        intro="Site photographs from civil works, water systems, purification units, solar installations and completed community facilities."
        image={images.solarMast.src}
        imageAlt={images.solarMast.alt} />
      

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter gallery by category">
            
            {galleryCategories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setFilter(category);
                    setIndex(null);
                  }}
                  aria-pressed={active}
                  className={[
                  'border px-4 py-2.5 text-xs font-semibold transition-colors duration-150 ease-smooth',
                  active ?
                  'border-navy bg-navy text-white' :
                  'border-line text-ink/65 hover:border-royal hover:text-royal'].
                  join(' ')}>
                  
                  {category}
                </button>);

            })}
          </div>

          {/* Masonry columns keep portrait photographs uncropped */}
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [column-fill:_balance]">
            {items.map((item, i) =>
            <Reveal key={item.id + i} delay={0.04 * i} className="mb-4 break-inside-avoid">
                <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full overflow-hidden border border-line text-left"
                aria-label={`Open image: ${item.caption}`}>
                
                  <div className="relative overflow-hidden bg-mist">
                    <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                    loading="lazy"
                    decoding="async" />
                  
                    <span className="absolute left-0 top-0 bg-navy/90 px-3 py-2 text-[10px] tech-label text-white">
                      {item.category}
                    </span>
                  </div>
                  <p className="p-4 text-xs leading-relaxed text-ink/60">
                    {item.caption}
                  </p>
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <Lightbox
        items={items.map((i) => ({
          src: i.src,
          alt: i.alt,
          caption: i.caption,
          category: i.category
        }))}
        index={index}
        onClose={() => setIndex(null)}
        onChange={setIndex} />
      

      <CTASection />
    </>);

}