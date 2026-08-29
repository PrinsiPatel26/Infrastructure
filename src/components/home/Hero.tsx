import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
import { images } from '../../data/images';

const trustIndicators = [
'Civil Construction',
'Water Infrastructure',
'RO & Purification',
'Solar Solutions'];


export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: 'linear' }}>
        
        <img
          src={images.bridge.src}
          alt={images.bridge.alt}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async" />
        
      </motion.div>

      <div
        className="absolute inset-0 bg-navy/80"
        aria-hidden="true" />
      
      <div
        className="absolute inset-0 blueprint-grid-dark opacity-70"
        aria-hidden="true" />
      

      {/* Subtle technical measurement line */}
      <div
        className="absolute inset-y-0 left-6 hidden w-px bg-white/10 lg:block"
        aria-hidden="true">
        
        <motion.span
          className="absolute left-1/2 h-24 w-px -translate-x-1/2 bg-solar"
          initial={{ top: '-20%' }}
          animate={{ top: '110%' }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: 'linear'
          }} />
        
      </div>

      <div className="relative mx-auto max-w-shell px-4 pb-14 pt-20 sm:px-6 lg:pb-20 lg:pt-32">
        <motion.p
          className="flex items-center gap-3 text-[11px] font-semibold tech-label text-solar"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}>
          
          <span className="h-px w-10 bg-solar/70" aria-hidden="true" />
          Civil • Water • Solar • Project Services
        </motion.p>

        <motion.h1
          className="mt-6 max-w-4xl font-display text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[4rem]"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}>
          
          Building Infrastructure.
          <br />
          Delivering Water.
          <br />
          <span className="text-solar">Powering Communities.</span>
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}>
          
          Integrated civil, water supply and renewable energy solutions designed
          and executed for reliable, sustainable infrastructure.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}>
          
          <Link
            to="/services"
            className="group inline-flex items-center justify-center gap-2 bg-solar px-7 py-4 font-display text-sm font-semibold text-navy transition-colors duration-150 ease-smooth hover:bg-white">
            
            Explore Our Services
            <ArrowRightIcon
              className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
              aria-hidden="true" />
            
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 border border-white/30 px-7 py-4 font-display text-sm font-semibold text-white transition-colors duration-150 ease-smooth hover:border-white hover:bg-white hover:text-navy">
            
            View Our Projects
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="relative border-t border-white/10 bg-navy/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}>
        
        <ul className="mx-auto grid max-w-shell grid-cols-2 divide-white/10 px-4 sm:px-6 lg:grid-cols-4 lg:divide-x">
          {trustIndicators.map((item, i) =>
          <li
            key={item}
            className={[
            'flex items-center gap-3 py-4 lg:px-6',
            i < 2 ? 'border-b border-white/10 lg:border-b-0' : '',
            i === 0 ? 'lg:pl-0' : ''].
            join(' ')}>
            
              <span
              className="h-1.5 w-1.5 shrink-0 bg-solar"
              aria-hidden="true" />
            
              <span className="text-[11px] tech-label text-white/70 sm:text-xs">
                {item}
              </span>
            </li>
          )}
        </ul>
      </motion.div>
    </section>);

}