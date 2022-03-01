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
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

// Initiate terminal frontend once the dom is mounted.
onMounted(() => {
  const term = new Terminal();
  const fitAddon = new FitAddon();

  term.open(document.getElementById('terminal'));
  term.loadAddon(fitAddon);
  fitAddon.fit();
  term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
})
</script>