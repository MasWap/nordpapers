<template>
  <v-container>
    <v-row>
      <v-col v-for="image in images" cols="12" sm="6" md="4" lg="3" xl="3">
        <v-img :src="getImageUrl(image.download_url)" lazy-src="https://picsum.photos/10/6" :aspect-ratio="16 / 9" cover>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { onMounted } from 'vue';
  import { ref } from 'vue';

  const REPOSITORY = "ahmosys/nordpapers";
  const IMAGES_DIRECTORY = "public/images";
  const GITHUB_API_URL = `https://api.github.com/repos/${REPOSITORY}/contents/${IMAGES_DIRECTORY}`;
  const IMG_PROXY_URL = "https://dc1imgproxy.fly.dev/x/rs:auto:332:200:1/plain/";

  const images = ref([]);

  // Function to get the URL of an image  
  const getImageUrl = (downloadUrl) => `${IMG_PROXY_URL}${downloadUrl}`;

  onMounted(async () => {
    try {
      const response = await fetch(GITHUB_API_URL);
      const data = await response.json();
      images.value = data.filter(item => item.type === "file");
    } catch (error) {
      console.error("Error fetching images", error);
    }
  });
</script>
