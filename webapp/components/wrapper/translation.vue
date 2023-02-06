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

</script>

<template>
  <div>
    <div v-for="translation in translations" :key="translation.languages_code">
      <div v-if="translation.languages_code === locale">
        <slot :translation="translation"></slot>
      </div>
    </div>
  </div>
</template>