import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import styles from './home.module.css'

const Home = ({ submitting, setAnswer, question, goBack }) => {
  return (
    <div className={styles.content}>
      <br />
      <p>{question.title}</p>
      <br />
      <br />
      <Button disabled={submitting} onClick={() => setAnswer('yes')} screaming>
        Yes
      </Button>
      &nbsp;
      <Button
        hollow
        disabled={submitting}
        onClick={() => setAnswer('neutral')}
        screaming
      >
        Don't care
      </Button>
      &nbsp;
      <Button
        disabled={submitting}
        onClick={() => setAnswer('no')}
        action
        screaming
      >
        No
      </Button>
      <br />
      <br />
      <a className={styles.back} onClick={goBack}>
        back
      </a>
    </div>
  )
}

Home.propTypes = {
  question: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
  goBack: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired
}

export default Home
