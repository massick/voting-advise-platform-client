import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import styles from './home.module.css'

const Home = ({ goToEnabled, goToStep }) => {
  return (
    <div className={styles.content}>
      <br />
      <p>This app is gonna help you to decide what to vote!</p>
      <p>
        Comparing your answers with the ones with all the politic parties you'll
        know who to vote! (TODO: find better copy )
      </p>

      <br />
      <br />

      <Button
        disabled={!goToEnabled}
        onClick={goToStep}
        expanded
        screaming
        glow
        oval
        action
      >
        Start!
      </Button>
    </div>
  )
}

Home.propTypes = {
  goToEnabled: PropTypes.bool.isRequired,
  goToStep: PropTypes.func.isRequired
}

export default Home
