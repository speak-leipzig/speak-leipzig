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
        <v-icon :class="!showLevels ? 'blob' : ''" size="x-large">
          mdi-chevron-{{showLevels ? 'up' : 'down'}}
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style scope>
.blob {
	border-radius: 50%;
	margin: 10px;
	height: 20px;
	width: 20px;

	box-shadow: 0 0 0 0 rgb(245, 245, 245);
	transform: scale(1);
	animation: pulse 2s infinite;
}

@keyframes pulse {
	0% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgb(230, 230, 230);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
</style>