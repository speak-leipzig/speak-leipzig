<script setup>
const items = [
  { text: 'A1', icon: 'mdi-translate', count: 0 },
  { text: 'A2', icon: 'mdi-translate', count: 0 },
  { text: 'B1', icon: 'mdi-translate', count: 0 },
  { text: 'B2', icon: 'mdi-translate', count: 10 },
  { text: 'C1', icon: 'mdi-translate', count: 0 },
  { text: 'C2', icon: 'mdi-translate', count: 0 },
]
</script>

<template>
  <NuxtLayout name="threecols">
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
            <v-icon :icon="item.icon"></v-icon>
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
    <h1>Offer</h1>
    <p>This is the offer page</p>
    <v-row class="my-2" width="100%">
      <v-col cols="12" sm="12" md="6" lg="4"
        v-for="i in 10"
        :key="i"
      >
        <OfferCard :id="i.toString()" />
      </v-col>
    </v-row>
  </NuxtLayout>
</template>