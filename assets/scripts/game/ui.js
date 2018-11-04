'use strict'
const store = require('../store.js')

const createGameSuccess = data => {
  $('#message').text('New Game Made!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('createGameSuccess ran. Data is :', data)
}

const createGameFailure = data => {
  $('#message').text('Error Creating Game')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('createGameFailure ran. Error is :', error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
