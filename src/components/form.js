import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import styles from './home.module.css'

const Form = ({ fetching, getResult, goBack }) => {
  return (
    <div className={styles.content}>
      <br />
      <p>Click here to see the result!</p>

      <br />
      <br />

      <Button
        disabled={fetching}
        onClick={getResult}
        expanded
        screaming
        glow
        oval
        action
      >
        Calculate result!
      </Button>

      <br />
      <br />
      <a className={styles.back} onClick={goBack}>
        back
      </a>
    </div>
  )
}

Form.propTypes = {
  fetching: PropTypes.bool.isRequired,
  getResult: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired
}

export default Form
