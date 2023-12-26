import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content', 
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  'post': postCollection,
};