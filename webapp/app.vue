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
  background: #ffffff;
  box-shadow:  10px 10px 20px #bfbfbf,
              -10px -10px 20px #ffffff;
}
.card:hover{
  background: #faf9f9;
  box-shadow:  20px 20px 40px #bcbbbb,
             -20px -20px 40px #ffffff;
}
</style>