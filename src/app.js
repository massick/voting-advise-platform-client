import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Basic from './basic'
import New from './new'
import styles from './app.module.css'

function AppRouter () {
  return (
    <Router>
      <div className={styles.container}>
        <div className={styles.header}>Voting Advise Platform</div>

        <div className={styles.content}>
          <div>
            <Route path='/' exact component={Basic} />
            <Route path='/new/' component={New} />
            <Route path='/polls/:pollId' component={Basic} />
          </div>

          <nav className={styles.nav}>
            <ul className={styles.nav_ul}>
              <li>
                <Link to='/polls/1'>Go to example poll number 1</Link>
              </li>
              <li>
                <Link to='/new/'>Create your new custom pool</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  )
}

export default AppRouter
