<template>
  <v-item-group>
    <v-container fluid grid-list-md>
      <v-layout wrap>
        <v-flex xs12 sm6 md4 lg3 pa-2 v-for="song in songs" :key="song.title">
          <song-card :img="song.imgUrl" :title="song.title" :artist="song.artist"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <div>
        <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
      </div>
    </v-container>
  </v-item-group>
</template>

<script>
import SongCard from './reusable/SongCard'
import QrcodeVue from 'qrcode.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: 'https://www.youtube.com',
      size: 200
    }
  },
  computed: {
    songs () {
      return this.$store.getters.songs
    }
  },
  components: {
    SongCard,
    QrcodeVue
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
