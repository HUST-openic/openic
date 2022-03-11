<template>
  <v-app id="openic">
    <v-system-bar app>
      system
    </v-system-bar>

    <v-app-bar app>
      page select
    </v-app-bar>

    <v-main app>
      <router-view>

      </router-view>
    </v-main>

    <v-bottom-navigation elevation="3">
      bottom navigation
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import BasePage from './components/pages/BasePage.vue'

export default {
  name: 'App',

  components: {
    BasePage 
},

  data: () => ({
    //
  }),
}
</script>
