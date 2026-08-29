import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../hooks/useSeo';
import { projects, projectCategories } from '../data/projects';
import { images } from '../data/images';

export function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All');

  useSeo({
    title: 'Projects',
    description:
    'Project portfolio covering bridge and civil infrastructure, Jal Minar and water supply, RO plants, solar water systems, solar Hi-Mast and community water projects.',
    image: images.jalMinar.src
  });

  const filtered = useMemo(
    () =>
    filter === 'All' ?
    projects :
    projects.filter((p) => p.category === filter),
    [filter]
  );

  const filters = ['All', ...projectCategories];

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Projects executed in the field"
        intro="Each project below is documented with photographs taken on site. Where a location or client detail was not supplied, it is left unstated rather than filled in."
        image={images.jalMinar.src}
        imageAlt={images.jalMinar.alt} />
      

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects by category">
            
            {filters.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
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

          <p className="mt-6 text-xs text-ink/50">
            Showing {filtered.length} of {projects.length} projects
          </p>

          <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) =>
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}>
                
                  <ProjectCard project={project} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>);

}