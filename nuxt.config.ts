// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Ncomshop",
      meta: [
        { name: "description", content: "Your one stop shop" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          type: "image/x-icon",
          href: "https://fonts.googleapis.com/icons?family=Material+Icons",
        },
      ],
      // link: [
      //   {
      //     rel: "icon",
      //     type: "image/x-icon",
      //     href: "/favicon.ico",
      //   },
      // ],
    },

  }
});
