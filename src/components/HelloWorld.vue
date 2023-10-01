<template>
  <v-container>
    <v-row class="my-5">
      <v-col cols="12" class="text-center">
        <p class="text-h2 font-weight-bold">Nordpapers</p>
        <p class="text-h5 font-weight-light mt-1">A collection of walls with Nordic colors <v-icon
            icon="mdi-palette"></v-icon></p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 24" cols="3">
        <v-img class="mx-auto" height="300" lazy-src="https://picsum.photos/id/11/100/60" max-width="500"
          src="https://picsum.photos/id/11/100/60">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
//
</script>
