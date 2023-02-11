'use strict';

const {
   app,
   BrowserWindow,
   screen,
   Menu,
} = require('electron');
const path = require('path');


let isMac = process.platform === 'darwin';


let mainWindow;


const createAppWindow = async () => {

   let mainScreen = screen.getPrimaryDisplay();
   let w = mainScreen.bounds.width;
   let h = mainScreen.bounds.height;
   let x = mainScreen.bounds.x;
   let y = mainScreen.bounds.y;
   let pathHTML = 'index.html';

   mainWindow = new BrowserWindow({
      x: x,
      y: y,
      width: w,
      height: h,
      show: false,
      alwaysOnTop: false,
      webPreferences: {
         contextIsolation: true,
         sandbox: true,
         worldSafeExecuteJavaScript: true,
         webSecurity: true,
         devTools: true,
         nativeWindowOpen: true,
         preload: path.join(__dirname, 'preload.cjs'), // preload script IPC RENDERER listeners for Main window renderer
      },
   });

   // Open the DevTools when the app launches.
   mainWindow.webContents.openDevTools();

   // current way to quit app
   mainWindow.on('quit', () => {
      mainWindow.destroy();
      app.quit();
   });

   mainWindow.once('ready-to-show', () => {
      mainWindow.show();
   });

   await mainWindow.loadFile(path.join(__dirname, pathHTML));

};


// Prevent multiple instances of the app
if (!app.requestSingleInstanceLock()) {
   app.quit();
}

app.on('window-all-closed', () => {
   if (!isMac) {
      app.quit();
   }
});




// This method will be called when Electron has finished
// initialization and is ready to create browser "mainWindow."
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {

   app.on('activate', async () => {
      // if the user clicks the app icon
      // and there is no open window
      // we need to create a new window
      if (BrowserWindow.getAllWindows().length === 0) {
         await createAppWindow();
      }
   });

   await createAppWindow();

});
