import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SingleSong from '@/components/SingleSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/song',
      name: 'SingleSong',
      component: SingleSong
    }
  ]
})
