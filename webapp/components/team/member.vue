<script setup>

const mail = 'vita@....de'

</script>

<template>
  <v-card elevation="5">
    <div class="d-flex justify-space-between" >
      <div>
        <v-card-title class="mt-2">
          Vita Sarvirova
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iure voluptas eveniet minus dolorum esse delectus neque nesciunt id? Facilis quos maxime, magni consectetur veritatis veniam dolorem iure animi sunt?
        </v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              <v-icon class="mr-4">mdi-translate</v-icon>
              <LittlesChip tooltip="Німецький">Deutsch</LittlesChip>
              <LittlesChip tooltip="англійська">Englisch</LittlesChip>
              <LittlesChip tooltip="українська">українська</LittlesChip>
              <LittlesChip tooltip="русский">русский</LittlesChip>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <span class="mr-7">
                <v-icon class="mr-4">mdi-email-fast-outline</v-icon>
                <a :href="`mailto:${mail}`">{{ mail }}</a>
              </span>
              <span>
                <v-icon class="mr-4">mdi-message-fast-outline</v-icon>
                <a :href="``">Telegram</a>
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
      <v-avatar
        class="ma-4"
        image="/img/vitti.png"
        size="128"
      ></v-avatar>
    </div>
  </v-card>
</template>