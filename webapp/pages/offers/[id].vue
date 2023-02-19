<script setup>
import { useDisplay } from 'vuetify';

const route = useRoute()
const router = useRouter()
const { getThumbnail: img } = useDirectusFiles()
const { getItemById } = useDirectusItems()
const { lgAndUp, mobile } = useDisplay()

const offer = await getItemById({
  collection: 'offers',
  id: route.params.id
})

const getLocation = async () =>{
  if (!offer.location) return null
  return await getItemById({
  collection: 'locations',
  id: offer.location
})}
const location = await getLocation()

const getFacility = async () => {
  if (!location?.facility && !offer.facility) return null
  return await getItemById({
  collection: 'facilities',
  id: offer.online ? offer.facility : location.facility
})}
const facility = await getFacility()

function getGMapsLink() {
  const { street, no, zip, city } = location
  return `https://www.google.com/maps/search/?api=1&query=${street}%20${no},%20${zip}%20${city}`
}
</script>

<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="offers" :id="route.params.id">
      <DynamicHead :title="translation.title" :description="translation.short_description"/>
      <h1 v-html="translation.title"></h1>
      <div class="my-10" v-html="translation.short_description"></div>
      <div class="my-10" v-html="translation.text"></div>
    </WrapperTranslation>
    <template #left v-if="facility || offer.weekday">
      <v-no-ssr>
        <v-card elevation="0">
          <v-card-title class="mt-2">
            QuickInfos
          </v-card-title>
          <v-card-text>
            <v-list class="ml-n2">
              <v-list-item v-if="facility">
                <v-list-item-title>
                  <span>
                    <v-avatar
                      v-if="lgAndUp || mobile"
                      class="mr-2"
                      :image="img(facility.logo, 'fit', 32, 32)"
                      size="32"
                    ></v-avatar>
                    <v-chip @click="router.push(localePath(`/facilities/${facility.id}`))">{{ mobile ? facility.name : facility.short_name }}</v-chip>
                  </span>
                </v-list-item-title>
              </v-list-item>
              <WrapperTranslation v-slot="{ translation }" collection="offers" :id="route.params.id">
                <v-list-item v-if="translation.rhythm" class="mb-n3">
                  <v-list-item-title>
                    <v-icon v-if="lgAndUp || mobile">mdi-calendar-sync</v-icon> 
                    {{ translation.rhythm }}
                  </v-list-item-title>
                </v-list-item>
              </WrapperTranslation>
              <div v-if="offer.weekday">
                <v-list-item class="my-2">
                  <v-list-item-title>
                    <v-icon v-if="lgAndUp || mobile">mdi-calendar</v-icon>
                      {{ $t(offer.weekday) }}
                    <br>
                    <span v-if="offer.time_start">
                      <v-icon v-if="lgAndUp || mobile">mdi-clock</v-icon>
                      {{ offer.time_start?.substring(0,5) }} <span v-if="offer.time_end">- {{ offer.time_end?.substring(0,5) }}</span>
                    </span>
                  </v-list-item-title>
                </v-list-item>
              </div>
              <!--start week 2 and 3 -->
              <div v-if="offer.weekday_2">
                <v-list-item class="my-2">
                  <v-list-item-title>
                    <v-icon v-if="lgAndUp || mobile">mdi-calendar</v-icon>
                      {{ $t(offer.weekday_2) }}
                      <br>
                      <span v-if="offer.time_start_2">
                        <v-icon v-if="lgAndUp || mobile">mdi-clock</v-icon>
                        {{ offer.time_start_2?.substring(0,5) }} <span v-if="offer.time_end_2">- {{ offer.time_end_2?.substring(0,5) }}</span>
                      </span>
                  </v-list-item-title>
                </v-list-item>
              </div>
              <div v-if="offer.weekday_3">
                <v-list-item class="my-2">
                  <v-list-item-title>
                    <v-icon v-if="lgAndUp || mobile">mdi-calendar</v-icon>
                      {{ $t(offer.weekday_3) }}
                      <br>
                      <span v-if="offer.time_start_3">
                        <v-icon v-if="lgAndUp || mobile">mdi-clock</v-icon>
                        {{ offer.time_start_3?.substring(0,5) }} <span v-if="offer.time_end_3">- {{ offer.time_end_3?.substring(0,5) }}</span>
                      </span>
                  </v-list-item-title>
                </v-list-item>
              </div>
              <!--end week 2 and 3 -->
            </v-list>
          </v-card-text>
        </v-card>
      </v-no-ssr>
    </template>
    <template #right v-if="offer.location && !offer.online">
      <v-card elevation="0" rounded="5" :href="getGMapsLink()">
        <v-img
            class="bg-white"
            rounded="lg"
            :aspect-ratio="1"
            src="/img/maps_dummy.png"
            cover
          ></v-img>
        <v-card-text>
          <v-icon class="mr-4">mdi-map-marker</v-icon>
          <span>
            {{ location.street }} {{ location.no }}
          </span>
        </v-card-text>
      </v-card>
    </template>
  </NuxtLayout>
</template>