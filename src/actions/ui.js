export const goToStep = step => dispatch => {
  dispatch({
    type: 'GOTO_STEP',
    step
  })
}
