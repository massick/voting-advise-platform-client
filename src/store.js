import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/root'

let middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  const logger = createLogger({ collapsed: () => true })

  middleware = [...middleware, logger]
}

export default function configureStore () {
  return createStore(rootReducer, applyMiddleware(...middleware))
}
