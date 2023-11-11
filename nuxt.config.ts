// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ["@nuxt/content", "@nuxthq/studio", "@nuxt/ui", "@nuxt/image"],
  app: {
    baseURL: "/salon-goldstaub/",
  },
  runtimeConfig: {
    public: {
      studioTokens: "",
    },
  },
  ui: {
    icons: ["simple-icons", "mdi"],
  },
  content: {},
});
