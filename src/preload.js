const logger = require('mii-logger.js');
const { contextBridge, ipcRenderer, dialog } = require('electron');

contextBridge.exposeInMainWorld('api', {
    doThing: () => ipcRenderer.send('do-a-thing'),
    jsonFromFile: (file) => console.jsonFromFile(file),
    listDir: (dir) => console.listDir(dir),
    // openFile: ()=>{
    //   dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
    // }
  }
)

// ipcRenderer.on("openFile", function(){
//   console.log('');
//   const { dialog } = require('electron')
//   dialog.showOpenDialog({title: "Open File",properties : ['openFile']}).then(result =>{
//     mainWindow.webContents.send("filepaths", result.filePaths);
// })