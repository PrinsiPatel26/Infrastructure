import { images } from './images';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  // Location and status are deliberately null where not supplied by the client.
  location: string | null;
  status: string | null;
  image: string;
  imageAlt: string;
  scope: string[];
  keyComponents: string[];
  gallery: {src: string;alt: string;caption: string;}[];
}

export type ProjectCategory =
'Bridge & Civil Infrastructure' |
'Jal Minar & Water Supply' |
'RO Plant' |
'Solar Water System' |
'Solar Hi-Mast' |
'Community Water Projects';

export const projectCategories: ProjectCategory[] = [
'Bridge & Civil Infrastructure',
'Jal Minar & Water Supply',
'RO Plant',
'Solar Water System',
'Solar Hi-Mast',
'Community Water Projects'];


export const projects: Project[] = [
{
  slug: 'bridge-civil-infrastructure',
  title: 'Infrastructure Project',
  category: 'Bridge & Civil Infrastructure',
  summary:
  'Bridge substructure works including abutments, shuttering and RCC casting at a rural crossing.',
  description:
  'Civil construction of a bridge substructure, covering excavation, foundation preparation, shuttering, reinforcement and RCC casting of the abutments. Work was carried out with site-level supervision to keep alignment, cover and finishing consistent across both faces of the crossing.',
  location: null,
  status: 'Work in progress at the time of photography',
  image: images.bridge.src,
  imageAlt: images.bridge.alt,
  scope: [
  'Excavation and foundation preparation',
  'Shuttering and formwork',
  'Reinforcement placement',
  'RCC abutment casting',
  'Site supervision and quality checks'],

  keyComponents: [
  'RCC abutments',
  'Foundation base',
  'Formwork and props',
  'Reinforcement cage'],

  gallery: [images.bridge, images.siteTeam].map((i) => ({
    src: i.src,
    alt: i.alt,
    caption: i.caption
  }))
},
{
  slug: 'jal-minar-water-supply',
  title: 'Infrastructure Project',
  category: 'Jal Minar & Water Supply',
  summary:
  'Elevated water storage structure with a tiled plinth and community draw-off point.',
  description:
  'Construction and installation of an elevated water storage structure on a fabricated steel frame, complete with a finished civil plinth, delivery plumbing and a community draw-off point at ground level. The structure was set out to keep the tank stable, serviceable and accessible for daily household collection.',
  location: null,
  status: 'Completed and in use',
  image: images.jalMinar.src,
  imageAlt: images.jalMinar.alt,
  scope: [
  'Civil foundation and plinth work',
  'Steel support structure erection',
  'Elevated storage tank installation',
  'Delivery pipework and valves',
  'Community draw-off point'],

  keyComponents: [
  'Elevated storage tank',
  'Galvanised support frame',
  'Tiled civil plinth',
  'Distribution pipework'],

  gallery: [images.jalMinar, images.community, images.siteTeam].map((i) => ({
    src: i.src,
    alt: i.alt,
    caption: i.caption
  }))
},
{
  slug: 'ro-plant-water-purification',
  title: 'Infrastructure Project',
  category: 'RO Plant',
  summary:
  'Water purification unit with filtration vessels, controls and connected storage.',
  description:
  'Installation and commissioning of a water purification unit, including filtration vessels, control unit, interconnecting pipework and connection to the storage tank. Plumbing was routed and tested on site so treated water could be delivered directly to the supply line.',
  location: null,
  status: 'Installation and commissioning',
  image: images.roPlant.src,
  imageAlt: images.roPlant.alt,
  scope: [
  'Equipment placement and mounting',
  'Filtration vessel installation',
  'Pipework and valve assembly',
  'Electrical connection and controls',
  'Testing and commissioning'],

  keyComponents: [
  'Filtration vessels',
  'Control unit',
  'Storage tank connection',
  'Valves and pipework'],

  gallery: [images.roPlant, images.community].map((i) => ({
    src: i.src,
    alt: i.alt,
    caption: i.caption
  }))
},
{
  slug: 'solar-water-system',
  title: 'Infrastructure Project',
  category: 'Solar Water System',
  summary:
  'Solar powered drinking water system supplying an elevated tank without grid power.',
  description:
  'A solar powered drinking water system in which roof-mounted panels drive the pump feeding an elevated storage tank. The arrangement removes dependence on conventional electricity for daily water supply and is designed for long-term, low-intervention operation.',
  location: null,
  status: 'Completed and in use',
  image: images.jalMinar.src,
  imageAlt: images.jalMinar.alt,
  scope: [
  'Solar array mounting',
  'Solar pump installation',
  'Electrical integration and cabling',
  'Tank and pipework connection',
  'Performance testing'],

  keyComponents: [
  'Solar panel array',
  'Solar pumping set',
  'Elevated storage tank',
  'Control and cabling'],

  gallery: [images.jalMinar, images.roPlant, images.community].map((i) => ({
    src: i.src,
    alt: i.alt,
    caption: i.caption
  }))
},
{
  slug: 'solar-hi-mast-lighting',
  title: 'Infrastructure Project',
  category: 'Solar Hi-Mast',
  summary:
  'Solar high-mast lighting installation with multiple LED luminaires on a galvanised pole.',
  description:
  'Erection and commissioning of a solar high-mast lighting unit carrying multiple LED luminaires, with panels, battery boxes and control gear mounted on the pole. Cabling was terminated and tested on site so the unit charges by day and lights the public area through the night.',
  location: null,
  status: 'Installation and commissioning',
  image: images.solarMast.src,
  imageAlt: images.solarMast.alt,
  scope: [
  'Pole foundation and erection',
  'Solar panel mounting',
  'LED luminaire fitting',
  'Battery and control box installation',
  'Cabling, termination and testing'],

  keyComponents: [
  'Galvanised mast',
  'Solar panels',
  'LED luminaires',
  'Battery and control boxes'],

  gallery: [images.solarMast].map((i) => ({
    src: i.src,
    alt: i.alt,
    caption: i.caption
  }))
},
{
  slug: 'community-water-project',
  title: 'Infrastructure Project',
  category: 'Community Water Projects',
  summary:
  'Completed drinking water point and finished platform handed over to the community.',
  description:
  'A finished drinking water facility serving daily household collection, together with the completed civil platform inspected at handover with the project team and residents present. The focus of the work was a durable, easy-to-use facility that keeps the surrounding area clean and drained.',
  location: null,
  status: 'Completed and handed over',
  image: images.community.src,
  imageAlt: images.community.alt,
  scope: [
  'Civil platform and drainage',
  'Tap point and fittings',
  'Finishing works',
  'Joint inspection and handover'],

  keyComponents: [
  'Drinking water tap point',
  'Finished civil platform',
  'Drainage arrangement',
  'Supply pipework'],

  gallery: [images.community, images.siteTeam, images.jalMinar].map((i) => ({
    src: i.src,
    alt: i.alt,
    caption: i.caption
  }))
}];


export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}