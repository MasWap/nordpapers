<template>
  <v-container>
    <v-row class="mt-5">
      <v-col cols="12" class="text-center">
        <p class="text-h2 font-weight-bold text-secondary">Nordpapers</p>
        <p class="text-h5 font-weight-light mt-1 text-success">
          A collection of walls with Nordic colors
          <v-icon icon="mdi-palette text-tertiary"></v-icon>
        </p>
        <p>
          Interested in contributing your own wallpapers? I welcome your
          contributions - just submit a
          <v-chip
            color="secondary"
            link
            href="https://github.com/Ahmosys/nordpapers/pulls"
            target="_blank"
          >
            pull request ✨
          </v-chip>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-alert
          type="info"
          title="Tips"
          text="To download an image, simply click on it, and it will open in its original size in a new tab."
          closable
          icon="mdi-lightbulb-on"
          close-label="Close Alert"
          variant="tonal"
          border="start"
        ></v-alert>
      </v-col>
    </v-row>
  </v-container>
  <gallery-image />
</template>

<script setup>
import GalleryImage from "@/components/GalleryImage.vue";
</script>
