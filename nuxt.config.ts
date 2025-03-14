import { content } from './config/content'
import { pwa } from './config/pwa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [],

  modules: [
    '@nuxt/content',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@nuxthq/studio',
    '@vite-pwa/nuxt',
  ],

  future: {
    compatibilityVersion: 4,
  },

  runtimeConfig: {
    public: {
      studioTokens: '',
    },
  },

  css: ['~/assets/css/main.css'],
  content,
  pwa,
  compatibilityDate: '2025-03-14',
})
