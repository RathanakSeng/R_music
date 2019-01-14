<template>
  <v-card id="create">
    <v-speed-dial
      v-model="fab"
      :bottom="bottom"
      :right="right"
      :direction="direction"
      :transition="transition"
      >
      <v-btn
        slot="activator"
        v-model="fab"
        color="amber darken-3"
        absolute
        dark
        fab
       >
        <v-icon>edit</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
       >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
       >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
       >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    direction: 'left',
    fab: false,
    fling: false,
    tabs: null,
    right: true,
    bottom: true,
    transition: 'slide-x-reverse-transition'
  }),

  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },

  watch: {
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    }
  }
}
</script>

<style >
  #create .v-speed-dial {
    position: fixed;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>
