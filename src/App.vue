<template>
  <div id="app">
    <v-app>
      <navbar/>
      <v-content>
        <router-view/>
      </v-content>
      <fixed-button-action v-if="userAuthenticated"/>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import FixedButtonAction from '@/components/reusable/FixedButtonAction'
export default {
  name: 'App',
  computed: {
    userAuthenticated () {
      return this.$store.getters.user
    }
  },
  components: {
    Navbar,
    FixedButtonAction
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
