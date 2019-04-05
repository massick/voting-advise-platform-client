import { fetchQuestions, postAnswer } from '../api'
import { goToStep } from './ui'

export const getQuestions = pollId => async (dispatch, getState) => {
  const {
    ui: { uuid }
  } = getState()

  dispatch({ type: 'GET_QUESTIONS_REQUEST' })

  try {
    const data = await fetchQuestions(uuid, pollId)

    dispatch({
      type: 'GET_QUESTIONS_SUCCESS',
      data
    })
  } catch (err) {
    dispatch({ type: 'GET_QUESTIONS_FAILURE', err })
  }
}
export const setAnswer = vote => async (dispatch, getState) => {
  const {
    questions: { data, current },
    ui: { uuid }
  } = getState()

  dispatch({ type: 'SET_ANSWER_REQUEST', questionId: current })

  try {
    await postAnswer(current, vote, uuid)
    const currentIdx = data.findIndex(i => i.id === current)

    dispatch({
      type: 'SET_ANSWER_SUCCESS'
    })

    dispatch(
      currentIdx >= data.length - 1
        ? goToStep('form')
        : setCurrentQuestion(data[currentIdx + 1].id)
    )
  } catch (err) {
    dispatch({ type: 'SET_ANSWER_FAILURE', err })
  }
}

export const setCurrentQuestion = current => dispatch => {
  dispatch({
    type: 'SET_CURRENT_QUESTION',
    current
  })
}
