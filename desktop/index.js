const electron = require("electron");
const MainWindow = require("./app/main_window");

const { app } = electron;

let mainWindow;

app.on("ready", () => {
  mainWindow = new MainWindow("http://localhost:3000");
});

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
