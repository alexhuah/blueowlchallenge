import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import CardReducer from './card/CardReducer'

const rootReducer = combineReducers({ card: CardReducer })

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store
