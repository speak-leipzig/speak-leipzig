<script setup>

const props = defineProps({
  tooltip: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
    default: 'grey-darken-1',
  },
  textcolor: {
    type: String,
    required: false,
    default: 'white',
  },
})

</script>

<template>
  <v-tooltip :text="props.tooltip" location="bottom">
    <template v-slot:activator="{ props }">
      <v-chip
        v-bind="props"
        class="mr-2"
        :color="props.color"
        :text-color="textcolor"
      >
        <slot />
      </v-chip>
    </template>
  </v-tooltip>
</template>