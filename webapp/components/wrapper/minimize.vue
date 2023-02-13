<script setup>
import {useDisplay} from 'vuetify'
const { mobile } = useDisplay()

const showLevels = $ref(false)
</script>

<template>
  <div>
    <v-expand-transition>
      <div v-show="showLevels || !mobile">
        <slot></slot>
      </div>
    </v-expand-transition>
    <div v-if="mobile" class="d-flex justify-space-around">
      <v-btn 
        width="100%" 
        variant="fab" 
        @click="showLevels = !showLevels"
      >
        <v-icon>
          mdi-chevron-{{showLevels ? 'up' : 'down'}}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>