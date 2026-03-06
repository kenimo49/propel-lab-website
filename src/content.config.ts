import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const company = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/company' }),
  schema: z.object({
    title: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    order: z.number().optional(),
  }),
});

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { company, services, faq };
