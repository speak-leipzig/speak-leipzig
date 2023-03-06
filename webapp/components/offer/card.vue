<script setup>
const router = useRouter()
const { getThumbnail: img } = useDirectusFiles()
const localePath = useLocalePath()
const props = defineProps({
  offer:{
    required: true
  },
  facility:{
    required: false
  }
})
const overflow = (str, limit) => {
  return str.slice(0, limit) + (str.length > limit ? '...' : '')
}
</script>


<template>
  <v-card
    class="card mx-auto py-2"
    outlined
    max-width="400px"
    min-height="300px"
    @click="router.push(localePath(`/offers/${offer.id}`))"
  >
    <WrapperTranslation v-slot="{ translation }" collection="offers" :id="offer.id">
      <v-card-title class="d-flex flex-wrap justify-space-between">
        <span v-html="overflow(translation.title, 35)" class="headline"></span>
        <v-spacer></v-spacer>
        <div v-if="facility" style="margin-left: auto;">
          <v-chip
            color="grey-darken-1 mx-2"
            text-color="white"
            label
          >
              {{ facility.short_name }}
                <v-tooltip 
                  activator="parent"
                  location="bottom"
                >
                {{ facility.name }}
                </v-tooltip>
          </v-chip>
          <v-avatar
            :image="img(facility.logo, 'fit', 32, 32)"
            size="32"
          ></v-avatar>
        </div>
      </v-card-title>
      <v-card-subtitle class="d-flex justify-start">
        <div v-for="lvl in offer.level" :key="lvl">
          <WrapperChip :tooltip="`${$t('level')}: ${$t(lvl)}`">
            {{ $t(lvl) }}
          </WrapperChip>
        </div>

        <WrapperChip v-if="!offer.online" :tooltip="$t('presence')">
          <v-icon>mdi-account-group</v-icon>
        </WrapperChip>
        <WrapperChip v-else :tooltip="$t('online')">
          <v-icon>mdi-web</v-icon>
        </WrapperChip>
        
      </v-card-subtitle>
    <v-card-text v-html="translation.short_description"></v-card-text>
  </WrapperTranslation>
  </v-card>
</template>