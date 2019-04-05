import { combineReducers } from 'redux'
import questions from './questions'
import ui from './ui'
import result from './result'
import poll from './poll'

export default combineReducers({
  questions,
  ui,
  result,
  poll
})
