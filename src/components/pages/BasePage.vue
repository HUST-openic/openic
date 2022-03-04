<template>
  <v-layout>
    <v-app-bar>
      app bar
    </v-app-bar>

    <v-bottom-navigation elevation="3">
      bottom navigation
    </v-bottom-navigation>

    <v-navigation-drawer>
      v-navigation-drawer
    </v-navigation-drawer>

    <v-navigation-drawer position="right">
      navigation right
    </v-navigation-drawer>

    <v-main>
      <HelloWorld/>
      <Terminal/>
    </v-main>
  </v-layout>
</template>

<script setup>
import HelloWorld from '../HelloWorld.vue';
import Terminal from '../Terminal.vue';
</script>