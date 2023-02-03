<script setup>
const route = useRoute()
</script>

<template>
  <NuxtLayout name="threecols">
    <div class="text-center">
      <v-avatar 
        size="180"
        image="/img/vitti.png"
      ></v-avatar>
      <h1>Vitaliia Sarvirova</h1>
      <p>This is the team member page</p>
    </div>
    <br>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse at excepturi quidem labore tempora enim eaque. Ex cumque dicta veritatis cum nulla, eveniet magni asperiores non vero nemo, voluptate earum?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse at excepturi quidem labore tempora enim eaque. Ex cumque dicta veritatis cum nulla, eveniet magni asperiores non vero nemo, voluptate earum?</p>
    <br>
    <h2>Lebenslauf</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse at excepturi quidem labore tempora enim eaque. Ex cumque dicta veritatis cum nulla, eveniet magni asperiores non vero nemo, voluptate earum?</p>
    <template #left>
      <v-list density="compact">
          <v-list-subheader>Kontakt</v-list-subheader>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-email-fast-outline"></v-icon>
            </template>
            <v-list-item-title>
              <a :href="`mailto:${mail}`">vita@... .de</a>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-message-fast-outline"></v-icon>
            </template>
            <v-list-item-title>
              <a :href="``">Telegram</a>
            </v-list-item-title>
          </v-list-item>
        </v-list>
    </template>
  </NuxtLayout>
</template>