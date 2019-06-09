const {app, BrowserWindow} = require('electron')
const ipc = require('electron').ipcMain
const path = require('path')
const url = require('url')
const back = require('./back')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function wrapJavaScript(src) {
  var code = new Array();
  code.push('var script = document.createElement("script");');
  code.push('script.src = "');
  code.push(src);
  code.push('";');
  code.push('document.body.appendChild(script);');
  // code.push('console.log(script);');
  return code.join('');
}

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    icon: "favicon.ico",
    webPreferences: {
    nodeIntegration: true
  }});

  win.setMenu(null);

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open the DevTools.
  // win.webContents.openDevTools()

  var script = wrapJavaScript("front.js");
  // code.push('console.log(script);');
  win.webContents.on('dom-ready', (e) => {
    win.webContents.executeJavaScript(script);
  })

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.