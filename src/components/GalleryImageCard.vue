<template>
  <v-card
    elevation="10"
    variant="outlined"
    :href="image.download_url"
    target="_blank"
  >
    <v-img
      :src="getImageProxyUrl(image.download_url)"
      :aspect-ratio="16 / 9"
      :lazy-src="getMinimizedImageProxyUrl(image.download_url)"
      cover
      v-bind="props"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey-lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
      <template v-slot:error>
        <v-img
          :src="image.download_url"
          :aspect-ratio="16 / 9"
          cover
          v-bind="props"
        ></v-img>
      </template>
    </v-img>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const IMG_PROXY_URL_FULL =
  "https://dc1imgproxy.fly.dev/x/rs:auto:332:200:1/plain/";
const IMG_PROXY_URL_MIN = "https://dc1imgproxy.fly.dev/x/rs:auto:10:6:1/plain/";

const props = defineProps(["image"]);

/**
 * Get the URL of an image with a full-sized proxy.
 * @param {string} baseUrl - The base URL of the image.
 * @returns {string} The URL of the image with the imgproxy.
 */
const getImageProxyUrl = (baseUrl) => `${IMG_PROXY_URL_FULL}${baseUrl}`;

/**
 * Get the URL of a minimized image with a proxy.
 * @param {string} baseUrl - The base URL of the image.
 * @returns {string} The URL of the minimized image via imgproxy.
 */
const getMinimizedImageProxyUrl = (baseUrl) => `${IMG_PROXY_URL_MIN}${baseUrl}`;
</script>

<style scoped>
.v-card {
  border-width: 2px;
}
</style>
