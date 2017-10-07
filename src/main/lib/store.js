import { forwardToRenderer, triggerAlias } from 'electron-redux'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import NodeStorage from 'redux-persist-storage-node'
import isDev from 'electron-is-dev'

import initStore from '../../common/lib/initRedux'
import { blackListFilters } from './utils'

const store = initStore(
  {},
  middleware => {
    return [
      triggerAlias,
      ...middleware,
      forwardToRenderer
    ]
  },
  reducers => persistReducer({
    key: 'kasset',
    debug: isDev,
    storage: new NodeStorage('/tmp/store.json'),
    transforms: [...blackListFilters()]
  },
  combineReducers(reducers))
)

export default store
