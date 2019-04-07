# Voting Advise Platform Frontend

Create your own polls and political parties answers for helping people to choose the right party.

It has [its ruby on rails api app](https://github.com/diaclavijo/voting-advise-platform-api)

This App was sponsored by [Helpling](https://www.helpling.de/careers#positions) and
developed inside [Tamedia Hackathon 19](https://harryf.github.io/tamedia-hackdays/).

The project is still missing functionality, below the road map.

# Road map

- Support user authentication and registration. Currently it is using a uuid sent by the client
  to identify the user.
- Give the possibility to an user to create and attend more than 1 poll (clear the local storage)
- Add better UI (instead of JSON) to create a new poll
- Support Poll Edition
- Support Poll stats check: Check answers
- Ask the user filling the poll more data: age, genre and email.

# How to start the application

- export the envar `REACT_APP_API_BASE_URL` to set the url of your apis
- run `yarn start`

# How to create a new pool

Go to `/new` and fill the textfield with a JSON containing:

- a list of parties,
- a list of question with the response of every parties, here's an example:

```
{
  "name": "New Custom Example Shiny Poll",
  "questions": [
    {
      "title": "Invest more money in Erasmus: the Union programme for education, training, youth and sport",
      "body": "",
      "political_party_answers": [
        {
          "political_party_name": "Party1",
          "vote": "yes"
        },
        {
          "political_party_name": "Party2",
          "vote": "neutral"
        },
        {
          "political_party_name": "Party3",
          "vote": "neutral"
        },
        {
          "political_party_name": "Party4",
          "vote": "no"
        }
      ]
    },
    {
      "title": "Approve resolution about emergency situation in Venezuela",
      "body": "",
      "political_party_answers": [
        {
          "political_party_name": "Party1",
          "vote": "neutral"
        },
        {
          "political_party_name": "Party2",
          "vote": "neutral"
        },
        {
          "political_party_name": "Party3",
          "vote": "no"
        },
        {
          "political_party_name": "Party4",
          "vote": "yes"
        }
      ]
    },
    {
      "title": "Establishment of a framework to facilitate sustainable investment",
      "body": "",
      "political_party_answers": [
        {
          "political_party_name": "Party1",
          "vote": "neutral"
        },
        {
          "political_party_name": "Party2",
          "vote": "no"
        },
        {
          "political_party_name": "Party3",
          "vote": "neutral"
        },
        {
          "political_party_name": "Party4",
          "vote": "yes"
        }
      ]
    }
  ]
}
```

- after that you will see a link that you can share or use to take the poll.

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
