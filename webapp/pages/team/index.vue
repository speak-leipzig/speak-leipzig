<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="team">
      <h1 v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
    <br>
    <TeamMember />
  </NuxtLayout>
</template>