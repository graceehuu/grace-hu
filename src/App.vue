<template>
  <v-app>
    <v-main>
      <v-container align-center>
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
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
  }),
};
</script>

<style>
.v-btn:after {
  background: none;
}
</style>
