import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: () => true })

  middleware = [...middleware, logger]
}

export default function configureStore () {
  let store = createStore(persistedReducer, applyMiddleware(...middleware))
  let persistor = persistStore(store)

  return { store, persistor }
}
