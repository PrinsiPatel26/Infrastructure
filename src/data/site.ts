// ---------------------------------------------------------------------------
// EDITABLE CONTENT CONFIGURATION
// Everything a site owner may need to correct lives here. Fields marked
// `unverified` came from a partially cropped/incomplete source and should be
// confirmed before publishing. Nothing here is invented — unknown values are
// left as empty strings or explicit placeholders.
// ---------------------------------------------------------------------------

export interface OfficeAddress {
  label: string;
  lines: string[];
  unverified?: boolean;
}

export const site = {
  // Placeholder brand name — no registered company name was supplied.
  brandName: 'Pankaj Raj',
  brandSuffix: 'Infrastructure & Energy',
  brandInitials: 'PR',
  tagline: 'Civil Infrastructure, Water Supply & Renewable Energy Solutions',
  disciplines: [
  'Civil Infrastructure',
  'Water Solutions',
  'Solar Energy',
  'Project Services'],

  email: 'pankaj.raj004@gmail.com',
  phone: '8895381747',
  phoneHref: 'tel:+918895381747',
  copyright: '© 2026. All Rights Reserved.'
};

export const contactPerson = {
  name: 'Mr. Pankaj Raj',
  role: 'Energy Auditor',
  credentials: 'M.B.A., C.U. Power & Energy',
  capabilities: [
  'Solar Pumps',
  'Inverter',
  'Battery Charger',
  'All Installations',
  'Construction Works']

};

export const offices: OfficeAddress[] = [
{
  label: 'Head Office',
  lines: ['Kolkata, West Bengal', 'Sonarpur, Kolkata – 150'],
  // Pincode as supplied appears incomplete — confirm before publishing.
  unverified: true
},
{
  label: 'Branch Office',
  lines: ['Cox Colony, Jharsuguda, Odisha']
},
{
  label: 'Branch Office',
  lines: ['Madhab Complex', 'Near Belpahar Railway Station', '76817'],
  // Taken from the business card; partially cropped in the source.
  unverified: true
},
{
  label: 'Site Office',
  lines: ['Hemgir, Sundargarh, Odisha']
}];


export const navLinks = [
{ label: 'Home', to: '/' },
{ label: 'About', to: '/about' },
{ label: 'Services', to: '/services' },
{ label: 'Projects', to: '/projects' },
{ label: 'Our Work', to: '/our-work' },
{ label: 'Gallery', to: '/gallery' },
{ label: 'Contact', to: '/contact' }];


export const seoDefaults = {
  title:
  'Civil Construction, Water Supply & Solar Infrastructure Solutions',
  description:
  'Professional civil construction, water supply, Jal Minar, RO plant, solar water pumping and solar Hi-Mast infrastructure solutions.'
};