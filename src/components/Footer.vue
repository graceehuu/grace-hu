<template>
  <v-footer>
    made with&nbsp;
    <v-icon small color="brown">mdi-coffee</v-icon>
    &nbsp;and&nbsp; 
    <v-icon small color="green">mdi-vuetify</v-icon>
    &nbsp;by Grace
    <!-- <div>&copy; {{ new Date().getFullYear() }}</div> -->

    <v-spacer></v-spacer>

    <v-btn color="secondary" rounded text @click="sheet = !sheet">
      <v-icon>mdi-send</v-icon>
    </v-btn>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" text color="accent" @click="sheet = !sheet">close</v-btn>
        <v-container class="py-3">
          <v-row align="center">
            <v-col>
              <v-icon>mdi-map-marker</v-icon>
              <h2 class="secondary--text">location</h2>
              <span style="text-decoration: line-through"> Boston</span>
              <span> SF </span>
            </v-col>
            <v-col>
              <v-icon size="100" class="secondary--text">mdi-fruit-watermelon</v-icon>
            </v-col>
            <v-col>
              <v-icon>mdi-email</v-icon>
              <h2 class="secondary--text">say hello</h2>
              <a href="mailto: graceehuu@gmail.com?subject=hello world">graceehuu@gmail.com</a>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
  }),
}
</script>

<style scoped>
h2 {
  font-family: 'Yeseva One', cursive !important;
  text-transform: lowercase;
}
</style>
