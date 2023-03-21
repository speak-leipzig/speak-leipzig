<script setup>
import { useLevel } from '../../composables/states';
const { getItems } = useDirectusItems()
const level = useLevel()

const kinds = useKindsOfOffer()
const selectedKind = $ref('')

const offers = await getItems({
  collection: 'offers'
});

const selectedLevel = $ref('')
const selectedDistrcit = $ref('')

const filteredOffers = $computed(() => {
  return offers.filter(o => {
    const kind = selectedKind === '' || o.kind === selectedKind
    const  lvl = selectedLevel === '' || o.level.includes(selectedLevel)
    const distrcit = selectedDistrcit === '' || locations.filter(l => l.id === o.location).map(l => l.district).includes(selectedDistrcit)
    return kind && lvl && distrcit
  })
})

const facilities = await getItems({
  collection: 'facilities'
});

const locations = await getItems({
  collection: 'locations'
});

const categories = await getItems({
  collection: 'categories'
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

const level_count = $computed(() => {
  return level.value.reduce((acc, lvl) => {
    acc[lvl] = offers.filter(o => o.level.includes(lvl)).length
    return acc
  }, {})
})

const district_count = $computed(() => {
  return districts.reduce((acc, dist) => {
    acc[dist] = offers.filter(o => locations.filter(l => l.district === dist).map(l => l.id).includes(o.location)).length
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
        <v-list-subheader>Art des Angebots</v-list-subheader>
        <v-list-item
          v-for="(kind, i) in kinds"
          :key="i"
          :value="kind.key"
          active-color="primary"
          @click="selectedKind == kind.key ? selectedKind = '' : selectedKind=kind.key"
        >
          <template v-slot:prepend>
            <v-icon :icon="kind.icon"></v-icon>
          </template>
          <v-list-item-title v-text="$t(kind.key)"></v-list-item-title>
        </v-list-item>
      </v-list>
      <v-expand-transition>
        <v-list v-if="selectedKind === 'lang'" density="compact">
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
                    label
                  >{{ level_count[lvl] }}
                  </v-chip>
                </template>
              </v-list-item>
            </WrapperMinimize>
        </v-list>
      </v-expand-transition>
      <v-expand-transition>
        <v-list v-if="selectedKind === 'culture'" density="compact">
          <v-list-subheader>Kategorien</v-list-subheader>
          <WrapperMinimize>
            <v-list-item 
              v-for="category in categories"
              :key="category.id"
              active-color="primary"
              @click="console.log('click')"
            >
              <WrapperTranslation v-slot="{ translation }" collection="categories" :id="category.id">
                <v-list-item-title v-text="translation.title"></v-list-item-title>
              </WrapperTranslation>
              <template v-slot:append>
                <v-chip
                    color="grey-darken-1 mx-2"
                    text-color="white"
                    label
                  >1
                </v-chip>
              </template>
            </v-list-item>
          </WrapperMinimize>
        </v-list>
      </v-expand-transition>
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
              <template v-if="district_count[district] > 0" v-slot:append>
                <v-chip
                  color="grey-darken-1 mx-2"
                  text-color="white"
                  label>
                    {{ district_count[district] }}
                  </v-chip>
              </template>
            </v-list-item>
          </WrapperMinimize>
      </v-list>
    </template>
  </NuxtLayout>
</template>