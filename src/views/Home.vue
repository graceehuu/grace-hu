<template>
  <v-container grid-list-xl class="mt-4 pt-4">
    <v-row align="center">
      <v-col align="center" justify="center">
        <v-flex class="display-4 font-weight-bold hidden-sm-and-down" style="line-height: 0 !important;">grace hu</v-flex>
        <span class="display-3 font-weight-bold hidden-md-and-up"> grace hu</span>
        <VueCompareImage
          class="hidden-md-and-down"
          hover
          :style="{ maxWidth: '500px' }"
          :sliderLineWidth="sliderLine"
          :handleSize="hSize"
          :leftImage="leftImage"
          :rightImage="rightImage"
          :sliderPositionPercentage="sliderPosition"
        />
        <VueCompareImage
          class="hidden-lg-and-up"
          hover
          :style="{ maxWidth: '300px' }"
          :sliderLineWidth="sliderLine"
          :handleSize="hSize"
          :leftImage="leftImage"
          :rightImage="rightImage"
          :sliderPositionPercentage="sliderPosition"
        />
      </v-col>
      <v-col>
        <v-card color="transparent" flat class="font-weight-thin">
          <span class="title font-weight-thin">
            mit cs '22 <br>
            check out some of my <router-link flat to="/portfolio" class="font-weight-black" style="text-decoration:none">art</router-link>
          </span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueCompareImage from 'vue-compare-image'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    VueCompareImage
  },
  data () {
    return {
      leftImage: require('@/assets/me-photo.png'),
      rightImage: require('@/assets/me-procreate.png'),
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    }
  }
}
</script>

<style>
</style>
