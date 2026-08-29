import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      {image &&
      <>
          <motion.img
          src={image}
          alt={imageAlt ?? ''}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: 'linear' }}
          loading="eager"
          decoding="async" />
        
          <div className="absolute inset-0 bg-navy/85" aria-hidden="true" />
        </>
      }
      <div className="absolute inset-0 blueprint-grid-dark" aria-hidden="true" />

      <div className="relative mx-auto max-w-shell px-4 py-16 sm:px-6 lg:py-24">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] tech-label text-white/45">
          
          <Link
            to="/"
            className="transition-colors duration-150 ease-smooth hover:text-solar">
            
            Home
          </Link>
          <ChevronRightIcon className="h-3 w-3" aria-hidden="true" />
          <span className="text-solar">{eyebrow}</span>
        </nav>

        <motion.h1
          className="mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
          
          {title}
        </motion.h1>

        {intro &&
        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.08,
            ease: [0.23, 1, 0.32, 1]
          }}>
          
            {intro}
          </motion.p>
        }
      </div>
    </section>);

}