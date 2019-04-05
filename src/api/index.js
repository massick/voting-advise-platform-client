import 'whatwg-fetch'

export const fetchQuestions = (uuid, pollId = 1) =>
  fetch(
    `https://hackvoting-advise-platform-api.herokuapp.com/polls/${pollId}/questions?uuid=${uuid}`,
    {
      method: 'GET'
    }
  ).then(res => res.json())

export const postAnswer = (questionId, vote, uuid) =>
  fetch('https://hackvoting-advise-platform-api.herokuapp.com/answers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question_id: questionId, vote, uuid })
  }).then(res => res.json())

export const fetchResult = (uuid, pollId = 1) =>
  fetch(
    `https://hackvoting-advise-platform-api.herokuapp.com/polls/${pollId}/result?uuid=${uuid}`,
    {
      method: 'GET'
    }
  ).then(res => res.json())

export const postPoll = (text, uuid) =>
  fetch(`https://hackvoting-advise-platform-api.herokuapp.com/polls`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...JSON.parse(text), uuid })
  }).then(res => res.json())
