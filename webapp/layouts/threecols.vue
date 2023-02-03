<template>
  <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
              class="px-2 pb-1"
            >
              <slot name="left"/>
            </v-sheet>
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
            <v-sheet
              rounded="lg"
              min-height="268"
            >
            <slot name="right"/>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
</template>