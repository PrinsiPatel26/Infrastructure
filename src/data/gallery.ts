import { images, SiteImage } from './images';

export const galleryCategories = [
'All',
'Civil Construction',
'Water Supply',
'RO Plant',
'Solar Projects',
'Site Work',
'Community Infrastructure'] as
const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem extends SiteImage {
  tall?: boolean;
}

export const galleryItems: GalleryItem[] = [
{ ...images.bridge },
{ ...images.jalMinar, tall: true },
{ ...images.roPlant },
{ ...images.solarMast, tall: true },
{ ...images.community, tall: true },
{ ...images.siteTeam },
{
  ...images.jalMinar,
  id: 'jalMinar-solar',
  category: 'Solar Projects',
  caption: 'Solar powered drinking water system in daily community use',
  tall: true
},
{
  ...images.roPlant,
  id: 'roPlant-water',
  category: 'Water Supply',
  caption: 'Treated water connected into the community supply line'
},
{
  ...images.siteTeam,
  id: 'siteTeam-community',
  category: 'Community Infrastructure',
  caption: 'Project team and residents at a completed facility'
}];