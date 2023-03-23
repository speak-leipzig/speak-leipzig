<script setup>
import { getGMapsLink } from '~~/utils/gmaps';
const route = useRoute()
const { getThumbnail: img } = useDirectusFiles()
const { getItemById, getItems } = useDirectusItems()

const facility = await getItemById({
  collection: 'facilities',
  id: route.params.id
})

const offers = await getItems({
  collection: 'offers',
  params: {
    filter: {
      location: {
        _in: facility.locations
      }
    }
  }
})

const locations = await getItems({
  collection: 'locations',
  params: {
    filter: {
      facility: {
        _in: facility.locations
      }
    }
  }
})

function gMapsLink() {
  const { street, no, zip, city } = location
  return getGMapsLink(street, no, zip, city)
}

const window = ref(0)

</script>


<template>
  <NuxtLayout>
    <div class="text-center">
      <v-avatar 
        size="180"
        :image="img(facility.logo, 'fit', 180, 180)"
      ></v-avatar>
      <h1>{{ facility.name }}</h1>
      <h3>{{ facility.short_name }}</h3>
      <WrapperTranslation v-slot="{ translation }" collection="facilities" :id="route.params.id">
        <DynamicHead :title="facility.name" :description="translation.short_description"/>
        <br>
        <span class="my-3" v-html="translation.short_description"></span>
        <br>
        <span v-html="translation.text"></span>
      </WrapperTranslation>
    </div>

    <v-no-ssr>
      <v-row class="my-10" width="100%">
        <v-col cols="12" sm="12" md="6" lg="6" xl="4"
          v-for="offer in offers"
          :key="offer.id"
        >
          <OfferCard :offer="offer" :facility="facility"/>
        </v-col>
      </v-row>
    </v-no-ssr>

    <template #left v-if="facility.web || false">
      <v-card elevation="0">
        <v-card-title class="mt-2">
          Infos
        </v-card-title>
        <v-card-text>
          <v-icon>mdi-web</v-icon> 
          <a :href="facility.web" target="_blank" rel="noopener noreferrer" style="all: none;">
             Web
          </a>
        </v-card-text>
      </v-card>
    </template>
  </NuxtLayout>
</template>