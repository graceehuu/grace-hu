<template>
  <v-container grid-list-xl>
    <v-row class="mt-2 pt-2">
      <v-col>
        <v-container>
          <v-img maxWidth="400px" :src="require('@/assets/chase.png')"></v-img>
        </v-container>
        <v-container>
          <h1 class="display-4 font-weight-black primary--text" style="line-height: 0.5 !important;">Featured</h1>
          <h1 class="display-4 font-weight-thin primary--text" style="">Work</h1>
          <p class="subtitle-1 accent--text" style="line-height: 0 !important;">Acryllic on canvas</p>
        </v-container>
      </v-col>
      <v-col>
        <v-container>
          <p style="width: 20rem; float: right;">
            I love to paint people. My style involves marrying bold colors with impressionistic aesthetics.
          </p>
        </v-container>
        <v-container>
          <v-img width="550px" :src="require('@/assets/frank.png')"></v-img>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="mt-10 pt-5">
      <v-col class="mr-10">
       <v-img maxWidth="800px" :src="require('@/assets/digital-arts.png')"></v-img>
      </v-col>
      <v-col>
        <h1 class="display-3 accent--text" style="transform: translateX(25%) translateY(250%) rotate(90deg);">digital art</h1>
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
