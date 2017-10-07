import { createAction } from 'redux-actions'
// import { createAliasedAction } from 'electron-redux'

export const increment = createAction(
  'example/INCREMENT'
)

export const decrement = createAction(
  'example/DECREMENT',
  i => -i
)

// export const _increment = createAliasedAction(
//   'example/INCREMENT',
//   payload => increment(payload)
// )
