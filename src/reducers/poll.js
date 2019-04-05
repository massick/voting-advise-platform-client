export const initialState = {
  pollId: null,
  text: '',
  submitting: false,
  error: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_TEXT_CHANGE':
      return {
        ...state,
        text: action.value,
        error: ''
      }
    case 'SUBMIT_POLL_REQUEST':
      return { ...state, submitting: true }
    case 'SUBMIT_POLL_SUCCESS':
      return {
        ...state,
        pollId: action.pollId,
        text: '',
        submitting: false
      }
    case 'SUBMIT_POLL_FAILURE':
      return {
        ...state,
        submitting: false,
        error: 'Something went wrong, check your input field and retry'
      }
    default:
      return state
  }
}
