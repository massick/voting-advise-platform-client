import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  getQuestions,
  setAnswer,
  setCurrentQuestion
} from './actions/questions'
import { goToStep } from './actions/ui'
import { getResult } from './actions/result'
import Home from './components/home'
import Question from './components/question'
import Form from './components/form'
import Result from './components/result'
import './app.css'

class App extends Component {
  componentDidMount () {
    this.props.getQuestions()
  }

  render () {
    const {
      ui: { step },
      result: { fetching, data: resultData },
      questions: { data: questionsData, submitting, current, loaded },
      goToStep,
      setAnswer,
      getResult,
      setCurrentQuestion
    } = this.props

    return (
      <div className='App'>
        {step === 'home' && (
          <Home goToEnabled={loaded} goToStep={() => goToStep('question')} />
        )}
        {step === 'question' && (
          <Question
            submitting={submitting}
            setAnswer={setAnswer}
            question={questionsData.find(i => i.id === current)}
            goBack={() => {
              const currentIdx = questionsData.findIndex(i => i.id === current)

              return currentIdx === 0
                ? goToStep('home')
                : setCurrentQuestion(questionsData[currentIdx - 1].id)
            }}
          />
        )}
        {step === 'form' && (
          <Form
            fetching={fetching}
            getResult={getResult}
            goBack={() => goToStep('question')}
          />
        )}
        {step === 'result' && (
          <Result result={resultData} goBack={() => goToStep('form')} />
        )}
      </div>
    )
  }
}

App.propTypes = {
  ui: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
  result: PropTypes.object.isRequired,
  getQuestions: PropTypes.func.isRequired,
  setAnswer: PropTypes.func.isRequired,
  goToStep: PropTypes.func.isRequired,
  getResult: PropTypes.func.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired
}

export default connect(
  ({ ui, questions, result }) => ({
    ui,
    questions,
    result
  }),
  dispatch => ({
    getQuestions: () => dispatch(getQuestions()),
    setAnswer: answer => dispatch(setAnswer(answer)),
    goToStep: step => dispatch(goToStep(step)),
    setCurrentQuestion: currentQuestion =>
      dispatch(setCurrentQuestion(currentQuestion)),
    getResult: () => dispatch(getResult())
  })
)(App)
