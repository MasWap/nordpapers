/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Custom theme properties
// https://vuetifyjs.com/en/features/theme/#custom-properties
const customNordTheme = {
  dark: true,
  colors : {
    primary: '#5e81ac',
    secondary: '#88c0d0',
    error: '#bf616a',
    info: '#ebcb8b',
    success: '#a3be8c',
    warning: '#d08770',
    background: '#2e3440',
    surface: '#3b4252',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customNordTheme',
    themes: {
      customNordTheme,
    },
  },
});
