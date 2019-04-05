import { postPoll } from '../api'

export const handleTextChange = value => dispatch => {
  dispatch({ type: 'HANDLE_TEXT_CHANGE', value })
}

export const submitPoll = () => async (dispatch, getState) => {
  const {
    poll: { text },
    ui: { uuid }
  } = getState()

  dispatch({ type: 'SUBMIT_POLL_REQUEST', text, uuid })

  try {
    const { pollId } = await postPoll(text, uuid)

    dispatch({
      type: 'SUBMIT_POLL_SUCCESS',
      pollId
    })
  } catch (err) {
    dispatch({ type: 'SUBMIT_POLL_FAILURE', err })
  }
}
