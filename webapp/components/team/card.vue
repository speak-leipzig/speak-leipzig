<script setup>
//TODO: more respnsive
//TODO: Telegram link
import { useDisplay } from 'vuetify'

const router = useRouter()
const { locale } = useI18n()
const { getItems } = useDirectusItems()
const { getThumbnail: img } = useDirectusFiles()
const { locales } = useI18n()
const { mobile } = useDisplay()

const props = defineProps({
  value: {
    type: Object,
    required: true
  }
})

const member = computed(() => props.value)

const descriptions = await getItems({
  collection: 'junction_directus_users_translations',
  fields: ['languages_code', 'public_description'],
  filter: {
    directus_users_id: {
      _eq: member.value.id
    }
  }
})

const description = computed(() => descriptions.find((description) => description.languages_code === locale.value).public_description)


</script>

<template>
  <v-card class="card mx-auto" max-width="95%" width="800px" @click="router.push(localePath(`/team/${member.id}`))" >
    <div class="d-flex justify-space-between" >
      <div>
        <v-card-title class="mt-2">
          {{ member.first_name }} {{ member.last_name }}
        </v-card-title>
        <v-card-text>
          {{ description }}
        </v-card-text>
      </div>
      <v-avatar
        class="ma-4"
        :image="img(member.avatar, { width: 128, height: 128, fit: 'cover' })"
        :size="mobile ? 96: 128"
      ></v-avatar>
    </div>
        <v-list style="background: rgba(0,0,0,0)!important;">
          <v-list-item>
              <v-row class="d-flex justify-start ma-1">
                <div>
                  <v-icon class="mr-1 my-2">mdi-translate</v-icon>
                </div>
                <div v-for="lang in member.speaking" :key="lang" class="my-1">
                  <WrapperChip :tooltip="$t(lang)">{{ locales.find((l) => l.code === lang).name }}</WrapperChip>
                </div>
              </v-row>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="d-flex justify-start ma-1">
              <span class="mr-7">
                <v-icon class="mr-4">mdi-email-fast-outline</v-icon>
                <a :href="`mailto:${member.email}`" target="_blank">{{ member.email }}</a>
              </span>
              <span v-if="member.telegram">
                <v-icon class="mr-4">mdi-message-fast-outline</v-icon>
                <a :href="`https://t.me/${member.telegram}`" target="_blank">Telegram</a>
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
  </v-card>
</template>