// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/content", "@nuxt/ui", "@nuxt/image"],
  app: {
    baseURL: "/salon-goldstaub/",
  },
  ui: {
    icons: ["simple-icons", "mdi"],
  },
  content: {},
});
