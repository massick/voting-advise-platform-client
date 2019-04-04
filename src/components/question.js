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
      <Button disabled={submitting} onClick={() => setAnswer('yes')}>
        Yes
      </Button>
      &nbsp;
      <Button disabled={submitting} onClick={() => setAnswer('neutral')}>
        Don't care
      </Button>
      &nbsp;
      <Button disabled={submitting} onClick={() => setAnswer('no')} action>
        No
      </Button>
      <br />
      <br />
      <a onClick={goBack}>back</a>
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
