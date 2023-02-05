// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: ['de', 'en', 'ukr', 'ru'],
    strategy: 'prefix_and_default',
    defaultLocale: 'de'
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  experimental: {
    reactivityTransform: true
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }
})
