<script setup>
const route = useRoute()
const router = useRouter()
</script>

<template>
  <NuxtLayout name="threecols">
    <h1>Kurs {{ route.params.id }}</h1>
    <p>Dies ist die Angebot Seite</p>
    <br>
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sequi iste delectus libero veniam ut accusamus minima alias. Quam nostrum rem iusto nesciunt libero ab totam, consequuntur quo omnis sunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, quod qui quibusdam veniam ducimus eligendi ratione repellat nam, doloribus perspiciatis maxime rem deleniti cumque assumenda officiis, nesciunt consequuntur eius molestiae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores magnam molestias maxime aspernatur! Minima fuga tenetur, a consequuntur molestias pariatur quae, magnam aspernatur fugit, aliquid quaerat maxime? Minima, deleniti nihil.</p>
    <template #left>
      <v-card elevation="0">
        <v-card-title class="mt-2">
          QuickInfos
        </v-card-title>
        <v-card-text>
          <v-list class="ml-n2">
            <v-list-item>
              <v-list-item-title>
                <span>
                  <v-avatar
                    class="mr-2"
                    image="/img/vitti.png"
                    size="32"
                  ></v-avatar>
                  <v-chip>Vitaliia Sarvirova</v-chip>
                </span>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon class="mr-4">mdi-account-group</v-icon>
                2 Teilnehmer
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon class="mr-4">mdi-calendar</v-icon>
                01.01.2021
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon class="mr-4">mdi-clock</v-icon>
                19:00 - 20:00
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon class="mr-4">mdi-cash-multiple</v-icon>
                2 €
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </template>
    <template #right>
      <v-card elevation="0" rounded="5" @click="router.push()">
        <v-img
            class="bg-white"
            rounded="lg"
            :aspect-ratio="1"
            src="/img/maps_dummy.png"
            cover
          ></v-img>
        <v-card-text>
          <v-icon class="mr-4">mdi-map-marker</v-icon>
          <span>Waldstraße 1</span>
        </v-card-text>
      </v-card>
    </template>
  </NuxtLayout>
</template>