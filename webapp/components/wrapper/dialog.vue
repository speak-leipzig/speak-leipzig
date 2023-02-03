<script setup>
const props = defineProps({
  btntext: {
    type: String,
    required: true,
  },
})

let dialog = useState('dialog', () => false)
</script>

<template>
  <v-dialog
    v-model="dialog"
    persistent
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="primary"
        v-bind="props"
      >
        {{ props.btntext }}
      </v-btn>
    </template>
    <slot />
  </v-dialog>
</template>