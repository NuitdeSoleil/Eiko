const electron = require("electron")
const {app, BrowserWindow} = require("electron")

function createWIndow () {
    let win = new BrowserWindow({
        width:800,
        height: 480,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile("web/acceuil/index.html")
} 

app.whenReady().then(createWIndow)