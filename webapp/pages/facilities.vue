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
    <v-row v-for="facility in facilities" :key="facility.id" class="mt-5">
      <FacilityCard :value="facility"></FacilityCard>
    </v-row>
  </NuxtLayout>
</template>