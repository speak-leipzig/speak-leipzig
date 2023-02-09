<script setup>
//! Here is a Bug in the npm package "nuxt/directus" for the useDirectusUsers() function.
// const { getUsers } = useDirectusUsers();
import {useCmsUrl} from '../../composables/states';

const cmsUrl = useCmsUrl()

const members = await fetch(`${cmsUrl.value}/users`)
  .then((res) => res.json())
  .then((res) => res.data)
  .catch((err) => console.error(err))

</script>

<template>
  <NuxtLayout>
    <WrapperTranslation v-slot="{ translation }" collection="pages" id="team">
      <h1 v-html="translation.title"></h1>
      <span v-html="translation.content"></span>
    </WrapperTranslation>
    <div class="my-10"></div>
    <v-row class="my-5" v-for="member in members" :key="member.id">
      <TeamCard :value="member"/>
    </v-row>
  </NuxtLayout>
</template>