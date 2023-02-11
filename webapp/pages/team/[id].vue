<script setup>
//TODO: Telegram link
import {useCmsUrl} from '../../composables/states';
const { getThumbnail: img } = useDirectusFiles()
const { getItems } = useDirectusItems()

const cmsUrl = useCmsUrl()
const { locale } = useI18n()
const route = useRoute()

const user = await fetch(`${cmsUrl.value}/users/${route.params.id}`)
  .then((res) => res.json())
  .then((res) => res.data)
  .catch((err) => console.error(err))

const translations = await getItems({
  collection: 'junction_directus_users_translations',
  filter: {
    directus_users_id: {
      _eq: user.id
    }
  }
})

const translation = $computed(() => translations.find((translation) => translation.languages_code === locale.value))

</script>

<template>
  <NuxtLayout name="threecols">
    <DynamicHead :title="`${user.first_name} ${user.last_name}`"/>
    <div class="pa-5">
      <div class="text-center">
        <v-avatar 
          size="180"
          :image="img(user.avatar, 'fit', 180, 180)"
        ></v-avatar>
        <h1>{{ user.first_name }} {{ user.last_name }}</h1>
        <h3>{{ translation.public_title }}</h3>
      </div>
      <br>
      <p v-html="translation.public_description"></p>
      <br>
      <span v-html="translation.about"></span>
    </div>
    <template #left>
      <v-list density="compact">
          <v-list-subheader>Kontakt</v-list-subheader>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-email-fast-outline"></v-icon>
            </template>
            <v-list-item-title>
              <a :href="`mailto:${user.email}`">{{ user.email }}</a>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-message-fast-outline"></v-icon>
            </template>
            <v-list-item-title>
              <a :href="``">Telegram</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
    </template>


    <template #right>
      <v-list density="compact">
          <v-list-subheader>{{ $t('langs') }}</v-list-subheader>
          <v-list-item v-for="lang in user.speaking" :key="lang">
            <v-list-item-title>
              {{ $t(lang) }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
    </template>

  </NuxtLayout>
</template>