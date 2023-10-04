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
        <v-card
          elevation="10"
          :href="image.download_url"
          :border="10"
          target="_blank"
        >
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
const IMG_PROXY_URL_FULL =
  "https://dc1imgproxy.fly.dev/x/rs:auto:332:200:1/plain/";
const IMG_PROXY_URL_MIN = "https://dc1imgproxy.fly.dev/x/rs:auto:10:6:1/plain/";

const images = ref([]);

/**
 * Get the URL of an image with a full-sized proxy.
 * @param {string} baseUrl - The base URL of the image.
 * @returns {string} - The URL of the image with the imgproxy.
 */
const getImageProxyUrl = (baseUrl) => `${IMG_PROXY_URL_FULL}${baseUrl}`;

/**
 * Get the URL of a minimized image with a proxy.
 * @param {string} baseUrl - The base URL of the image.
 * @returns {string} - The URL of the minimized image via imgproxy.
 */
const getMinimizedImageProxyUrl = (baseUrl) => `${IMG_PROXY_URL_MIN}${baseUrl}`;

/**
 * Fetch files from repository folder and retrieve only images via GitHub API.
 */
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
