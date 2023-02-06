<script setup>
const { getItems, getItemById } = useDirectusItems();
const { locale } = useI18n();

const props = defineProps({
  collection: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  fallback: {
    type: String,
    default: 'de',
  },
});

async function getTranslations(collection, id) {
  const item = await getItemById({
    collection: collection,
    id: id
  });

  return await getItems({
    collection: `${collection}_translations`,
    params: {
      filter: {
        id: {
          _in: item.translations,
        }
      }
    },
  });
}

const translations = await getTranslations(props.collection, props.id);
const found = $computed(() => translations.some((translation) => translation.languages_code === locale.value));
const translation = $computed(() => translations.find((translation) => translation.languages_code === locale.value));
const fallback = translations.find((translation) => translation.languages_code === props.fallback);
</script>

<template>
  <div>
    <slot :translation="found ? translation : fallback"></slot>
  </div>
</template>