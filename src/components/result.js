import React from 'react'
import PropTypes from 'prop-types'
import styles from './home.module.css'

const resultClassName = score => {
  if (score < 50) return styles.score_red
  if (score < 80) return styles.score_yellow
  return styles.score_green
}

const Result = ({ result, goBack }) => {
  return (
    <div className={styles.content}>
      <br />
      <p>Based on the answers you gave here's your result!</p>
      <br />
      <h3>Parties</h3>
      {result.parties.map((i, idx) => {
        return (
          <div className={styles.result} key={idx}>
            <div>
              Your affinity with
              <span className={styles.result_name}>{i.name}</span> is
              <span className={resultClassName(i.score)}>
                {Math.round(i.score)}%
              </span>
            </div>
            <div className={styles.why}>
              <div className={styles.why_title}>Here's why:</div>
              <ul className={styles.why_list}>
                {i.questions.map(q => (
                  <li key={q.id}>
                    At the question "<strong>{q.title}</strong>" you answer "
                    <strong>{q.user_vote}</strong>" and the party vote "
                    <strong>{q.party_vote}</strong>"
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
      <br />
      <br />
      <a className={styles.back} onClick={goBack}>
        back
      </a>
    </div>
  )
}

Result.propTypes = {
  result: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default Result
