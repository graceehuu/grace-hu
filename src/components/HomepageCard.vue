<template>
  <v-card class="mx-auto" style="width: 80%">
        <v-row>
        <v-col>
          image here
        </v-col>
        <v-col>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="unica">
              {{this.overline}}
            </div>
            <v-list-item-title class="chobani">
              {{this.title}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{this.description}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn rounded text to="/portfolio">
            {{this.btnText}}
          </v-btn>
        </v-card-actions>
        </v-col>
        </v-row>
      </v-card>
</template>

<script>

export default {
  metaInfo: {
    title: 'Home'
  },
  props: {
    overline: String,
    title: String,
    description: String,
    btnText: String,

  },
  components: {
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
