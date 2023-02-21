<script setup>
import { useDisplay } from 'vuetify'

const { md } = useDisplay()
const { getThumbnail: img } = useDirectusFiles()
const router = useRouter()
const localePath = useLocalePath()
const props = defineProps({
  facility:{
    required: true
  }
})
</script>


<template>
  <v-card class="card ma-3" width="900px" max-width="95%" min-height="180px" @click="router.push(localePath(`/facilities/${facility.id}`))">
    <v-row>
      <v-col cols="2">
      <v-avatar
          :image="img(facility.logo, 'fit', 56, 56)"
          size="46"
          class="my-3 mx-4"
        ></v-avatar>
      </v-col>
      <v-col cols="10">
        <div :class="md?'pl-2':''">
          <v-card-title>
            <span class="headline">{{ facility.name }}</span>
          </v-card-title>
          <v-card-subtitle class="mt-n2">
            <span>{{ facility.short_name }}</span>
          </v-card-subtitle>
        </div>
      </v-col>
    </v-row>
    <v-card-text>
      <WrapperTranslation v-slot="{ translation }" collection="facilities" :id="facility.id">
        <span>{{ translation.short_description }}</span>
      </WrapperTranslation>
    </v-card-text>
  </v-card>
</template>