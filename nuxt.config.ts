import { pwa } from './config/pwa'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: [],

  modules: [
    '@nuxt/content',
    '@nuxt/ui-pro',
    '@nuxt/image',
    '@vite-pwa/nuxt',
  ],

  future: {
    compatibilityVersion: 4,
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
  },
  css: ['~/assets/css/main.css'],
  pwa,
  compatibilityDate: '2025-03-14',
})
