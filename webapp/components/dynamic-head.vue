<script setup>
const props = defineProps({
  title: {
    type: Object,
    required: true
  }
})
</script>


<template>
  <Head>
    <Title>
      {{ props.title }} | Speak Leipzig
    </Title>
  </Head>
</template>