import { useEffect } from 'react';
import { seoDefaults, site, offices } from '../data/site';

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
}

interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
}

export function useSeo({ title, description, image }: SeoOptions = {}) {
  useEffect(() => {
    const fullTitle = title ?
    `${title} | ${site.brandName} ${site.brandSuffix}` :
    seoDefaults.title;
    const desc = description || seoDefaults.description;

    document.title = fullTitle;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: desc
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: fullTitle
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: desc
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website'
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image'
    });
    if (image) {
      upsertMeta('meta[property="og:image"]', {
        property: 'og:image',
        content: image
      });
    }
  }, [title, description, image]);
}

export function useLocalBusinessSchema() {
  useEffect(() => {
    const id = 'local-business-schema';
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: `${site.brandName} ${site.brandSuffix}`,
      description: seoDefaults.description,
      email: site.email,
      telephone: site.phone,
      address: offices.map((office) => ({
        '@type': 'PostalAddress',
        streetAddress: office.lines.join(', '),
        addressCountry: 'IN'
      }))
    });
  }, []);
}