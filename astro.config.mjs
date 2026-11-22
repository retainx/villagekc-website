import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// /projects redirects home while every project is a draft, so keep it out of the sitemap until one is published.
const projectsDir = new URL('./src/content/projects/', import.meta.url);
const hasPublishedProjects = readdirSync(projectsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .some((d) => !/^draft:\s*true\s*$/m.test(readFileSync(new URL(`${d.name}/index.md`, projectsDir), 'utf8')));

export default defineConfig({
  site: 'https://villagekc.com',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => hasPublishedProjects || !/\/projects$/.test(page) })],
});
