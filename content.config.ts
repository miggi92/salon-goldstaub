import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/**',
    }),
    data: defineCollection({
      type: 'data',
      source: 'data/**',
      schema: z.array(z.object({})),
    }),
    
  },
})
