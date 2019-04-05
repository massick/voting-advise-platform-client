import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { submitPoll, handleTextChange } from './actions/poll'
import Poll from './components/poll'

class Basic extends Component {
  render () {
    const {
      poll: { submitting, text, error, pollId },
      submitPoll,
      handleTextChange
    } = this.props

    return (
      <React.Fragment>
        {!pollId && (
          <Poll
            error={error}
            text={text}
            submitting={submitting}
            submitPoll={submitPoll}
            handleTextChange={handleTextChange}
          />
        )}
        {pollId && (
          <div>
            <p>YAY! that worked, you can access your pool using this link:</p>
            <a href={`/polls/${pollId}`}>/polls/{pollId}</a>
          </div>
        )}
      </React.Fragment>
    )
  }
}

Basic.propTypes = {
  handleTextChange: PropTypes.func.isRequired,
  submitPoll: PropTypes.func.isRequired,
  poll: PropTypes.object.isRequired
}

export default connect(
  ({ poll }) => ({
    poll
  }),
  dispatch => ({
    submitPoll: () => dispatch(submitPoll()),
    handleTextChange: value => dispatch(handleTextChange(value))
  })
)(Basic)
