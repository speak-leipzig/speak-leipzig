<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="2"
      >
      </v-col>

      <v-col
        cols="12"
        sm="8"
      >
        <v-sheet
          min-height="70vh"
          rounded="lg"
          class="px-5 py-5"
        >
          <slot />
        </v-sheet>
      </v-col>

      <v-col
        cols="12"
        sm="2"
      >
      </v-col>
    </v-row>
  </v-container>
</template>