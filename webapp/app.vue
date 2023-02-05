<script setup>
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
        <v-tab @click="router.push('/')">
          Start
        </v-tab>
        <v-tab @click="router.push('/offers')">
          Angebot
        </v-tab>
        <v-tab @click="router.push('/facilities')">
          Einrichtungen
        </v-tab>
        <v-tab @click="router.push('/team')">
          Team
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <SetLang />
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <NuxtPage />
    </v-main>
  </v-app>
</template>
