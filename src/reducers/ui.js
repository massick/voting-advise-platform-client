export const initialState = {
  step: 'home',
  uuid:
    '_' +
    Math.random()
      .toString(36)
      .substr(2, 9)
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GOTO_STEP':
      return { ...state, step: action.step }
    case 'SUBMIT_POLL_SUCCESS':
      return { ...state, step: 'home' }
    default:
      return state
  }
}
