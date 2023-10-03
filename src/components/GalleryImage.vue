<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(image, i) in images"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <v-card variant="outlined" elevation="10" :href="image.download_url" target="_blank">
          <v-img
            class="elevation-15"
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
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";

const REPOSITORY = "ahmosys/nordpapers";
const IMAGES_DIRECTORY = "public/images";
const GITHUB_API_URL = `https://api.github.com/repos/${REPOSITORY}/contents/${IMAGES_DIRECTORY}`;
const IMG_PROXY_URL_FULL = "https://dc1imgproxy.fly.dev/x/rs:auto:332:200:1/plain/";
const IMG_PROXY_URL_MIN = "https://dc1imgproxy.fly.dev/x/rs:auto:10:6:1/plain/";

const images = ref([]);

// Function to get the URL of an image
const getImageProxyUrl = (downloadUrl) => `${IMG_PROXY_URL_FULL}${downloadUrl}`;

// Function to get the URL of a minimized image
const getMinimizedImageProxyUrl = (downloadUrl) => `${IMG_PROXY_URL_MIN}${downloadUrl}`;

// Function to fetch images
const fetchImages = async () => {
  try {
    const response = await fetch(GITHUB_API_URL);
    const data = await response.json();
    images.value = data.filter((item) => item.type === "file");
  } catch (error) {
    console.error("Error fetching images", error);
  }
};

onMounted(() => {
  fetchImages();
});
</script>
