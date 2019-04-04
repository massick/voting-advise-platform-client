import 'whatwg-fetch'

export const fetchQuestions = () =>
  fetch('https://hackvoting-advise-platform-api.herokuapp.com/questions', {
    method: 'GET'
  }).then(res => res.json())

export const postAnswer = (questionId, vote) =>
  fetch('https://hackvoting-advise-platform-api.herokuapp.com/answers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question_id: questionId, vote })
  }).then(res => res.json())

export const fetchResult = () =>
  fetch('https://hackvoting-advise-platform-api.herokuapp.com/questions', {
    method: 'GET'
  }).then(res => res.json())
