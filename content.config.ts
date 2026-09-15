import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export const collections = {
  docs_zh: defineCollection({
    type: 'page',
    source: 'zh/docs/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      order: z.number().optional(),
      category: z.string().optional(),
      icon: z.string().optional(),
    }),
  }),
  docs_en: defineCollection({
    type: 'page',
    source: 'en/docs/*.md',
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      order: z.number().optional(),
      category: z.string().optional(),
      icon: z.string().optional(),
    }),
  }),
}
