// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/i18n"],
  app: {
    baseURL: "/salon-goldstaub/",
  },
  i18n: {
    lazy: true,
    defaultLocale: "de",
    strategy: "no_prefix",
    langDir: "locales",
    locales: [
      { code: "de", file: "de.json" },
      { code: "en", file: "en.json" },
    ],
    vueI18n: "./i18n.config.ts",
  },
});
