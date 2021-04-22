import { combineReducers } from 'redux'

import defaultReducer from './default'

const reducers = combineReducers({
  defaultState: defaultReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>