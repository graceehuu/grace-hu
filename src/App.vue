<template>
  <v-app>
    <v-main class="background">
      <v-container align-center color="primary">
        <Header/>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s | Grace Hu",
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: "Hi, I'm Grace! I study CS at MIT and love to paint." },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  components: {
    Header,
    Footer,
  },

  data: () => ({
  }),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Unica+One&family=Yeseva+One&display=swap');
</style>
