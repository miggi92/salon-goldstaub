import type { ModuleOptions } from "@nuxt/content";

export const content: ModuleOptions = {
  api: {
    baseURL: "/api/content",
  },
  highlight: {
    theme: {
      // Default theme (same as single string)
      default: "github-light",
      // Theme used if `html.dark`
      dark: "github-dark",
      // Theme used if `html.sepia`
      sepia: "monokai",
    },
  },
};
