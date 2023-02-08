<script setup>
import { useDisplay } from 'vuetify'
const {lgAndDown} = useDisplay()
</script>


<template>
  <div :class="lgAndDown? 'pa-2' : 'pa-10'">
    <v-row>
      <v-col
        cols="12"
        sm="2"
      >
      </v-col>

      <v-col
        cols="12"
        sm="8"
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
          class="px-5 py-5 sheet-pressed"
        >
          <slot />
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="2"
      >
      </v-col>
    </v-row>
  </div>
</template>