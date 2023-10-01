<template>
  <v-row class="my-5">
      <v-col cols="12" class="text-center">
        <p class="text-h2 font-weight-bold">Nordpapers</p>
        <p class="text-h5 font-weight-light mt-1">A collection of walls with Nordic colors <v-icon
            icon="mdi-palette"></v-icon></p>
      </v-col>
  </v-row>
  <gallery-image />
</template>

<script setup>
  import GalleryImage from '@/components/GalleryImage.vue'
</script>
