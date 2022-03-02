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
  const term = new Terminal({
    rendererType: "canvas",
    rows: 24,
    disableStdin: false,
    convertEol: true,
    scrollback: 10,
    theme: {
      foreground: 'yellow',
      background: '#060101',
    }
  });

  const fitAddon = new FitAddon();

  term.open(document.getElementById('terminal'));
  term.loadAddon(fitAddon);
  fitAddon.fit();
  
  // Write shell output for display in terminal.
  term.write("touch /home/hzb/Desktop/itworks\r\necho hzb\u{1b}[?2004h\r\n\u{1b}[1;36mrustcmd\u{1b}[0m on \u{1b}[1;35m\u{e0a0} \u{1b}[0m\u{1b}[1;35mmain\u{1b}[0m \u{1b}[1;31m[\u{1b}[0m\u{1b}[1;31m!\u{1b}[0m\u{1b}[1;31m]\u{1b}[0m is \u{1b}[1;38;5;208m📦 \u{1b}[0m\u{1b}[1;38;5;208mv0.1.0\u{1b}[0m via \u{1b}[1;31m🦀 \u{1b}[0m\u{1b}[1;31mv1.59.0\u{1b}[0m\u{1b}[1;31m \u{1b}[0m\r\n\u{1b}[1;32m❯\u{1b}[0m touch /home/hzb/Desktop/itworks\r\n\u{1b}[?2004l\r\u{1b}[?2004h\r\n\u{1b}[1;36mrustcmd\u{1b}[0m on \u{1b}[1;35m\u{e0a0} \u{1b}[0m\u{1b}[1;35mmain\u{1b}[0m \u{1b}[1;31m[\u{1b}[0m\u{1b}[1;31m!\u{1b}[0m\u{1b}[1;31m]\u{1b}[0m is \u{1b}[1;38;5;208m📦 \u{1b}[0m\u{1b}[1;38;5;208mv0.1.0\u{1b}[0m via \u{1b}[1;31m🦀 \u{1b}[0m\u{1b}[1;31mv1.59.0\u{1b}[0m\u{1b}[1;31m \u{1b}[0m\r\n\u{1b}[1;32m❯\u{1b}[0m echo hzb\u{1b}[?2004l\r\u{1b}[?2004h\u{1b}[?2004l\r\r\n");

  // term.onData(e => {
  //   term.write(e);
  // })

  term.onKey(e => {
    const ke = e.domEvent; // KeyboardEvent.
    const printable = !ke.altKey && !ke.ctrlKey && !ke.metaKey;

    if (ke.key == 'Backspace') {
      term.write('\b \b');
    } else if (ke.key == 'Enter') {
      term.write('\r\n');
      //TODO: Trigger tauri event.
    } else if (ke.key.startsWith("Arrow")) {
      //TODO: Move cursor.
      switch (ke.key) {
        case 'ArrowRight':
          console.log("hit right");
          break;
        case 'ArrowLeft':
          console.log('hit left');
          break;
        case 'ArrowUp':
          console.log('hit up');
          break;
        case 'ArrowDown':
          console.log('hit down');
          break;
      }
    }
    else if (printable) {
      term.write(e.key);
      console.log(e.key);
    }
  })

})
</script>