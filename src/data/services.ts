import { images } from './images';

export interface Service {
  id: string;
  number: string;
  title: string;
  short: string;
  description: string;
  capabilities: string[];
  image: string;
  imageAlt: string;
  accent: 'royal' | 'water' | 'solar';
}

export const services: Service[] = [
{
  id: 'civil-construction',
  number: '01',
  title: 'Civil Construction',
  short: 'Bridges, RCC structures and site development.',
  description:
  'Complete civil construction and infrastructure development services for community, institutional and utility projects.',
  capabilities: [
  'Bridge construction',
  'RCC structures',
  'Foundations',
  'Water infrastructure structures',
  'Civil works',
  'Site development',
  'Structural support works'],

  image: images.bridge.src,
  imageAlt: images.bridge.alt,
  accent: 'royal'
},
{
  id: 'water-supply-jal-minar',
  number: '02',
  title: 'Water Supply & Jal Minar Solutions',
  short: 'Elevated storage and community distribution networks.',
  description:
  'Design, construction and installation of elevated water storage and distribution systems for reliable community water supply.',
  capabilities: [
  'Jal Minar',
  'Elevated water tanks',
  'Water storage systems',
  'Distribution pipelines',
  'Pumping systems',
  'Water supply infrastructure',
  'Civil foundations and structures'],

  image: images.jalMinar.src,
  imageAlt: images.jalMinar.alt,
  accent: 'water'
},
{
  id: 'ro-plant',
  number: '03',
  title: 'RO Plant & Water Purification',
  short: 'Treatment and purification for safe drinking water.',
  description:
  'Water purification systems designed to provide reliable and accessible drinking water for communities and institutions.',
  capabilities: [
  'RO Plant installation',
  'Water purification',
  'Filtration systems',
  'Water treatment equipment',
  'Pipeline connections',
  'Maintenance support'],

  image: images.roPlant.src,
  imageAlt: images.roPlant.alt,
  accent: 'water'
},
{
  id: 'solar-water-systems',
  number: '04',
  title: 'Solar Powered Water Systems',
  short: 'Solar pumping that runs without grid dependence.',
  description:
  'Solar-powered pumping and water supply solutions that reduce dependence on conventional electricity and support sustainable infrastructure.',
  capabilities: [
  'Solar water pumps',
  'Solar pumping systems',
  'Solar-powered drinking water systems',
  'Solar energy integration',
  'Pump installation',
  'Electrical connections'],

  image: images.jalMinar.src,
  imageAlt: images.jalMinar.alt,
  accent: 'solar'
},
{
  id: 'solar-hi-mast',
  number: '05',
  title: 'Solar Hi-Mast Lighting',
  short: 'Public lighting powered entirely by the sun.',
  description:
  'Solar-powered high-mast lighting solutions for public spaces, roads, villages and infrastructure locations.',
  capabilities: [
  'Solar Hi-Mast',
  'Solar street lighting',
  'Public area lighting',
  'Solar LED systems',
  'Pole structures',
  'Installation and commissioning'],

  image: images.solarMast.src,
  imageAlt: images.solarMast.alt,
  accent: 'solar'
}];


export const civilServices = [
'Bridge Construction',
'RCC Construction',
'Foundations',
'Water Tank Structures',
'Jal Minar Civil Works',
'Site Development',
'Pipeline Infrastructure',
'Structural Construction',
'Repair & Maintenance'];


export const solarServices = [
'Solar Water Pumps',
'Solar Drinking Water Systems',
'Solar Hi-Mast',
'Solar Lighting',
'Inverter Systems',
'Battery Charger Systems',
'Solar Installation',
'Electrical Integration',
'Maintenance & Support'];


export const waterChain = [
{
  stage: 'Source',
  detail: 'Borewell and source works with pumping arrangement.'
},
{
  stage: 'Treatment',
  detail: 'RO plant, filtration and water treatment equipment.'
},
{ stage: 'Storage', detail: 'Jal Minar and elevated storage structures.' },
{
  stage: 'Distribution',
  detail: 'Pipeline network, valves and pumping systems.'
},
{
  stage: 'Community',
  detail: 'Drinking water points at village and institution level.'
}];


export const processSteps = [
{
  number: '01',
  title: 'Site Assessment',
  detail:
  'Ground survey of terrain, water source, load and access conditions before anything is designed.'
},
{
  number: '02',
  title: 'Project Planning',
  detail:
  'Scope, structural approach, equipment selection and sequencing agreed with the client.'
},
{
  number: '03',
  title: 'Civil & Infrastructure Work',
  detail:
  'Foundations, RCC structures, platforms and support works executed on site.'
},
{
  number: '04',
  title: 'Equipment Installation',
  detail:
  'Pumps, solar arrays, purification units, poles and pipelines installed and connected.'
},
{
  number: '05',
  title: 'Testing & Commissioning',
  detail:
  'Flow, electrical and structural checks carried out until the system runs as intended.'
},
{
  number: '06',
  title: 'Project Handover',
  detail:
  'System handed over with operating guidance and continued maintenance support.'
}];


export const advantages = [
{
  title: 'Practical Engineering',
  detail: 'Solutions designed around actual site conditions.'
},
{
  title: 'Quality Execution',
  detail: 'Focus on reliable materials and workmanship.'
},
{
  title: 'End-to-End Support',
  detail: 'From civil work to installation and commissioning.'
},
{
  title: 'Sustainable Solutions',
  detail: 'Solar-powered systems designed for long-term operation.'
},
{
  title: 'Community Impact',
  detail:
  'Infrastructure that improves access to water, energy and essential facilities.'
},
{
  title: 'Field Expertise',
  detail: 'Hands-on project execution and site-level coordination.'
}];