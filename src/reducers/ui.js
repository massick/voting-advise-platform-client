export const initialState = {
  step: 'home'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GOTO_STEP':
      return { ...state, step: action.step }
    default:
      return state
  }
}
