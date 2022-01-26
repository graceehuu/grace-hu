<template>
  <v-container grid-list-xl>
    <v-row class="mt-2 pt-2">
      <v-col>
        <v-container>
          <v-img maxWidth="400px" :src="require('@/assets/chase.svg')"></v-img>
        </v-container>
        <v-container>
          <h1 class="display-4 font-weight-black" style="line-height: 0.5 !important;">Featured</h1>
          <h1 class="display-4 font-weight-thin">Work</h1>
          <p class="subtitle-1" style="line-height: 0 !important;">Acryllic on canvas</p>
        </v-container>
      </v-col>
      <v-col>
        <v-container>
          <p style="width: 20rem; float: right;">
            I love to create pieces that evoke feelings of whimsy and nostalgia. My style involves marrying bold colors with impressionistic aesthetics.
          </p>
        </v-container>
        <v-container>
          <v-img width="600px" :src="require('@/assets/frank.svg')"></v-img>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio '
  },
}
</script>

<style scoped>
</style>
