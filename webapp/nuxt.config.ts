// https://nuxt.com/docs/api/configuration/nuxt-config
import messages from './locales/.merge'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  routeRules: {
    '*/offers': {ssr: false},
    '*/facilities': {ssr: false},
    '*/team': {ssr: false},
  },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/i18n',
    '@vue-macros/nuxt',
    'nuxt-directus',
  ],
  app: {
    head:{
      title: 'Speak Leipzig',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
        { name: 'theme-color', content: '#ffffff' },
      ],
      link: [
        { rel: 'manifest', href: '/app.webmanifest' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icon/apple-touch-icon.png' },
      ],
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
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true
    },
    dirs: ["stores", "types"],
  },
})
