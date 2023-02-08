<script setup>
const localePath = useLocalePath()
const router = useRouter()
</script>

<template>
    <v-app id="inspire">
    <v-app-bar
      class="px-3"
      color="white"
      flat
      density="compact"
    >
      <v-spacer></v-spacer>

      <v-tabs
        centered
        color="grey-darken-2"
      >
        <v-tab @click="router.push(localePath('/'))">
          Start
        </v-tab>
        <v-tab @click="router.push(localePath('/offers'))">
          Angebot
        </v-tab>
        <v-tab @click="router.push(localePath('/facilities'))">
          Einrichtungen
        </v-tab>
        <v-tab @click="router.push(localePath('/team'))">
          Team
        </v-tab>
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