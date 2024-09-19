import { content } from './config/content'
import { pwa } from './config/pwa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxthq/studio',
    '@vite-pwa/nuxt',
  ],
  runtimeConfig: {
    public: {
      studioTokens: '',
    },
  },
  ui: {
    icons: ['simple-icons', 'mdi', 'streamline', 'game-icons'],
  },
  content,
  pwa,
})
