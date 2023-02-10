<script setup>
//TODO: more respnsive
//TODO: Telegram link
const router = useRouter()
const { locale } = useI18n()
const { getItems } = useDirectusItems()
const { getThumbnail: img } = useDirectusFiles()

const props = defineProps({
  value: {
    type: Object,
    required: true
  }
})

const member = $computed(() => props.value)

const descriptions = await getItems({
  collection: 'junction_directus_users_translations',
  fields: ['languages_code', 'public_description'],
  filter: {
    directus_users_id: {
      _eq: member.id
    }
  }
})

const description = $computed(() => descriptions.find((description) => description.languages_code === locale.value).public_description)
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
        <v-list style="background: rgba(0,0,0,0)!important;">
          <v-list-item>
            <v-list-item-title>
              <v-icon class="mr-4">mdi-translate</v-icon>
              <WrapperChip :tooltip="$t('de')">Deutsch</WrapperChip>
              <WrapperChip :tooltip="$t('en')">Englisch</WrapperChip>
              <WrapperChip :tooltip="$t('ua')">українська</WrapperChip>
              <WrapperChip :tooltip="$t('ru')">русский</WrapperChip>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <span class="mr-7">
                <v-icon class="mr-4">mdi-email-fast-outline</v-icon>
                <a :href="`mailto:${member.email}`">{{ member.email }}</a>
              </span>
              <span>
                <v-icon class="mr-4">mdi-message-fast-outline</v-icon>
                <a :href="``">Telegram</a>
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
      <v-avatar
        class="ma-4"
        :image="img(member.avatar, { width: 128, height: 128, fit: 'cover' })"
        size="128"
      ></v-avatar>
    </div>
  </v-card>
</template>