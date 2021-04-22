import { applyMiddleware, createStore  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import reducers from './reducers'

export { default as keys } from './keys'
export { default as actions } from './actions'

export type { RootState } from './reducers'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
export default store
