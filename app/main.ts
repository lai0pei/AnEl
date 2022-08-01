const { app, BrowserWindow } = require('electron')
const fs = require('fs');
const url = require('url');
const path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

   // Path when running electron executable
   let pathIndex = '../an-el/index.html';

   win.loadURL(url.format({
     pathname: path.join(__dirname, pathIndex),
     protocol: 'file:',
     slashes: true
   }));

}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
