import { getCollection } from 'astro:content';
import { areas } from './areas.js';
import { serviceBySlug } from './services.js';

const areaBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));

// Newest first. Drafts are visible in dev and left out of production builds.
export async function getProjects({ service, city, limit } = {}) {
  const all = await getCollection('projects', (p) => import.meta.env.DEV || !p.data.draft);
  return all
    .filter((p) => !service || p.data.services.includes(service))
    .filter((p) => !city || p.data.city === city)
    .sort((a, b) => b.data.date - a.data.date)
    .slice(0, limit ?? Infinity);
}

export const projectArea = (p) => areaBySlug[p.data.city];
export const projectServices = (p) => p.data.services.map((s) => serviceBySlug[s]).filter(Boolean);
