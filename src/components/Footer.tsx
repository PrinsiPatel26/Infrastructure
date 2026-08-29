import React from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { navLinks, offices, site } from '../data/site';
import { services } from '../data/services';

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="blueprint-grid-dark">
        <div className="mx-auto max-w-shell px-4 py-16 sm:px-6 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center bg-white font-display text-base font-bold text-navy">
                  {site.brandInitials}
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-base font-bold uppercase tracking-wide text-white">
                    {site.brandName}
                  </span>
                  <span className="block text-[10px] tech-label text-solar">
                    {site.brandSuffix}
                  </span>
                </span>
              </div>
              <p className="mt-6 max-w-sm text-sm leading-relaxed">
                {site.tagline}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {site.disciplines.map((d) =>
                <span
                  key={d}
                  className="border border-white/15 px-3 py-1.5 text-[10px] tech-label text-white/60">
                  
                    {d}
                  </span>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="font-display text-xs font-bold tech-label text-white">
                Quick Links
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {navLinks.
                filter((l) => l.label !== 'Our Work').
                map((link) =>
                <li key={link.to}>
                      <Link
                    to={link.to}
                    className="transition-colors duration-150 ease-smooth hover:text-solar">
                    
                        {link.label}
                      </Link>
                    </li>
                )}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-display text-xs font-bold tech-label text-white">
                Services
              </h2>
              <ul className="mt-5 space-y-3 text-sm">
                {services.map((service) =>
                <li key={service.id}>
                    <Link
                    to={`/services#${service.id}`}
                    className="transition-colors duration-150 ease-smooth hover:text-solar">
                    
                      {service.title}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-display text-xs font-bold tech-label text-white">
                Contact
              </h2>
              <ul className="mt-5 space-y-4 text-sm">
                {offices.map((office) =>
                <li
                  key={office.label + office.lines.join()}
                  className="flex gap-3">
                  
                    <MapPinIcon
                    className="mt-0.5 h-4 w-4 shrink-0 text-solar"
                    aria-hidden="true" />
                  
                    <span>
                      <span className="block text-[10px] tech-label text-white/40">
                        {office.label}
                      </span>
                      {office.lines.join(', ')}
                    </span>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-3 transition-colors duration-150 ease-smooth hover:text-solar">
                    
                    <MailIcon
                      className="h-4 w-4 shrink-0 text-solar"
                      aria-hidden="true" />
                    
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.phoneHref}
                    className="inline-flex items-center gap-3 transition-colors duration-150 ease-smooth hover:text-solar">
                    
                    <PhoneIcon
                      className="h-4 w-4 shrink-0 text-solar"
                      aria-hidden="true" />
                    
                    {site.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-shell flex-col gap-2 px-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>{site.copyright}</p>
          <p>Civil Construction • Water Supply • RO Plants • Solar Energy</p>
        </div>
      </div>
    </footer>);

}