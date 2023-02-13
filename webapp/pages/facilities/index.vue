<script setup>
const { getItems } = useDirectusItems()

const facilities = await getItems({
  collection: 'facilities'
});

</script>


<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="facilities">
      <DynamicHead :title="translation.title" />
      <h1 v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
    <v-row class="my-2" width="100%">
      <v-col cols="12" sm="12" md="6" lg="4"
        v-for="facility in facilities"
        :key="facility.id"
      >
        <FacilityCard min-height="150px" :facility="facility"></FacilityCard>
      </v-col>
    </v-row>
  </NuxtLayout>
</template>