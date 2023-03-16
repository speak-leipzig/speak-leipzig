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
    '@nuxt/devtools',
    '@nuxtjs/i18n',
    "nuxt-directus"
  ],
  buildModules: [
    '@nuxtjs/pwa',
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
  pwa: {
    manifest: {
      name: 'Speak Leipzig',
      short_name: 'Speak Leipzig',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#ede1fd',
      description: 'Here you can find language courses in Leipzig.',
    },
    icon: {
      source: '/android-chrome-192x192.png',
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  }
})
