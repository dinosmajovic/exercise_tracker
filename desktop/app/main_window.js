const electron = require("electron");
const { BrowserWindow } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      minHeight: 700,
      maxWidth: 1050,
      width: 1050,
      height: 700,
      frame: false,
      resizable: true,
      webPreferences: { backgroundThrottling: false }
    });

    this.loadURL(url);
  }
}

module.exports = MainWindow;
