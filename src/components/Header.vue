<template>
  <div>
    <v-app-bar flat scroll-off-screen style="background-color: transparent !important;">
      <v-toolbar-title style="cursor: pointer; font-family: 'Unica One', cursive !important;" 
        class="headline font-weight-black"
        @click="$router.push('/')">
        GH
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn depressed icon
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.href"
        >
        <v-icon>{{icon.icon}}</v-icon>
        </v-btn>
        <v-btn @click="changeTheme" depressed icon color="accent">
          <v-icon v-if="this.$vuetify.theme.dark">mdi-weather-night</v-icon>
          <v-icon v-else>mdi-white-balance-sunny</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: null,
      icons: [
        { href: 'https://www.facebook.com/grace.hu.794/', icon: 'mdi-facebook'
        },
        { href: 'https://www.linkedin.com/in/gracehu12/', icon: 'mdi-linkedin'
        },
        { href: 'https://www.instagram.com/gracewhu/', icon: 'mdi-instagram' }
      ]
    }
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

<style scoped>
</style>
