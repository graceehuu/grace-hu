<template>
  <v-container grid-list>
    <v-row align="center" class="my-4 py-4">
      <v-col>
      <v-list-item three-line>
        <v-list-item-content>
          <h2 class="secondary--text" style="font-family: 'Unica One', cursive; font-size:2rem">
            HI <v-icon color="secondary">mdi-hand-wave</v-icon>, I'M 
          </h2>
          <v-list-item-title class="mb-4 pb-4">
            <h1 class="primary--text">Grace Hu</h1>
          </v-list-item-title>
          <v-list-item-subtitle style="font-size:1.5rem">
            — mit cs '22
            , pm + swe, & artist
          </v-list-item-subtitle>
        </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn class="accent--text" rounded text to="/portfolio">
            check out my art
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
      <v-col>
        <VueCompareImage
          class="hidden-md-and-down"
          hover
          v-bind="attrs"
          v-on="on"
          :style="{ width: '500px' }"
          :sliderLineWidth="sliderLine"
          :handleSize="hSize"
          :leftImage="leftImage"
          :rightImage="rightImage"
          :sliderPositionPercentage="sliderPosition"
        />
        <VueCompareImage
          class="hidden-lg-and-up"
          hover
          :style="{ width: '300px' }"
          :sliderLineWidth="sliderLine"
          :handleSize="hSize"
          :leftImage="leftImage"
          :rightImage="rightImage"
          :sliderPositionPercentage="sliderPosition"
        />
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
    VueCompareImage,
  },
  data () {
    return {
      leftImage: require('@/assets/me-photo.png'),
      rightImage: require('@/assets/me-procreate.png'),
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5,
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Yeseva One', cursive !important;
  font-size: 6rem;
}

h2 {
  font-size: 2rem;
  background-color: "primary";
}
</style>
