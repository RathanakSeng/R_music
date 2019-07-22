import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    user: null,
    songs: [
      {
        title: 'Solo',
        artist: 'Jennie',
        imgUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
      },
      {
        title: 'Boombayah',
        artist: 'Blackpink',
        imgUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
      },
      {
        title: 'Stay',
        artist: 'Blackpink',
        imgUrl: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
      }
    ]
  },
  getters: {
    user (state) {
      return state.user
    },
    songs (state) {
      return state.songs
    }
  }
})
