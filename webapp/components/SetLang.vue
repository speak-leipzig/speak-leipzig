<script setup>
const { locale } = useI18n()
const items = [
  { lang: 'de' ,title: 'deutsch' },
  { lang: 'en' ,title: 'english' },
  { lang: 'ua' ,title: 'українська' },
  { lang: 'ru' ,title: 'русский' },
]
</script>

<template>
  <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          size="small"
        >
          <v-icon>mdi-translate</v-icon>
          {{ locale }}
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title><nuxt-link :to="switchLocalePath(item.lang)">{{ item.title }}</nuxt-link></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>