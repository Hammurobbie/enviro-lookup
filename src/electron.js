const electron = require("electron");
const app = electron.app;
const path = require("path");
const isDev = require("electron-is-dev");
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

if (isDev) {
  require("electron-reload");
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1380,
    height: 850,
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      devTools: true
      // Probably wanna trigger this guy ^ off before production
    }
  });

  mainWindow.setMenu(null);

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
