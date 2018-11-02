'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
/* const playerOne = 'X' // player one's letter
const playerTwo = 'O' // player two's letter
const box = $('box')

const placeX = function () {
  event.preventDefault() // prevents reload of page
  // if a box is empty
  if (box === null) {
    console.log(playerOne)
  }
}
// player can place the letter X in empty box */

const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = event => { // new game on click function
  event.preventDefault() // prevent reload
  api.newGame() // api file is called
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame
}
