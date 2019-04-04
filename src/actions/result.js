import { fetchResult } from '../api'
import { goToStep } from './ui'

export const getResult = () => async dispatch => {
  console.log('heeeee')
  dispatch({ type: 'GET_RESULT_REQUEST' })

  try {
    const data = await fetchResult()

    dispatch({
      type: 'GET_RESULT_SUCCESS',
      data
    })
    dispatch(goToStep('result'))
  } catch (err) {
    dispatch({ type: 'GET_RESULT_FAILURE', err })
  }
}
