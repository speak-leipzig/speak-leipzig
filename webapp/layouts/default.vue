<script setup>
import { useDisplay } from 'vuetify'
const {lgAndDown} = useDisplay()
</script>


<template>
  <div :class="lgAndDown? 'pa-2' : 'pa-10'">
    <v-row>
      <v-col
        cols="12"
        sm="3"
        md="3"
        lg="2"
        xl="2"
      >
        <v-sheet
          rounded="lg"
          class="px-2"
        >
          <div>
            <slot name="left"></slot>
          </div>
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="8"
        xl="8"
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
          class="px-5 py-5 sheet-pressed"
        >
          <div>
            <slot></slot>
          </div>
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="3"
        md="3"
        lg="2"
        xl="2"
      >
        <v-sheet
          rounded="lg"
        >
        <div>
          <slot name="right"></slot>
        </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>