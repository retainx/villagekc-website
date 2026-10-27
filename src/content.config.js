import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One folder per project: src/content/projects/<slug>/index.md plus its photos.
const projects = defineCollection({
  loader: glob({ pattern: '*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      city: z.string(),                 // area slug from src/data/areas.js, e.g. "prairie-village-ks"
      services: z.array(z.string()),    // service slugs from src/data/services.js
      summary: z.string(),              // one or two sentences for cards and the meta description
      homeYear: z.number().optional(),  // year the home was built, if known
      cover: image().optional(),
      photos: z
        .array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      draft: z.boolean().default(false), // drafts show in `npm run dev` only
    }),
});

export const collections = { projects };
