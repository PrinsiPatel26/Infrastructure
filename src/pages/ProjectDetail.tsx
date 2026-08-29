import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  MapPinIcon,
  LayersIcon,
  ArrowRightIcon } from
'lucide-react';
import { Reveal } from '../components/Reveal';
import { Lightbox } from '../components/Lightbox';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../hooks/useSeo';
import { getProject, projects } from '../data/projects';

export function ProjectDetail() {
  const { slug } = useParams<{slug: string;}>();
  const navigate = useNavigate();
  const project = slug ? getProject(slug) : undefined;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useSeo({
    title: project ? `${project.category} — Project` : 'Project',
    description: project?.summary,
    image: project?.image
  });

  if (!project) {
    return (
      <section className="mx-auto flex max-w-shell flex-col items-start gap-6 px-4 py-32 sm:px-6">
        <h1 className="font-display text-3xl font-bold text-navy">
          Project not found
        </h1>
        <p className="text-ink/65">
          This project may have been moved or renamed.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-navy px-6 py-3.5 font-display text-sm font-semibold text-white">
          
          <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          Back to Projects
        </Link>
      </section>);

  }

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy">
        <motion.img
          src={project.image}
          alt={project.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'linear' }}
          loading="eager"
          decoding="async" />
        
        <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />
        <div
          className="absolute inset-0 blueprint-grid-dark"
          aria-hidden="true" />
        

        <div className="relative mx-auto max-w-shell px-4 py-14 sm:px-6 lg:py-20">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group inline-flex items-center gap-2 text-[11px] tech-label text-white/60 transition-colors duration-150 ease-smooth hover:text-solar">
            
            <ArrowLeftIcon
              className="h-3.5 w-3.5 transition-transform duration-200 ease-smooth group-hover:-translate-x-1"
              aria-hidden="true" />
            
            Back to Projects
          </button>

          <p className="mt-8 inline-block border border-solar/50 px-3 py-1.5 text-[10px] tech-label text-solar">
            {project.category}
          </p>
          <motion.h1
            className="mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
            
            {project.title}
          </motion.h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            {project.summary}
          </p>

          <dl className="mt-10 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
            <div className="bg-navy p-5">
              <dt className="text-[10px] tech-label text-white/40">Category</dt>
              <dd className="mt-2 text-sm text-white">{project.category}</dd>
            </div>
            <div className="bg-navy p-5">
              <dt className="text-[10px] tech-label text-white/40">Location</dt>
              <dd className="mt-2 flex items-center gap-2 text-sm text-white">
                <MapPinIcon
                  className="h-3.5 w-3.5 text-solar"
                  aria-hidden="true" />
                
                {project.location ?? 'Not specified'}
              </dd>
            </div>
            <div className="bg-navy p-5">
              <dt className="text-[10px] tech-label text-white/40">Status</dt>
              <dd className="mt-2 text-sm text-white">
                {project.status ?? 'Not specified'}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-navy">
                Project description
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-12 font-display text-2xl font-bold text-navy">
                Scope of work
              </h2>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {project.scope.map((item, i) =>
                <li key={item} className="flex items-center gap-4 py-4">
                    <span className="font-display text-xs font-bold text-royal/50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-ink/75">{item}</span>
                  </li>
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="border border-line bg-mist p-7 lg:p-9">
              <h2 className="flex items-center gap-2 text-[11px] tech-label text-royal">
                <LayersIcon className="h-4 w-4" aria-hidden="true" />
                Key infrastructure components
              </h2>
              <ul className="mt-5 space-y-3">
                {project.keyComponents.map((c) =>
                <li key={c} className="flex items-center gap-3">
                    <span
                    className="h-1.5 w-1.5 shrink-0 bg-solar"
                    aria-hidden="true" />
                  
                    <span className="text-sm text-ink/75">{c}</span>
                  </li>
                )}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16 lg:py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-navy">
            Project gallery
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((item, i) =>
            <Reveal key={item.src + i} delay={0.06 * i}>
                <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group block w-full text-left"
                aria-label={`Open image: ${item.caption}`}>
                
                  <div className="relative aspect-[4/3] overflow-hidden bg-white">
                    <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                    loading="lazy"
                    decoding="async" />
                  
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-ink/55">
                    {item.caption}
                  </p>
                </button>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-shell px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-navy">
              Other projects
            </h2>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-royal">
              
              Back to Projects
              <ArrowRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                aria-hidden="true" />
              
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) =>
            <Link
              key={other.slug}
              to={`/projects/${other.slug}`}
              className="group border border-line transition-colors duration-200 ease-smooth hover:border-royal">
              
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                  src={other.image}
                  alt={other.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                  loading="lazy"
                  decoding="async" />
                
                </div>
                <div className="p-5">
                  <p className="text-[10px] tech-label text-royal">
                    {other.category}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {other.summary}
                  </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>

      <Lightbox
        items={project.gallery.map((g) => ({
          src: g.src,
          alt: g.alt,
          caption: g.caption,
          category: project.category
        }))}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex} />
      

      <CTASection />
    </>);

}