<script setup>
import { useLevel } from '../../composables/states';
const { getItems } = useDirectusItems()
const level = useLevel()

const offers = await getItems({
  collection: 'offers'
});

const selectedLevel = $ref('')
const selectedDistrcit = $ref('')

const filteredOffers = $computed(() => {
  return offers.filter(o => {
    const  lvl = selectedLevel === '' || o.level.includes(selectedLevel)
    const distrcit = selectedDistrcit === '' || locations.filter(l => l.id === o.location).map(l => l.district).includes(selectedDistrcit)
    return lvl && distrcit
  })
})

const facilities = await getItems({
  collection: 'facilities'
});

const locations = await getItems({
  collection: 'locations'
});

const districts = $computed(() => {
  return locations
    .filter(
      l => offers //TODO: FilteredOffers
        .map(o => o.location)
        .includes(l.id)
    )
    .map(l => l.district)
})

function getFacility(offer) {
  if (!offer.location) return null
  const location = locations.find(l => l.id === offer.location)
  const facilityId = offer.online ? offer.facility : location.facility
  return facilities.find(f => f.id === facilityId)
}

const level_count = computed(() => {
  return level.value.reduce((acc, lvl) => {
    acc[lvl] = offers.filter(o => o.level.includes(lvl)).length
    return acc
  }, {})
})

</script>

<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="offers">
      <DynamicHead :title="translation.title" />
      <h1 v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
    <v-row class="my-2" width="100%">
      <v-col cols="12" sm="12" md="6" lg="4"
        v-for="offer in filteredOffers"
        :key="offer.id"
      >
      
        <OfferCard :offer="offer" :facility="getFacility(offer)"/>
      </v-col>
    </v-row>

    <template #left>
      <v-list density="compact">
        <v-list-subheader>{{ $t('level') }}</v-list-subheader>
          <WrapperMinimize>
            <v-list-item
              v-for="(lvl, i) in level"
              :key="i"
              :value="lvl"
              active-color="primary"
              @click="selectedLevel == lvl ? selectedLevel = '' : selectedLevel=lvl"
            >
              <template v-slot:prepend>
                <v-icon icon="mdi-license"></v-icon>
              </template>

              <v-list-item-title v-text="$t(lvl)"></v-list-item-title>
              <template v-if="level_count[lvl] > 0" v-slot:append>
                <v-chip
                  color="grey-darken-1 mx-2"
                  text-color="white"
                  label>
                    {{ level_count[lvl] }}
                  </v-chip>
              </template>
            </v-list-item>
          </WrapperMinimize>
      </v-list>
    </template>

    <template #right>
      <v-list density="compact">
        <v-list-subheader>{{ $t('district') }}</v-list-subheader>
          <WrapperMinimize>
            <v-list-item
              v-for="district in districts"
              :key="district"
              :value="district"
              active-color="primary"
              @click="selectedDistrcit == district ? selectedDistrcit = '' : selectedDistrcit=district"
            >
              <v-list-item-title v-text="district"></v-list-item-title>
              <template v-if="level_count[lvl] > 0" v-slot:append>
                <v-chip
                  color="grey-darken-1 mx-2"
                  text-color="white"
                  label>
                    {{ level_count[lvl] }}
                  </v-chip>
              </template>
            </v-list-item>
          </WrapperMinimize>
      </v-list>
    </template>
  </NuxtLayout>
</template>