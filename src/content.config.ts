import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    excerpt: z.string().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const horses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/horses' }),
  schema: z.object({
    name: z.string(),
    categories: z.array(z.enum(['broodmares', 'show-horses', 'three-years-old', 'two-years-old', 'weanlings'])).min(1),
    image: z.string(),
    subtitle: z.string().optional(),
    born: z.string().optional(),
    color: z.string().optional(),
    registry: z.string().optional(),
    height: z.string().optional(),
    owner: z.string().optional(),
    breeder: z.string().optional(),
    sire: z.string().optional(),
    dam: z.string().optional(),
    sireSire: z.string().optional(),
    sireDam: z.string().optional(),
    damSire: z.string().optional(),
    damDam: z.string().optional(),
    programs: z.array(z.string()).optional(),
    lte: z.string().optional(),
    highlight: z.string().optional(),
    achievements: z.array(z.string()).optional(),
    pe: z.string().optional(),
    progeny: z.array(z.string()).optional(),
    bredTo: z.array(z.object({
      label: z.string(),
      sire: z.string(),
      due: z.string(),
    })).optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    photo: z.string().optional(),
    order: z.preprocess((v) => (v === '' || v === null ? undefined : v), z.number().optional()),
  }),
});

export const collections = { news, horses, team };
