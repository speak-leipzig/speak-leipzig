// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  routeRules: {
    '*/offers': {ssr: false},
    '*/facilities': {ssr: false},
    '*/team': {ssr: false},
  },
  modules: [
    '@nuxtjs/i18n',
    "nuxt-directus"
  ],
  i18n: {
    baseUrl: 'https://speak-leipzig.de/',
    locales: [
      { code: 'de', iso: 'de-DE', name: 'Deutsch', isCatchallLocale: true },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'ua', iso: 'uk-UA', name: 'Українська'},
      { code: 'ru', iso: 'ru-RU', name: 'Русский'}
    ],
    strategy: 'prefix',
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
