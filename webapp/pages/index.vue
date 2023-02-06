<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="home">
      <h1 v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
  </NuxtLayout>
</template>