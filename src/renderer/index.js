import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import Router from 'react-router-redux/ConnectedRouter'
import { replayActionRenderer } from 'electron-redux'

import store from './lib/store'
import history from './lib/history'
import App from './containers/App'

replayActionRenderer(store)

const rootTag = document.getElementById('app')
const initialProps = {}

const AppContainer = () =>
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>

AppRegistry.registerComponent('App', () => AppContainer)
AppRegistry.runApplication('App', { initialProps, rootTag })

if (module.hot) module.hot.accept()
