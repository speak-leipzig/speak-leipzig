<script setup>
const items = [
  { text: 'A1', icon: 'mdi-translate' },
  { text: 'A2', icon: 'mdi-translate' },
  { text: 'B1', icon: 'mdi-translate' },
  { text: 'B2', icon: 'mdi-translate' },
  { text: 'C1', icon: 'mdi-translate' },
  { text: 'C2', icon: 'mdi-translate' },
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
        <OfferCard  />
      </v-col>
    </v-row>
  </NuxtLayout>
</template>