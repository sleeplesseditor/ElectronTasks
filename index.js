const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 500,
        width: 300,
        frame: false,
        resizable: false,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.locaURL(`file://${__dirname}/src/index.html`)
});