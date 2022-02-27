import { persistReducer } from 'redux-persist'
import localforage from 'localforage'

import { rootReducer } from './rootReducer'

const persistConfig = {
  key: 'root',
  debug: 'true',
  storage: localforage
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)
