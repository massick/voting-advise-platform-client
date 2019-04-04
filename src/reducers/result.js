export const initialState = {
  data: {},
  fetching: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESULT_REQUEST':
      return { ...state, fetching: true }
    case 'GET_RESULT_SUCCESS':
      return {
        ...state,
        data: action.data,
        fetching: false
      }
    case 'GET_RESULT_FAILURE':
      return { ...state, fetching: false }

    default:
      return state
  }
}
