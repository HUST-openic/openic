<template>
  <div>
    <div id="terminal"></div>
  </div>
</template>


<script setup>
import { onMounted } from "@vue/runtime-core";

// Xtermjs basic import.
import { Terminal } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import "xterm/css/xterm.css";

// Tauri API.
import { emit, listen } from '@tauri-apps/api/event'; 

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

  let allBuffer = []; // Store lineBuffer history.
  let currentBufferIdx = 0; // The current buffer index in allBuffer.
  let lineBuffer = ''; // Buffer for each line command.
  let cursorPos = 0; // Current position for the line buffer.
  
  // Write shell output for display in terminal.
  term.write("echo hzb\u{1b}[?2004h\r\n\u{1b}[1;36mrustcmd\u{1b}[0m on \u{1b}[1;35m\u{e0a0} \u{1b}[0m\u{1b}[1;35mfork\u{1b}[0m \u{1b}[1;31m[\u{1b}[0m\u{1b}[1;31m!\u{1b}[0m\u{1b}[1;31m]\u{1b}[0m is \u{1b}[1;38;5;208m📦 \u{1b}[0m\u{1b}[1;38;5;208mv0.1.0\u{1b}[0m via \u{1b}[1;31m🦀 \u{1b}[0m\u{1b}[1;31mv1.59.0\u{1b}[0m\u{1b}[1;31m \u{1b}[0m\r\n\u{1b}[1;32m❯\u{1b}[0m echo hzb\u{1b}[?2004l\r\u{1b}[?2004h\u{1b}[?2004l\r\r\n");

  term.onKey(e => {
    const ke = e.domEvent; // KeyboardEvent.
    const printable = !ke.altKey && !ke.ctrlKey && !ke.metaKey;


    if (ke.key == 'Backspace' && lineBuffer.length > 0) {
      lineBuffer = lineBuffer.substring(0, lineBuffer.length - 1);

      term.write('\b \b');
    } else if (ke.key == 'Enter') {
      // Clear current content.
      for (let i = 0; i < lineBuffer.length; i++) {
        term.write('\b \b');
      }

      // Add current buffer to history.
      allBuffer.push(lineBuffer);
      currentBufferIdx += 1;

      // Trigger tauri event.
      emit('terminal-enter', {
        command: lineBuffer,
      })

      // Clear current line buffer for input again.
      lineBuffer = '';

      console.log(allBuffer, currentBufferIdx, lineBuffer); // Good
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
          if (currentBufferIdx > 0) {
            // Clear current content.
            for (let i = 0; i < lineBuffer.length; i++) {
              term.write('\b \b');
            }

            // Update buffer index and lineBuffer.
            currentBufferIdx -= 1;
            lineBuffer = allBuffer[currentBufferIdx];

            term.write(lineBuffer);
          }

          break;
        case 'ArrowDown':
          if (currentBufferIdx < allBuffer.length - 1) {
            // Clear current content.
            for (let i = 0; i < lineBuffer.length; i++) {
                term.write('\b \b');
              }

            currentBufferIdx += 1;
            lineBuffer = allBuffer[currentBufferIdx];

            term.write(lineBuffer);
          }

          break;
      }
    } else if (ke.key == 'Tab') {
      // Test purpose: repeat what's in the current buffer.
    }
    else if (printable) {
      // Write for display.
      term.write(e.key);
      
      // Add to lineBuffer.
      lineBuffer = lineBuffer + e.key;
      cursorPos += 1;
    }
  })
})
</script>