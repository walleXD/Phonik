import { AppRegistry } from 'react-native'

import App from './App'

const rootTag = document.getElementById('app')
const initialProps = {}

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', { initialProps, rootTag })

if (module.hot) module.hot.accept()
