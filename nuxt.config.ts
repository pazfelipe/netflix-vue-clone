// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "vue3-carousel-nuxt"
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
})