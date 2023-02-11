// https://nuxt.com/docs/api/configuration/nuxt-config
import messages from './locales/.merge'

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
  app: {
    head:{
      title: 'Speak Leipzig',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
        { hid: 'description', name: 'description', content: 'Speak Leipzig' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' },
      ]
    }
  },
  i18n: {
    baseUrl: 'https://speak-leipzig.de/',
    locales: [
      { code: 'de', iso: 'de-DE', name: 'Deutsch', isCatchallLocale: true },
      { code: 'en', iso: 'en-US', name: 'English' },
      { code: 'ua', iso: 'uk-UA', name: 'Українська'},
      { code: 'ru', iso: 'ru-RU', name: 'Русский'}
    ],
    vueI18n: {
      fallbackLocale: 'de',
      locale: 'de',
      messages: messages
    },
    strategy: 'prefix',
    defaultLocale: 'de',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
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
