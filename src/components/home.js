import React from 'react'
import PropTypes from 'prop-types'
import styles from './home.css'

const Home = ({ goToEnabled, goToStep }) => {
  return (
    <div className={styles.content}>
      some great intro balba lbalbalablabl
      <br />
      <br />
      <br />
      <button disabled={!goToEnabled} onClick={goToStep}>
        start!
      </button>
    </div>
  )
}

Home.propTypes = {
  goToEnabled: PropTypes.bool.isRequired,
  goToStep: PropTypes.func.isRequired
}

export default Home
