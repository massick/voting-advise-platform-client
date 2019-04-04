import { combineReducers } from 'redux'
import questions from './questions'
import ui from './ui'
import result from './result'

export default combineReducers({
  questions,
  ui,
  result
})
