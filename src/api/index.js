import 'whatwg-fetch'

export const fetchQuestions = uuid =>
  fetch(
    `https://hackvoting-advise-platform-api.herokuapp.com/questions?uuid=${uuid}`,
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

// export const postAnswer = (questionId, vote) => {
//   // $.ajax({
//   //   type: 'POST',
//   //   url: 'https://hackvoting-advise-platform-api.herokuapp.com/answers',
//   //   data: { question_id: questionId, vote },
//   //   success: function () {}
//   // })

//   $.ajax({
//     type: 'POST',
//     url: 'https://hackvoting-advise-platform-api.herokuapp.com/answers',
//     data: { question_id: questionId, vote },
//     dataType: 'json',
//     xhrFields: { withCredentials: true },
//     success: function (data) {
//       console.log(data)
//     }
//   })
// }

export const fetchResult = uuid =>
  fetch(
    `https://hackvoting-advise-platform-api.herokuapp.com/result?uuid=${uuid}`,
    {
      method: 'GET'
    }
  ).then(res => res.json())
