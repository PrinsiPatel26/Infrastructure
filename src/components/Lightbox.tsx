import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  caption: string;
  category?: string;
}

interface LightboxProps {
  items: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const isOpen = index !== null;

  const next = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % items.length);
  }, [index, items.length, onChange]);

  const prev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + items.length) % items.length);
  }, [index, items.length, onChange]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, next, prev, onClose]);

  if (typeof document === 'undefined') return null;

  const item = index !== null ? items[index] : null;

  return createPortal(
    <AnimatePresence>
      {isOpen && item &&
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col bg-navy/95 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        role="dialog"
        aria-modal="true"
        aria-label={item.caption}>
        
          <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <p className="text-[11px] tech-label text-white/60">
              {index + 1} / {items.length}
              {item.category ? ` · ${item.category}` : ''}
            </p>
            <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition-colors duration-150 ease-smooth hover:border-solar hover:text-solar"
            aria-label="Close image viewer">
            
              <XIcon className="h-4 w-4" aria-hidden="true" />
              Close
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 sm:px-16">
            <button
            type="button"
            onClick={prev}
            className="absolute left-1 sm:left-4 z-10 grid h-11 w-11 place-items-center border border-white/20 bg-navy/70 text-white transition-colors duration-150 ease-smooth hover:border-solar hover:text-solar"
            aria-label="Previous image">
            
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.img
            key={item.src + String(index)}
            src={item.src}
            alt={item.alt}
            className="max-h-full max-w-full object-contain"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />
          

            <button
            type="button"
            onClick={next}
            className="absolute right-1 sm:right-4 z-10 grid h-11 w-11 place-items-center border border-white/20 bg-navy/70 text-white transition-colors duration-150 ease-smooth hover:border-solar hover:text-solar"
            aria-label="Next image">
            
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <p className="border-t border-white/10 px-4 py-4 text-center text-sm text-white/75 sm:px-6">
            {item.caption}
          </p>
        </motion.div>
      }
    </AnimatePresence>,
    document.body
  );
}