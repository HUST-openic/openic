<template>
  <v-app id="openic">
    <v-app-bar app>
      page select
    </v-app-bar>

    <v-main app>
      <BasePage/>
    </v-main>
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
