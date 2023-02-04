<script setup>
const items = [
  { title: 'deutsch' },
  { title: 'english' },
  { title: 'українська' },
  { title: 'русский' },
]
</script>

<template>
  <div class="text-center">
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon
          size="small"
        >
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>