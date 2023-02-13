<script setup>
const router = useRouter()
const localePath = useLocalePath()
const props = defineProps({
  offer:{
    required: true
  },
  facility:{
    required: false
  }
})
</script>


<template>
  <v-card
    class="card mx-auto py-2"
    outlined
    max-width="400px"
    @click="router.push(localePath(`/offers/${offer.id}`))"
  >
    <WrapperTranslation v-slot="{ translation }" collection="offers" :id="offer.id">
      <v-card-title class="d-flex justify-space-between">
        <span v-html="translation.title" class="headline"></span>
        <v-spacer></v-spacer>
        <div v-if="facility">
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
            color="grey"
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