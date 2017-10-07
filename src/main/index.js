import { app, BrowserWindow } from 'electron'
import windowStateKeeper from 'electron-window-state'
import installExtension, {
  REACT_DEVELOPER_TOOLS,
  REDUX_DEVTOOLS
} from 'electron-devtools-installer'
import isDev from 'electron-is-dev'

let mainWindow
let initialBoot = true

const createMainWindow = async () => {
  const mainWindowState = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800
  })

  if (initialBoot && isDev) {
    await installExtension([ REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS ])
    await require('devtron').install()
    initialBoot = false
  }

  const win = new BrowserWindow({
    x: mainWindowState.x,
    y: mainWindowState.y,
    width: mainWindowState.width,
    height: mainWindowState.height,
    minWidth: 800,
    minHeight: 620
  })

  mainWindowState.manage(win)

  const url = isDev
    ? 'http://localhost:9080'
    : `file://${__dirname}/index.html`

  if (isDev) win.webContents.openDevTools()

  win.loadURL(url)

  win.on('closed', () => {
    mainWindow = null
  })

  return win
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) mainWindow = createMainWindow()
})

app.on('ready', async () => {
  mainWindow = createMainWindow()
})
