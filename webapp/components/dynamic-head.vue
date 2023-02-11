<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: 'Spreak Leipzig'
  }
})
</script>


<template>
  <Head>
    <Title>
      {{ props.title }} | Speak Leipzig
    </Title>
    <Meta name="description" :content="props.description" />
  </Head>
</template>