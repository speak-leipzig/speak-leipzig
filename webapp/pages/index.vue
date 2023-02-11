<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="home">
      <DynamicHead :title="translation.title" :description="translation.seo_description"/>
      <h1 class="mb-10" v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
  </NuxtLayout>
</template>