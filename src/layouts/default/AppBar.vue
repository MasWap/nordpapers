<template>
  <v-app-bar flat scroll-behavior="hide">
    <v-app-bar-title>
      <v-icon icon="mdi-wallpaper" />
      Nordpapers
    </v-app-bar-title>
    <v-btn :icon="theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-weather-sunny'" @click="toggleTheme"></v-btn>
    <v-btn icon="mdi-github" href="https://github.com/Ahmosys/nordpapers" target="_blank"></v-btn>
    <v-btn icon="mdi-information-outline"></v-btn>
  </v-app-bar>
</template>

<script setup>
  import { useTheme } from 'vuetify'

  const theme = useTheme()

  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'customLightNordTheme' : 'customDarkNordTheme';
  }
</script>



