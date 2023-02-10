<script setup>
import { useDisplay } from 'vuetify'

const { md } = useDisplay()
const router = useRouter()
const localePath = useLocalePath()
const props = defineProps({
  value:{
    required: true
  }
})
</script>


<template>
  <v-card class="card ma-3" width="900px" max-width="95%">
    <v-row>
      <v-col cols="2" lg="1" md="1">
      <v-avatar
          color="grey"
          size="54"
          class="my-3 mx-4"
        ></v-avatar>
      </v-col>
      <v-col cols="10">
        <div :class="md?'pl-2':''">
          <v-card-title>
            <span class="headline">{{ value.name }}</span>
          </v-card-title>
          <v-card-subtitle>
            <span>{{ value.short_name }}</span>
          </v-card-subtitle>
        </div>
      </v-col>
    </v-row>
    <v-card-text>
      <span>{{ value.description }}</span>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        text
        @click="router.push(localePath(`/facilities/${value.id}`))"
      >
        {{ $t('more') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>