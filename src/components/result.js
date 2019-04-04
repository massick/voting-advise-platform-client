import React from 'react'
import PropTypes from 'prop-types'
import styles from './home.css'

const Result = ({ result, goBack }) => {
  console.log('rr', result)

  return (
    <div className={styles.content}>
      Resultrttttttt
      <br />
      <br />
      <button onClick={goBack}>back</button>
    </div>
  )
}

Result.propTypes = {
  result: PropTypes.object.isRequired,
  goBack: PropTypes.func.isRequired
}

export default Result
