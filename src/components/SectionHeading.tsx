import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'light';
  id?: string;
  level?: 2 | 3;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'dark',
  id,
  level = 2
}: SectionHeadingProps) {
  const Tag = level === 2 ? 'h2' : 'h3';
  const isLight = tone === 'light';

  return (
    <Reveal
      className={[
      'max-w-3xl',
      align === 'center' ? 'mx-auto text-center' : ''].
      join(' ')}>
      
      {eyebrow &&
      <div
        className={[
        'flex items-center gap-3 text-[11px] font-semibold tech-label',
        align === 'center' ? 'justify-center' : '',
        isLight ? 'text-solar' : 'text-royal'].
        join(' ')}>
        
          <span
          className={[
          'h-px w-8',
          isLight ? 'bg-solar/60' : 'bg-royal/40'].
          join(' ')}
          aria-hidden="true" />
        
          {eyebrow}
        </div>
      }
      <Tag
        id={id}
        className={[
        'mt-4 font-display font-bold tracking-tight',
        level === 2 ?
        'text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]' :
        'text-2xl sm:text-3xl',
        isLight ? 'text-white' : 'text-navy'].
        join(' ')}>
        
        {title}
      </Tag>
      {intro &&
      <p
        className={[
        'mt-5 text-base sm:text-lg leading-relaxed',
        isLight ? 'text-white/70' : 'text-ink/70'].
        join(' ')}>
        
          {intro}
        </p>
      }
    </Reveal>);

}