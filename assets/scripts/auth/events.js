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

module.exports = {
  onSignUp
}
