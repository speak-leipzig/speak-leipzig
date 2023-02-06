<script setup>
const items = [
  { text: 'A1', count: 0 },
  { text: 'A2', count: 0 },
  { text: 'B1', count: 0 },
  { text: 'B2', count: 10 },
  { text: 'C1', count: 0 },
  { text: 'C2', count: 0 },
]
</script>

<template>
  <NuxtLayout name="threecols">
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="offers">
      <h1 v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
    <v-row class="my-2" width="100%">
      <v-col cols="12" sm="12" md="6" lg="4"
        v-for="i in 10"
        :key="i"
      >
        <OfferCard :id="i.toString()" />
      </v-col>
    </v-row>

    <template #left>
      <v-list density="compact">
        <v-list-subheader>Level</v-list-subheader>

        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon icon="mdi-license"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
          <template v-if="item.count > 0" v-slot:append>
            <v-chip
              color="grey-darken-1 mx-2"
              text-color="white"
              label>{{ item.count }}</v-chip>
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
          @click=""
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