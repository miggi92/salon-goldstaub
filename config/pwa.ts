import type { ModuleOptions } from "@vite-pwa/nuxt";
import {
  appDescription,
  appName,
  appShortName,
  bookingURL,
} from "../constants";

export const pwa: ModuleOptions = {
  registerType: "autoUpdate",
  manifest: {
    categories: ["hair_salon", "beauty_salon", "hairdresser", "hair_salon"],
    shortcuts: [
      {
        name: "Termin buchen",
        url: bookingURL,
        description: "Termin buchen",
        short_name: "Termin buchen",
        icons: [{ src: "/icons/mdi_calendar_clock.png", sizes: "192x192" }],
      },
      {
        name: "Aktuelles",
        url: "/news",
        description: "Aktuelle Neuigkeiten",
        short_name: "Aktuelles",
        icons: [{ src: "/icons/mdi_feed.png", sizes: "192x192" }],
      },
    ],
    name: appName,
    short_name: appShortName,
    description: appDescription,
    theme_color: "#FFBF00",
    lang: "de",
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  workbox: {
    navigateFallback: "/",
    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  },
  client: {
    installPrompt: true,
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallbackAllowlist: [/^\/$/],
    type: "module",
  },
};
