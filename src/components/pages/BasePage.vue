<template>
  <v-layout>
    <v-app-bar>
      app bar
    </v-app-bar>

    <v-navigation-drawer>
      v-navigation-drawer
    </v-navigation-drawer>

    <v-navigation-drawer position="right">
      navigation right
    </v-navigation-drawer>

    <v-main>
      <p>{{ setupPiniaMessage }}</p>
      <HelloWorld/>
      <Terminal/>
    </v-main>
  </v-layout>
</template>

<script setup>
import HelloWorld from '../HelloWorld.vue';
import Terminal from '../Terminal.vue';
import { useStore } from '../../store/setup';
import { storeToRefs } from 'pinia';

const { setupPiniaMessage } = useStore()

</script>