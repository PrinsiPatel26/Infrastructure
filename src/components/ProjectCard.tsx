import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col border border-line bg-white transition-colors duration-200 ease-smooth hover:border-royal">
      
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
          loading="lazy"
          decoding="async" />
        
        <span className="absolute left-0 top-0 bg-navy/90 px-3 py-2 text-[10px] tech-label text-white">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-navy">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          {project.summary}
        </p>
        <div className="mt-auto space-y-2 pt-6 text-xs text-ink/55">
          <p className="flex items-center gap-2">
            <MapPinIcon className="h-3.5 w-3.5 text-royal" aria-hidden="true" />
            {project.location ?? 'Location not specified'}
          </p>
          {project.status &&
          <p className="flex items-center gap-2">
              <span
              className="h-1.5 w-1.5 bg-solar"
              aria-hidden="true" />
            
              {project.status}
            </p>
          }
        </div>
        <span className="mt-5 flex items-center gap-2 border-t border-line pt-5 font-display text-xs font-semibold tech-label text-royal">
          View project
          <ArrowUpRightIcon
            className="h-3.5 w-3.5 transition-transform duration-200 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true" />
          
        </span>
      </div>
    </Link>);

}