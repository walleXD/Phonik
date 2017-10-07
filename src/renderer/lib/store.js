import initStore from '../../common/lib/initRedux'
import { routerMiddleware } from 'react-router-redux'
import { forwardToMain, getInitialStateRenderer } from 'electron-redux'
// import isDev from 'electron-is-dev'

import history from './history'

const getInitialState = () => {
  const state = getInitialStateRenderer()
  delete state._persist
  return state
}

const store = initStore(
  getInitialState(),
  middleware => {
    // if (isDev) {
    //   middleware.push(
    //     require('redux-logger').createLogger()
    //   )
    // }
    return [
      forwardToMain,
      routerMiddleware(history),
      ...middleware
    ]
  }
)

export default store
