// Real, client-supplied project photographs. These are the only photographs used
// across the site — no stock or generated imagery.

export interface SiteImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  orientation: 'landscape' | 'portrait';
}

export const images: Record<string, SiteImage> = {
  bridge: {
    id: 'bridge',
    src: "/image.png",
    alt: 'Engineers and site workers reviewing shuttering and RCC abutment work during bridge construction at a rural site',
    caption: 'RCC abutment and shuttering work in progress — bridge construction site',
    category: 'Civil Construction',
    orientation: 'landscape'
  },
  roPlant: {
    id: 'roPlant',
    src: "/image-1.png",
    alt: 'Technicians commissioning a water purification unit with filtration vessels, valves and a solar panel canopy',
    caption: 'Filtration vessel plumbing and commissioning — RO and water purification unit',
    category: 'RO Plant',
    orientation: 'landscape'
  },
  jalMinar: {
    id: 'jalMinar',
    src: "/image-2.png",
    alt: 'Completed solar powered elevated water storage tank on a steel structure with a child carrying a water pot walking past',
    caption: 'Solar powered elevated storage tank with community draw-off point',
    category: 'Water Supply',
    orientation: 'portrait'
  },
  solarMast: {
    id: 'solarMast',
    src: "/image-3.png",
    alt: 'Technician wiring LED luminaires and control boxes on a galvanised solar high-mast pole with solar panels mounted above',
    caption: 'Luminaire wiring and control box termination — solar high-mast installation',
    category: 'Solar Projects',
    orientation: 'portrait'
  },
  community: {
    id: 'community',
    src: "/image-4.png",
    alt: 'Woman filling a bottle with clean drinking water from a tap at a finished community water point',
    caption: 'Clean drinking water drawn from a completed community water point',
    category: 'Community Infrastructure',
    orientation: 'portrait'
  },
  siteTeam: {
    id: 'siteTeam',
    src: "/image-5.png",
    alt: 'Project team and village residents standing on a newly completed concrete water infrastructure platform',
    caption: 'Handover inspection on a completed water infrastructure platform',
    category: 'Site Work',
    orientation: 'landscape'
  }
};

export const imageList: SiteImage[] = [
images.bridge,
images.jalMinar,
images.roPlant,
images.solarMast,
images.community,
images.siteTeam];