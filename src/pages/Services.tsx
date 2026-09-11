import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { CivilServicesSection } from '../components/CivilServicesSection';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../hooks/useSeo';
import { services } from '../data/services';
import { images } from '../data/images';

export function ServicesPage() {
  const { hash } = useLocation();
  const serviceContactNumber = '9239170206';
  const serviceWhatsAppNumber = `91${serviceContactNumber}`;

  useSeo({
    title: 'Services',
    description:
    'Civil construction, water supply and Jal Minar, RO plant and purification, solar water systems and solar Hi-Mast lighting services.',
    image: images.roPlant.src
  });

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) {
      window.setTimeout(
        () => el.scrollIntoView({ behavior: 'smooth', block: 'start' }),
        120
      );
    }
  }, [hash]);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete project services across civil, water and solar"
        intro="Five service lines, each delivered from site assessment through to commissioning and handover."
        image={images.roPlant.src}
        imageAlt={images.roPlant.alt} />
      

      <nav
        aria-label="Service index"
        className="sticky top-[73px] z-30 border-b border-line bg-white/95 backdrop-blur-md">
        
        <ul className="mx-auto flex max-w-shell gap-1 overflow-x-auto px-4 sm:px-6">
          {services.map((service) =>
          <li key={service.id} className="shrink-0">
              <a
              href={`#${service.id}`}
              className="block whitespace-nowrap px-3 py-4 text-xs font-semibold text-ink/60 transition-colors duration-150 ease-smooth hover:text-royal">
              
                <span className="text-royal/50">{service.number}</span>{' '}
                {service.title}
              </a>
            </li>
          )}
        </ul>
      </nav>

      {services.map((service, index) => {
        const flip = index % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={[
            'scroll-mt-36 py-16 lg:py-24',
            index % 2 === 0 ? 'bg-white' : 'bg-mist'].
            join(' ')}>
            
            <div className="mx-auto grid max-w-shell items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
              <Reveal
                className={[
                'lg:col-span-6',
                flip ? 'lg:order-2' : ''].
                join(' ')}>
                
                <figure>
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="max-h-[560px] w-full object-cover"
                    loading="lazy"
                    decoding="async" />
                  
                </figure>
              </Reveal>

              <div className={['lg:col-span-6', flip ? 'lg:order-1' : ''].join(' ')}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-extrabold text-royal/20">
                      {service.number}
                    </span>
                    <span
                      className="h-px flex-1 bg-line"
                      aria-hidden="true" />
                    
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-navy sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink/70">
                    {service.description}
                  </p>
                </Reveal>

                <ul className="mt-8 grid gap-x-6 sm:grid-cols-2">
                  {service.capabilities.map((c, i) =>
                  <Reveal as="li" key={c} delay={0.04 * i}>
                      <div className="flex items-center gap-3 border-b border-line py-3">
                        <CheckIcon
                        className={[
                        'h-4 w-4 shrink-0',
                        service.accent === 'solar' ?
                        'text-solar' :
                        service.accent === 'water' ?
                        'text-water' :
                        'text-royal'].
                        join(' ')}
                        aria-hidden="true" />
                      
                        <span className="text-sm text-ink/75">{c}</span>
                      </div>
                    </Reveal>
                  )}
                </ul>

                <Reveal delay={0.2}>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 border border-navy px-6 py-3.5 font-display text-sm font-semibold text-navy transition-colors duration-150 ease-smooth hover:bg-navy hover:text-white">
                      Enquire about this service
                      <ArrowRightIcon
                        className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1"
                        aria-hidden="true" />
                    </Link>
                    <a
                      href={`https://wa.me/${serviceWhatsAppNumber}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Message ${serviceContactNumber} on WhatsApp`}
                      className="inline-flex items-center gap-2 border border-[#25D366] px-4 py-3.5 font-display text-sm font-semibold text-[#168f45] transition-colors duration-150 ease-smooth hover:bg-[#25D366] hover:text-white">
                      <MessageCircleIcon className="h-4 w-4" aria-hidden="true" />
                      Message
                    </a>
                    <a
                      href={`tel:+91${serviceContactNumber}`}
                      aria-label={`Call ${serviceContactNumber}`}
                      className="inline-flex items-center gap-2 border border-navy px-4 py-3.5 font-display text-sm font-semibold text-navy transition-colors duration-150 ease-smooth hover:bg-navy hover:text-white">
                      <PhoneIcon className="h-4 w-4" aria-hidden="true" />
                      {serviceContactNumber}
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>);

      })}

      <CivilServicesSection />
      <CTASection />
    </>);

}