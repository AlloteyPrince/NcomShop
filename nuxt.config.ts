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
      ],
      link: [
        { rel: "stylesheet",
          href: "https://fonts.googleapis.com/icons?family=Material+Icons",
        }
      ],
      
    },},
    runtimeConfig:{
    currencyKey: process.env.CURRENCY_API_KEY

  }
});
