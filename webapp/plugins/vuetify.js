import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    display: {
      mobileBreakpoint: 'sm'
    },
  })

  nuxtApp.vueApp.use(vuetify)
})