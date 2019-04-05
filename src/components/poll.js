import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import styles from './home.module.css'

const Form = ({ error, text, submitting, submitPoll, handleTextChange }) => {
  return (
    <div className={styles.content}>
      <br />
      <p>Insert your poll and start sharing it!</p>
      <p>
        Define parties, questions and answers you want to add using the
        beautiful, clear and user friendly JSON format (MVP)
      </p>

      <br />

      <textarea
        onChange={e => handleTextChange(e.currentTarget.value)}
        style={{ width: '100%', border: '1px solid #999999' }}
        rows='15'
        value={text}
      />
      <br />
      <br />
      {error && error !== '' && <div className={styles.error}>{error}</div>}

      <Button
        disabled={submitting}
        onClick={submitPoll}
        expanded
        screaming
        glow
        oval
        action
      >
        Submit
      </Button>
    </div>
  )
}

Form.propTypes = {
  error: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
  submitPoll: PropTypes.func.isRequired,
  handleTextChange: PropTypes.func.isRequired
}

export default Form
