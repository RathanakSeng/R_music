// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import {sync} from 'vuex-router-sync'
import store from '@/store'
import send from '@/send_email'

Vue.use(Vuetify)
Vue.config.productionTip = false

sync(store, router)
sync(send, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  send,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyA-1IyKB-1QmlwqfvSI_OrZJb55grJDqNY',
      authDomain: 'rmusic.firebaseapp.com',
      databaseURL: 'https://rmusic.firebaseio.com',
      projectId: 'rmusic',
      storageBucket: '',
      messagingSenderId: '608304085331'
    })
  }
})
