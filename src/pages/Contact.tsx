import React from 'react';
import { MapPinIcon, MailIcon, PhoneIcon, InfoIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { ContactForm } from '../components/ContactForm';
import { useSeo } from '../hooks/useSeo';
import { offices, site, contactPerson } from '../data/site';
import { images } from '../data/images';

export function Contact() {
  useSeo({
    title: 'Contact',
    description:
    'Contact us about civil construction, water supply, Jal Minar, RO plant and solar infrastructure projects.',
    image: images.community.src
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to our team about your project"
        intro="Share the scope, site conditions and timeline, and we will come back with an approach."
        image={images.community.src}
        imageAlt={images.community.alt} />
      

      <section className="bg-mist py-16 lg:py-24">
        <div className="mx-auto grid max-w-shell gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-2xl font-bold text-navy">
              Project enquiry
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Reveal>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <h2 className="font-display text-2xl font-bold text-navy">
                Offices
              </h2>
              <ul className="mt-7 space-y-px border border-line bg-line">
                {offices.map((office) =>
                <li
                  key={office.label + office.lines.join()}
                  className="bg-white p-6">
                  
                    <p className="text-[10px] tech-label text-royal">
                      {office.label}
                    </p>
                    <p className="mt-3 flex gap-3 text-sm leading-relaxed text-ink/75">
                      <MapPinIcon
                      className="mt-0.5 h-4 w-4 shrink-0 text-solar"
                      aria-hidden="true" />
                    
                      <span>
                        {office.lines.map((line) =>
                      <span key={line} className="block">
                            {line}
                          </span>
                      )}
                      </span>
                    </p>
                    {office.unverified &&
                  <p className="mt-3 flex items-start gap-2 border-t border-line pt-3 text-[11px] leading-relaxed text-ink/45">
                        <InfoIcon
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true" />
                    
                        Address details supplied were incomplete — editable in
                        the site content configuration.
                      </p>
                  }
                  </li>
                )}
              </ul>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-5 border border-line bg-navy p-7">
                <p className="text-[10px] tech-label text-solar">
                  Direct contact
                </p>
                <p className="mt-4 font-display text-lg font-bold text-white">
                  {contactPerson.name}
                </p>
                <p className="text-sm text-white/60">{contactPerson.role}</p>
                <p className="mt-1 text-xs text-white/40">
                  {contactPerson.credentials}
                </p>
                <div className="mt-6 space-y-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-sm text-white/80 transition-colors duration-150 ease-smooth hover:text-solar">
                    
                    <MailIcon
                      className="h-4 w-4 shrink-0 text-solar"
                      aria-hidden="true" />
                    
                    {site.email}
                  </a>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-sm text-white/80 transition-colors duration-150 ease-smooth hover:text-solar">
                    
                    <PhoneIcon
                      className="h-4 w-4 shrink-0 text-solar"
                      aria-hidden="true" />
                    
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-5 border border-line bg-white p-7">
                <p className="text-[10px] tech-label text-royal">
                  Coverage area
                </p>
                <div
                  className="mt-5 blueprint-grid border border-line"
                  aria-hidden="true">
                  
                  <div className="relative h-48">
                    <span className="absolute left-[22%] top-[38%] flex items-center gap-2">
                      <span className="h-2 w-2 bg-royal" />
                      <span className="text-[10px] tech-label text-navy">
                        Kolkata, WB
                      </span>
                    </span>
                    <span className="absolute left-[46%] top-[62%] flex items-center gap-2">
                      <span className="h-2 w-2 bg-solar" />
                      <span className="text-[10px] tech-label text-navy">
                        Jharsuguda, OD
                      </span>
                    </span>
                    <span className="absolute left-[30%] top-[80%] flex items-center gap-2">
                      <span className="h-2 w-2 bg-water" />
                      <span className="text-[10px] tech-label text-navy">
                        Hemgir, Sundargarh
                      </span>
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-ink/55">
                  Schematic reference only — an interactive map can be connected
                  once exact office coordinates are confirmed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>);

}