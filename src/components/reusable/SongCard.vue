<template>
  <v-card>
    <v-img
      :src="img"
      height="130px"
      >
    </v-img>
    <v-card-title primary-title>
      <div>
        <div class="headline">{{title}}</div>
        <span class="grey--text">{{artist}}</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn flat color="amber darken-3">Explore</v-btn>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: [
    'title',
    'artist',
    'img'
  ]
}
</script>
