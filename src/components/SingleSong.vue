<template>
<!-- <div class="container-fluid"> -->
  <div class="row">
    <v-flex lg9 md12 sm12 xs12>
      <v-layout column>
        <v-flex xs12 sm12 md12 lg12 pl-4 pr-4>
          <v-card>
            <iframe width="100%" height="550px" src="https://www.youtube.com/embed/b73BI9eUkjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <v-card-title primary-title>
                <div class="headline">Title: Solo</div>
                <v-spacer></v-spacer>
                <div>
                <div class="grey--text">Artist: Jennie</div>
                <div class="grey--text">Album: Solo</div>
                <div class="grey--text">Published: 12/November/2018</div>
                </div>
            </v-card-title>
            <v-slide-y-transition>
                <v-card-text v-show="show">
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex lg3 md12 sm12 xs12>
      <v-item-group>
        <v-container fluid grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm4 md4 lg12 v-for="img in image" :key="img.id">
            <song-card img="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" title="Solo" artist="Jennie"/>
            <br/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-item-group>
    </v-flex>
  </div>
<!-- </div> -->
</template>

<script>
import SongCard from './reusable/SongCard'
export default {
  data () {
    return {
      show: false,
      image: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8}
      ]
    }
  },
  components: {
    SongCard
  }
}
</script>
