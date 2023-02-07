<script setup>
import { arrayExpression } from '@babel/types';

const { getItems } = useDirectusItems();

const level = [
  { key:'a0' ,text: 'A0', count: 0 },
  { key:'a1' ,text: 'A1', count: 0 },
  { key:'a2' ,text: 'A2', count: 0 },
  { key:'b1' ,text: 'B1', count: 0 },
  { key:'b2' ,text: 'B2', count: 10 },
  { key:'c1' ,text: 'C1', count: 0 },
  { key:'c2' ,text: 'C2', count: 0 },
  { key:'all' ,text: 'Alle', count: 0 }
]

const getLevel = (offer) => offer.level.map(lvl => level.find((l) => l.key === lvl).text)

const offers = await getItems({
  collection: 'offers'
});

</script>

<template>
  <NuxtLayout name="threecols">
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="offers">
      <h1 v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
    <v-row class="my-2" width="100%">
      <v-col cols="12" sm="12" md="6" lg="4"
        v-for="offer in offers"
        :key="offer.id"
      >
        <OfferCard :value="offer" />
      </v-col>
    </v-row>

    <template #left>
      <v-list density="compact">
        <v-list-subheader>Level</v-list-subheader>

        <v-list-item
          v-for="(lvl, i) in level"
          :key="i"
          :value="lvl"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-license"></v-icon>
          </template>

          <v-list-item-title v-text="lvl.text"></v-list-item-title>
          <template v-if="lvl.count > 0" v-slot:append>
            <v-chip
              color="grey-darken-1 mx-2"
              text-color="white"
              label>{{ lvl.count }}</v-chip>
          </template>
        </v-list-item>
      </v-list>
    </template>

    <template #right>
      <v-list density="compact" class="ma-1">
        <v-list-subheader>Einrichtungen</v-list-subheader>

        <v-list-item
          v-for="i in 3"
          :key="i"
          class="my-2"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-avatar color="grey">
            </v-avatar>
          </template>

          <v-list-item-title>Einrichtung {{i}}</v-list-item-title>
          <template v-slot:append>
            <v-chip
              color="grey-darken-1 mx-2"
              text-color="white"
              label>{{ i }}</v-chip>
          </template>
        </v-list-item>
      </v-list>
    </template>
  </NuxtLayout>
</template>