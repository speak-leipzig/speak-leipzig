<script setup>
const router = useRouter()
const localePath = useLocalePath()
const props = defineProps({
  value:{
    required: true
  }
})
</script>


<template>
  <v-card
    class="mx-auto py-2"
    outlined
    max-width="400px"
    elevation="4"
    @click="router.push(localePath(`/offers/${value.id}`))"
  >
    <WrapperTranslation v-slot="{ translation }" collection="offers" :id="value.id">
      <v-card-title class="d-flex justify-space-between">
        <span v-html="translation.title" class="headline"></span>
        <v-spacer></v-spacer>
        <v-chip
          color="grey-darken-1 mx-2"
          text-color="white"
          label
        >
            Vita
            <v-tooltip 
              activator="parent"
              location="bottom"
            >
              Vitaliia Sarvirova
            </v-tooltip>
        </v-chip>
        <v-avatar
          image="/img/vitti.png"
          size="32"
        ></v-avatar>
      </v-card-title>
      <v-card-subtitle class="d-flex justify-start">
        <div v-for="lvl in value.level" :key="lvl">
          <WrapperChip :tooltip="`Level: ${lvl}`">
            {{ lvl }}
          </WrapperChip>
        </div>

        <WrapperChip v-if="value.online" tooltip="in Präsenz">
          <v-icon>mdi-account-group</v-icon>
        </WrapperChip>
        <WrapperChip v-else tooltip="online">
          <v-icon>mdi-web</v-icon>
        </WrapperChip>
        
      </v-card-subtitle>
    <v-card-text v-html="translation.short_description"></v-card-text>
  </WrapperTranslation>
  </v-card>
</template>