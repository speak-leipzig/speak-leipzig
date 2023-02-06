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
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          
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
          <nuxt-link style="text-decoration: none; color: inherit;" :to="switchLocalePath(item.lang)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>