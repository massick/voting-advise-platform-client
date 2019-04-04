import React from 'react'
import PropTypes from 'prop-types'
import styles from './home.css'

const Form = ({ fetching, getResult, goBack }) => {
  return (
    <div className={styles.content}>
      Click the button to see your result
      <br />
      <br />
      <button disabled={fetching} onClick={getResult}>
        calculate result
      </button>
      <br />
      <br />
      <button onClick={goBack}>back</button>
    </div>
  )
}

Form.propTypes = {
  fetching: PropTypes.bool.isRequired,
  getResult: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
}

export default Form
