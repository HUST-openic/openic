#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use serde::Serialize;
use tauri::Manager;

#[derive(Clone, Serialize)]
struct TerminalPayload {
  command: String,
}

#[derive(Clone, Serialize)]
struct CommandOutput {
  output: String,
}

fn main() {
  tauri::Builder::default()
    .setup(|app| {
      // Listen to xtermjs terminal output, executed command and emit shell output to xtermjs.
      app.listen_global("terminal-enter", |event| {
        //TODO: Trim payload and get String.
        println!("Terminal enteterd from xtermjs: {:?}", event.payload()); // Listen success.
      });
      app.emit_all("command-executed", CommandOutput { output: "Good xtermjs and tauri working together".into()}).unwrap();

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
