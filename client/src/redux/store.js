import { applyMiddleware, createStore, compose } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import persistReducer from './reducers/'

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const Store = createStore(
  persistReducer,
  composeEnhancers(applyMiddleware(thunk))
)

const Persistor = persistStore(Store)

const exports = {
  Store,
  Persistor
}

export default exports
