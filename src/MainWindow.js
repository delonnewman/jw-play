const { BrowserWindow, screen, ipcMain } = require("electron");

const Window = require("./Window");

class MainWindow extends Window {
  constructor(app, options) {
    super({ app, transparent: true, frame: false });
    this.resize(800, 450);

    this.loadAppFile("main.html");

    ipcMain.on("show-file", (_event, file) => {
      this.webContents.send("show-file", file);
    });

    ipcMain.on("video:play", () => {
      this.webContents.send("video:play");
    });

    ipcMain.on("video:pause", () => {
      this.webContents.send("video:pause");
    });

    ipcMain.on("video:rewind", () => {
      this.webContents.send("video:rewind");
    });

    ipcMain.on("video:forward", () => {
      this.webContents.send("video:forward");
    });

    ipcMain.on("video:mute", () => {
      this.webContents.send("video:mute");
    });

    ipcMain.on("video:unmute", () => {
      this.webContents.send("video:unmute");
    });
  }
}

module.exports = MainWindow;
