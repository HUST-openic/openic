<template>
  <v-app id="openic">
    <!-- <v-system-bar app top dark window elevation="5">
      system bar
    </v-system-bar> -->

    <v-app-bar app>
        app bar
    </v-app-bar>

    <v-bottom-navigation app elevation="3">
      bottom navigation
    </v-bottom-navigation>

    <v-navigation-drawer app>
      v-navigation-drawer
    </v-navigation-drawer>

    <v-navigation-drawer app position="right">
      navigation right
    </v-navigation-drawer>

    <v-main>
      <HelloWorld/>
      <Terminal/>
    </v-main>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Terminal from './components/Terminal.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
    Terminal
},

  data: () => ({
    //
  }),
}
</script>
