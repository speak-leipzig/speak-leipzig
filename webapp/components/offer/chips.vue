<script setup>
const props = defineProps({
  offer:{
    required: true
  }
})
</script>

<template>
  <div class="d-flex justify-start">
    <div v-for="lvl in offer.level" :key="lvl">
      <WrapperChip :tooltip="`${$t('level')}: ${$t(lvl)}`">
        {{ $t(lvl) }}
      </WrapperChip>
    </div>

    <WrapperChip v-if="!offer.online" :tooltip="$t('presence')">
      <v-icon>mdi-account-group</v-icon>
    </WrapperChip>
    <WrapperChip v-else :tooltip="$t('online')">
      <v-icon>mdi-web</v-icon>
    </WrapperChip>
  </div>
</template>