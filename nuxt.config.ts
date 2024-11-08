// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["shadcn-nuxt", "@nuxtjs/google-fonts", "@nuxtjs/strapi"],

  googleFonts: {
    useStylesheet: true,
    families: {
      Georama: {
        wght: [100, 300, 400, 500, 600, 700, 800, 900],
        ital: [100, 300, 400, 500, 600, 700, 800, 900],
      },
      Inconsolata: {
        wght: [200, 300, 400, 700, 800, 900],
      },
    },
  },

  strapi: {
    url: process.env.STRAPI_URL || "https://strapi-5-genomics.onrender.com",
  },

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
  },
});
