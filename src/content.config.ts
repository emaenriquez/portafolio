import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '*/index.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      /** A short product line shown next to the client name in the index. */
      tagline: z.string().optional(),
      summary: z.string(),
      year: z.number().int(),
      role: z.string(),
      services: z.array(z.string()).default([]),
      /** Paragraphs shown next to the showcase media, under "Cómo funciona". */
      how: z.array(z.string()).default([]),
      /** Short achievements listed in the project index. */
      highlights: z.array(z.string()).default([]),
      duration: z.string().optional(),
      team: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      video: z.string().optional(),
      tint: z
        .string()
        .regex(/^#[0-9a-fA-F]{6}$/)
        .default('#e9e9e3'),
      order: z.number().default(100),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      url: z.url().optional(),
      github: z.url().optional(),
    }),
});

export const collections = { work };
