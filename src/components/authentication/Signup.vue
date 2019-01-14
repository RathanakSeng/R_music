<template>
  <v-flex xs12 sm12 md12>
    <v-card class="elevation-12">
      <v-toolbar dark color="amber darken-3">
        <v-toolbar-title>Signup form</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field prepend-icon="person" name="username" label="Login" type="text"></v-text-field>
          <v-text-field prepend-icon="email" name="email" label="email" type="email"></v-text-field>
          <v-text-field id="signup_password" prepend-icon="lock" name="signup_password" label="Password" type="password"></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="amber darken-3" dark>Signup</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>
