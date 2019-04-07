import 'whatwg-fetch'
const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

export const fetchQuestions = (uuid, pollId = 1) =>
  fetch(`${apiBaseUrl}/polls/${pollId}/questions?uuid=${uuid}`, {
    method: 'GET'
  }).then(res => res.json())

export const postAnswer = (questionId, vote, uuid) =>
  fetch(`${apiBaseUrl}/answers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question_id: questionId, vote, uuid })
  }).then(res => res.json())

export const fetchResult = (uuid, pollId = 1) =>
  fetch(`${apiBaseUrl}/polls/${pollId}/result?uuid=${uuid}`, {
    method: 'GET'
  }).then(res => res.json())

export const postPoll = (text, uuid) =>
  fetch(`${apiBaseUrl}/polls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...JSON.parse(text), uuid })
  }).then(res => res.json())
