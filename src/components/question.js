import React from 'react'
import PropTypes from 'prop-types'
import styles from './home.css'

const Home = ({ submitting, setAnswer, question, goBack }) => {
  console.log('aaaaa', question)

  return (
    <div className={styles.content}>
      {question.title}
      <br />
      <br />
      <br />
      <button disabled={submitting} onClick={() => setAnswer('yes')}>
        yes
      </button>
      <button disabled={submitting} onClick={() => setAnswer('neutral')}>
        don't care
      </button>
      <button disabled={submitting} onClick={() => setAnswer('no')}>
        no
      </button>

      <br />
      <button onClick={goBack}>back</button>
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
