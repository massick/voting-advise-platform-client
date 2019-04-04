export const initialState = {
  data: [],
  loaded: false,
  current: null,
  submitting: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUESTIONS_REQUEST':
      return { ...state }
    case 'GET_QUESTIONS_SUCCESS':
      return {
        ...state,
        data: action.data.map(i => ({ ...i, answer: null })),
        loaded: true,
        current: action.data.length ? action.data[0].id : null
      }
    case 'GET_QUESTIONS_FAILURE':
      return { ...state }
    case 'SET_ANSWER_REQUEST':
      return { ...state, submitting: true }
    case 'SET_ANSWER_SUCCESS':
      return {
        ...state,
        submitting: false
      }
    case 'SET_ANSWER_FAILURE':
      return { ...state, submitting: false }

    case 'SET_CURRENT_QUESTION':
      return { ...state, current: action.current }

    default:
      return state
  }
}
