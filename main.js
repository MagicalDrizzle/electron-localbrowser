const { app, BrowserWindow } = require('electron/main')

const fs = require('fs');
const path = require('path');
const userDataPath = path.join(path.dirname(process.execPath), 'profile');
if (!fs.existsSync(userDataPath)) fs.mkdirSync(userDataPath);
app.setPath('userData', userDataPath);
// debug
// console.log('userData path:', app.getPath('userData'));

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1080,
    height: 720
  })
  win.loadFile(path.join(path.dirname(process.execPath), 'html', 'index.html'))
  win.webContents.on('before-input-event', (event, input) => {
    if (input.alt && input.key === 'ArrowLeft') {
      win.webContents.navigationHistory.goBack()
      event.preventDefault()
    }
    if (input.alt && input.key === 'ArrowRight') {
      win.webContents.navigationHistory.goForward()
      event.preventDefault()
    }
  })
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
