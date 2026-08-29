import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { Reveal } from '../Reveal';
import { SectionHeading } from '../SectionHeading';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data/projects';

export function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Featured projects"
            title="Work executed on site"
            intro="Photographs from live and completed project sites — civil structures, water systems and solar installations." />
          
          <Reveal delay={0.1} className="shrink-0">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 border border-navy px-6 py-3.5 font-display text-sm font-semibold text-navy transition-colors duration-150 ease-smooth hover:bg-navy hover:text-white">
              
              All projects
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                aria-hidden="true" />
              
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) =>
          <Reveal key={project.slug} delay={0.06 * i}>
              <ProjectCard project={project} />
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}