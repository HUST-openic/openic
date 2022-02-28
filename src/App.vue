<template>
  <v-app id="openic">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      v-app-bar
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
    </v-main>

  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
