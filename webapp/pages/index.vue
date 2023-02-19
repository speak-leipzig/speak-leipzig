<script setup>
const localePath = useLocalePath()
</script>

<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="home">
      <DynamicHead :title="translation.title" :description="translation.seo_description"/>
      <h1 class="mb-10" v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
    <div class="d-flex justify-space-around mt-15">
      <v-btn
        color="purple blob"
        variant="outlined"
        class="mx-5"
        :to="localePath('/offers')"
      >
        {{ $t('offers') }}
      </v-btn>
    </div>
  </NuxtLayout>
</template>