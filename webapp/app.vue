<script setup>
import { useMenu } from "./composables/states"
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const menu = useMenu()
const localePath = useLocalePath()
const router = useRouter()
</script>

<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="white"
      :flat="!mobile"
      :style="mobile ? 'bottom: 1px;':''"
      :density="mobile ? 'default':'compact'"
      :location="mobile ? 'bottom' : 'top'"
    >
      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >
        <div v-for="tab in menu" :key="tab.key">
          <v-tab :to="localePath(tab.path)" color="purple">
            {{ $t(tab.key) }}
          </v-tab>
        </div>
      </v-tabs>
      <v-spacer></v-spacer>
      <SetLang />
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <div>
        <NuxtPage />
      </div>
    </v-main>
  </v-app>
</template>


<style>
.sheet-pressed {
  border-radius: 9px;
  background: #ffffff;
  box-shadow: 
    inset 10px 10px 20px #fafafa,
    inset -10px -10px 20px #ffffff;
}

.card {
  cursor: pointer;
  border-radius: 6px;
  background: #faf9f9;
  box-shadow:  10px 10px 20px #d5d4d4,
              -10px -10px 20px #ffffff;
}
.card:hover{
  background: #faf9f9;
  box-shadow:  20px 20px 40px #d5d4d4,
             -20px -20px 40px #ffffff;
}

.blob {
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