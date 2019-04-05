import { fetchResult } from '../api'
import { goToStep } from './ui'

export const getResult = pollId => async (dispatch, getState) => {
  const {
    ui: { uuid }
  } = getState()

  dispatch({ type: 'GET_RESULT_REQUEST' })

  console.log('addd', pollId)

  try {
    const data = await fetchResult(uuid, pollId)

    dispatch({
      type: 'GET_RESULT_SUCCESS',
      data
    })
    dispatch(goToStep('result'))
  } catch (err) {
    dispatch({ type: 'GET_RESULT_FAILURE', err })
  }
}
