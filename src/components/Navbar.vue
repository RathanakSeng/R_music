<template>
   <div>
    <v-toolbar
      clipped-left
      color="amber darken-3"
      dark
      app
      fixed
      >
      <v-toolbar-title>
        <span class="hidden-sm-and-down">Rmusic</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 300px" pr-3>
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
          class="hidden-sm-and-down"
        ></v-text-field>
      </v-layout>
      <v-btn icon class="show-sm-and-down hidden-md-and-up">
        <v-icon>search</v-icon>
      </v-btn>
      <v-menu offset-y>
        <v-btn
          dark
          icon
          large
          slot="activator"
          class="amber darken-3"
          >
          <v-icon>account_circle</v-icon>
        </v-btn>
        <v-list>
            <v-list-tile @click="dialog_login = !dialog_login">
            <v-list-tile-title class="myPointer">Log in</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="dialog_signup = !dialog_signup">
            <v-list-tile-title class="myPointer">Sign up</v-list-tile-title>
            </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-dialog v-model="dialog_login" width="450px">
      <login/>
    </v-dialog>
    <v-dialog v-model="dialog_signup" width="450px">
      <signup/>
    </v-dialog>
   </div>
</template>

<script>
import Login from './authentication/Login'
import Signup from './authentication/Signup'
export default {
  data () {
    return {
      dialog_login: false,
      dialog_signup: false
    }
  },
  props: {
    source: String
  },
  components: {
    Login,
    Signup
  }
}
</script>

<style scoped>
.myPointer {
  cursor: pointer !important
}
.myHover:hover {
  background-color: #FAFAFA !important
}
</style>
