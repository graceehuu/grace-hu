import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#66525a',
        secondary: '#e2d3cc',
        accent: '#e5aa7b',
        background: '#fcfcfe'
      },
      
      dark: {
        primary: '#c2e7f2',
        secondary: '#f7cfaf',
        accent: '#fceeb8',
      },
    },
  },
})
