import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { navLinks, site } from '../data/site';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-navy lg:block">
        <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-2 text-xs text-white/65">
          <p className="tech-label text-[10px] text-white/50">
            {site.disciplines.join('  •  ')}
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 transition-colors duration-150 ease-smooth hover:text-solar">
              
              <MailIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 transition-colors duration-150 ease-smooth hover:text-solar">
              
              <PhoneIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={[
        'border-b transition-colors duration-200 ease-smooth',
        scrolled ?
        'border-line bg-white/95 backdrop-blur-md shadow-[0_1px_16px_rgba(11,31,51,0.08)]' :
        'border-transparent bg-white'].
        join(' ')}>
        
        <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="/"
            className="flex items-center py-2"
            aria-label={`${site.brandName} — home`}>
            <img
              src="/TPS_Logo_Final.png"
              alt={site.brandName}
              className="h-14 w-14 object-contain"
              decoding="async" />
          </Link>

          <nav
            className="hidden items-center gap-1 xl:flex"
            aria-label="Primary">
            
            {navLinks.map((link) =>
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
              [
              'relative px-3 py-6 text-sm font-medium transition-colors duration-150 ease-smooth',
              isActive ?
              'text-royal' :
              'text-ink/70 hover:text-navy'].
              join(' ')
              }>
              
                {({ isActive }) =>
              <>
                    {link.label}
                    {isActive &&
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 bottom-4 h-0.5 bg-solar"
                  transition={{
                    duration: 0.25,
                    ease: [0.23, 1, 0.32, 1]
                  }} />

                }
                  </>
              }
              </NavLink>
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden bg-solar px-5 py-3 font-display text-[13px] font-semibold text-navy transition-colors duration-150 ease-smooth hover:bg-navy hover:text-white md:inline-block">
              
              Get a Project Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center border border-line text-navy transition-colors duration-150 ease-smooth hover:border-royal hover:text-royal xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}>
              
              {open ?
              <XIcon className="h-5 w-5" aria-hidden="true" /> :

              <MenuIcon className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open &&
        <motion.div
          id="mobile-nav"
          className="overflow-hidden border-b border-line bg-white xl:hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}>
          
            <nav
            className="mx-auto flex max-w-shell flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile">
            
              {navLinks.map((link) =>
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
              [
              'border-b border-line/70 py-3.5 font-display text-[15px] font-semibold transition-colors duration-150 ease-smooth',
              isActive ? 'text-royal' : 'text-navy'].
              join(' ')
              }>
              
                  {link.label}
                </NavLink>
            )}
              <Link
              to="/contact"
              className="mt-4 bg-solar px-5 py-3.5 text-center font-display text-sm font-semibold text-navy">
              
                Get a Project Consultation
              </Link>
              <div className="mt-4 flex flex-col gap-2 pb-4 text-sm text-ink/70">
                <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2">
                
                  <MailIcon className="h-4 w-4 text-royal" aria-hidden="true" />
                  {site.email}
                </a>
                <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2">
                
                  <PhoneIcon
                  className="h-4 w-4 text-royal"
                  aria-hidden="true" />
                
                  {site.phone}
                </a>
              </div>
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}