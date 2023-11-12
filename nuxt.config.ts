import { pwa } from "./config/pwa";
import { content } from "./config/content";
import { bookingURL } from "./constants";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxthq/studio",
    "@vite-pwa/nuxt",
  ],
  runtimeConfig: {
    public: {
      studioTokens: "",
    },
  },
  routeRules: {
    "/booking": { redirect: "https://www.studiobookr.com/salon-goldstaub-64474" },
  },
  ui: {
    icons: ["simple-icons", "mdi"],
  },
  content,
  pwa,
});
