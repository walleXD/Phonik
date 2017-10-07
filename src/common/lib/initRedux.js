import { createStore, applyMiddleware, combineReducers } from 'redux'
import promise from 'redux-promise'
import thunk from 'fsa-redux-thunk'
import allReducers from '../reducers'
import isDev from 'electron-is-dev'

export default (
  preloadedState = {},
  injectMiddleware = undefined,
  injectReducer = undefined
) => {
  const prodMiddlewares = [
    promise,
    thunk
  ]

  const devMiddlewares = [
    require('redux-immutable-state-invariant').default(),
    require('redux-logger').createLogger()
  ]

  let middlewares = isDev
    ? [...devMiddlewares, ...prodMiddlewares]
    : prodMiddlewares

  if (injectMiddleware) middlewares = injectMiddleware(middlewares)

  const reducers = injectReducer
    ? injectReducer(allReducers)
    : combineReducers(allReducers)

  const { composeWithDevTools } = process.type !== 'renderer'
    ? require('remote-redux-devtools')
    : require('redux-devtools-extension')

  const store = createStore(
    reducers,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
