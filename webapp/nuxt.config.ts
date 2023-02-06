// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    '@nuxtjs/i18n',
    "nuxt-directus"
  ],
  i18n: {
    locales: ['de', 'en', 'ua', 'ru'],
    strategy: 'prefix_and_default',
    defaultLocale: 'de'
  },
  directus: {
    url: 'https://cms.speak-leipzig.de/',
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
