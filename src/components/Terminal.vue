<template>
  <v-container>
    <div>
      <div id="terminal"></div>
    </div>
  </v-container>
</template>


<script setup>
import { onMounted } from "@vue/runtime-core";

// Xtermjs basic import.
import { Terminal } from "xterm";
import "xterm/css/xterm.css"


onMounted(() => {
  var term = new Terminal();
  term.open(document.getElementById('terminal'));
  term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
})
</script>