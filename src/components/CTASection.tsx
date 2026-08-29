import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, ArrowRightIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { site } from '../data/site';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-royal">
      <div className="absolute inset-0 blueprint-grid-dark" aria-hidden="true" />
      <div className="relative mx-auto max-w-shell px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Have an Infrastructure Project in Mind?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
              Talk to our team about civil construction, water supply, RO plants
              and solar infrastructure solutions.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors duration-150 ease-smooth hover:bg-white hover:text-royal">
                
                <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                Call Us
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors duration-150 ease-smooth hover:bg-white hover:text-royal">
                
                <MailIcon className="h-4 w-4" aria-hidden="true" />
                Email Us
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-solar px-6 py-3.5 font-display text-sm font-semibold text-navy transition-colors duration-150 ease-smooth hover:bg-navy hover:text-white">
                
                Request a Consultation
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                  aria-hidden="true" />
                
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);

}