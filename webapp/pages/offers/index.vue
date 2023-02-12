<script setup>
import { useLevel } from '../../composables/states';
const { getItems } = useDirectusItems()
const level = useLevel()

const offers = await getItems({
  collection: 'offers'
});

const facilities = await getItems({
  collection: 'facilities'
});

const locations = await getItems({
  collection: 'locations'
});

function getFacility(offer) {
  if (!offer.location) return null
  const location = locations.find(l => l.id === offer.location)
  return facilities.find(f => f.id === location.facility)
}

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
        v-for="offer in offers"
        :key="offer.id"
      >
        <OfferCard :offer="offer" :facility="getFacility(offer)"/>
      </v-col>
    </v-row>

    <template #left>
      <v-list density="compact">
        <v-list-subheader>{{ $t('level') }}</v-list-subheader>

        <v-list-item
          v-for="(lvl, i) in level"
          :key="i"
          :value="lvl"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-license"></v-icon>
          </template>

          <v-list-item-title v-text="$t(lvl)"></v-list-item-title>
          <template v-if="lvl.count > 0" v-slot:append>
            <v-chip
              color="grey-darken-1 mx-2"
              text-color="white"
              label>{{ lvl.count }}</v-chip>
          </template>
        </v-list-item>
      </v-list>
    </template>

    <template #right v-if="false">
      <v-list density="compact" class="ma-1">
        <v-list-subheader>{{ $t('facilities') }}</v-list-subheader>

        <v-list-item
          v-for="facility in facilities"
          :key="facility.id"
          class="my-2"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-avatar color="grey">
            </v-avatar>
          </template>

          <v-list-item-title>{{ facility.name }}</v-list-item-title>
          <template v-slot:append>
            <v-chip
              v-if="false"
              color="grey-darken-1 mx-2"
              text-color="white"
              label>{{ i }}</v-chip>
          </template>
        </v-list-item>
      </v-list>
    </template>
  </NuxtLayout>
</template>