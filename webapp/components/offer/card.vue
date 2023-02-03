<template>
  <v-card
    class="mx-auto py-2"
    outlined
    max-width="400px"
    elevation="4"
    @click="console.log('clicked')"
  >
    <v-card-title class="d-flex justify-space-between">
      <span class="headline">
        Kurs xyz
      </span>
      <v-spacer></v-spacer>
      <v-chip
        color="grey-darken-1 mx-2"
        text-color="white"
        label
      >
          Vita
          <v-tooltip 
            activator="parent"
            location="bottom"
          >
            Vitaliia Sarvirova
          </v-tooltip>
      </v-chip>
      <v-avatar
        image="img/vitti.png"
        size="32"
      ></v-avatar>
    </v-card-title>
    <v-card-subtitle class="d-flex justify-start">
      
      <LittlesChip tooltip="Level: B2">
        B2
      </LittlesChip>

      <LittlesChip tooltip="in Präsenz">
        <v-icon>mdi-account-group</v-icon>
      </LittlesChip>
      
    </v-card-subtitle>
  <v-card-text>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, deleniti veniam molestiae repellendus aspernatur et eveniet nemo sed voluptates quae quas laudantium perspiciatis autem quasi sequi tenetur. A, molestias rerum!
  </v-card-text>
  </v-card>
</template>