<script setup>
const route = useRoute()
const { getThumbnail: img } = useDirectusFiles()
const { getItemById } = useDirectusItems()

const facility = await getItemById({
  collection: 'facilities',
  id: route.params.id
})

</script>


<template>
  <NuxtLayout>
    <div class="text-center">
      <v-avatar 
        size="180"
        :image="img(facility.logo, 'fit', 180, 180)"
      ></v-avatar>
      <h1>{{ facility.name }}</h1>
      <h3>{{ facility.short_name }}</h3>
    <WrapperTranslation v-slot="{ translation }" collection="facilities" :id="route.params.id">
      <DynamicHead :title="facility.name" :description="translation.short_description"/>
      <br>
      <span class="my-3" v-html="translation.short_description"></span>
      <br>
      <span v-html="translation.text"></span>
    </WrapperTranslation>
    <v-row v-for="facility in facilities" :key="facility.id" class="mt-5">
      <FacilityCard class="mx-auto" :facility="facility"></FacilityCard>
    </v-row>
  </div>
  </NuxtLayout>
</template>