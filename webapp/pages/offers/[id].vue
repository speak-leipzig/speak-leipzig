<script setup>
const route = useRoute()
const router = useRouter()
const { getItemById } = useDirectusItems();

const offer = await getItemById({
  collection: 'offers',
  id: route.params.id
})
</script>

<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="offers" :id="route.params.id">
      <DynamicHead :title="translation.title" :description="translation.short_description"/>
      <h1 v-html="translation.title"></h1>
      <div class="my-10" v-html="translation.short_description"></div>
      <div class="my-10" v-html="translation.text"></div>
    </WrapperTranslation>
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
                  <v-chip @click="router.push(localePath('/team'))">Vitaliia Sarvirova</v-chip>
                </span>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <v-icon class="mr-4">mdi-account-group</v-icon>
                max. 8 Teilnehmer
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
                <v-icon class="mr-4">mdi-cash</v-icon>
                8 €
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </template>
    <template #right>
      <v-card elevation="0" rounded="5" @click="router.push(localePath())">
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