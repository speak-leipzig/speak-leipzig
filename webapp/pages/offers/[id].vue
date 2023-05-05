<script setup>
import { useDisplay } from 'vuetify';
import { getGMapsLink } from '~~/utils/gmaps';

const route = useRoute()
const router = useRouter()

const { locales, locale } = useI18n()

const { getThumbnail: img } = useDirectusFiles()
const { getItems, getItemById } = useDirectusItems()
const { lgAndUp, mobile } = useDisplay()

const offer = await getItemById({
  collection: 'offers',
  id: route.params.id
})

const getEvents = async () => {
  if (!offer.events) return null
  return await getItems({
    collection: 'events',
    params: {
      filter: {
        offer: {
          _in: offer.id
        }
      }
    }
  })
}
const events = await getEvents()

const getLocation = async (id) => {
  if (!offer.location) return null
  return await getItemById({
  collection: 'locations',
  id: id
})}
const location = await getLocation(offer.location)

const getFacility = async () => {
  if (!location?.facility && !offer.facility) return null
  return await getItemById({
  collection: 'facilities',
  id: offer.online ? offer.facility : location.facility
})}
const facility = await getFacility()

function gMapsLink() {
  const { street, no, zip, city } = location
  return getGMapsLink(street, no, zip, city)
}

const iso = computed(() => locales.value.find(loc => loc.code == locale.value).iso)

function dateString(date) {
  return new Date(date).toLocaleDateString(iso, { 
    year: '2-digit', 
    month: '2-digit', 
    day: '2-digit' 
  })
}

function timeString(time) {
  return new Date(new Date().getDate() + ' ' + time).toLocaleTimeString(iso, { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: false
  })
}

</script>

<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="offers" :id="route.params.id">
      <DynamicHead :title="translation.title" :description="translation.short_description"/>
      <h1 v-html="translation.title"></h1>
      <OfferChips class="mt-3" :offer="offer" />
      <div class="my-10" v-html="translation.short_description"></div>
      <div class="my-10" v-html="translation.text"></div>
    </WrapperTranslation>
    <v-no-ssr>
      <DialogRegistration v-if="offer.allow_registrations" :offer="route.params.id" class="my-3"></DialogRegistration>
      <v-expand-transition>
        <WrapperMinimize>
          <div  class="d-flex justify-center my-10">
            <v-table style="max-width: 900px; width: 80%;">
              <thead>
                <tr>
                  <th class="text-center">
                    {{ $t('date') }}
                  </th>
                  <th class="text-center">
                    {{ $t('time') }}
                  </th>
                  <th class="text-center">
                    {{ $t('location') }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="event in events"
                  :key="event.id"
                >
                  <td class="text-center">
                    <v-icon v-if="lgAndUp || mobile">mdi-calendar</v-icon>
                    {{ dateString(event.date) }}
                  </td>
                  <td class="text-center">
                    <v-icon v-if="lgAndUp || mobile">mdi-clock-outline</v-icon>
                    {{ event.start ? timeString(event.start) : '-' }} - {{ event.end ? timeString(event.end) : '' }}
                  </td>
                  <td class="text-center">
                    <v-btn
                      v-if="location"
                      :href="gMapsLink()"
                      target="_blank"
                      class="mx-auto"
                      variant="text"
                      prepend-icon="mdi-map-marker"
                    >
                      {{ location.name }}
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </v-table>
          </div>
        </WrapperMinimize>
      </v-expand-transition>
    </v-no-ssr>
    <!-- QuickInfos -->
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
              <v-list-item class="mb-n3">
                <v-list-item-title>
                  <v-icon v-if="lgAndUp || mobile">mdi-calendar-sync</v-icon> 
                  {{ $t(offer.rhythm) }}
                </v-list-item-title>
              </v-list-item>
              <div v-if="offer.weekday && offer.show_weekday">
                <v-list-item class="my-2">
                  <v-list-item-title>
                    <v-icon v-if="lgAndUp || mobile">mdi-calendar</v-icon>
                      {{ $t(offer.weekday) }}
                    <br>
                    <span v-if="offer.time_start && offer.show_time">
                      <v-icon v-if="lgAndUp || mobile">mdi-clock</v-icon>
                      {{ offer.time_start?.substring(0,5) }} <span v-if="offer.time_end">- {{ offer.time_end?.substring(0,5) }}</span>
                    </span>
                  </v-list-item-title>
                </v-list-item>
              </div>
              <v-list-item v-if="offer.contact_show" class="mt-3">
                <v-list-item-title class="mb-n2">
                  {{ $t('contact') }}
                </v-list-item-title>
                <div v-if="offer.contact_name">
                  <br>
                  <v-icon v-if="lgAndUp || mobile">mdi-account</v-icon>
                  {{ offer.contact_name }}
                </div>
                <div v-if="offer.contact_phone">
                  <br>
                  <v-icon v-if="lgAndUp || mobile">mdi-phone</v-icon>
                  {{ offer.contact_phone }}
                </div>
                <div v-if="offer.contact_mail">
                  <br>
                  <v-icon v-if="lgAndUp || mobile">mdi-email</v-icon>
                  <a :href="`mailto:${offer.contact_mail}`" target="_blank"> {{ offer.contact_mail }}</a>
                </div>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-no-ssr>
    </template>

    <!-- Location -->
    <template #right v-if="offer.location && !offer.online">
      <v-card elevation="0" rounded="5" :href="gMapsLink()">
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