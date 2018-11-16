'use strict'

const store = require('../store.js')

const createGameSuccess = data => {
  $('#game-status').text('New Game Made!')
  $('#game-status').removeClass()
  $('#game-status').addClass('success')
  store.game = data.game // sends the game to the store, data.game takes that info
  $('#game').show() // board form appear
}

const createGameFailure = error => {
  $('#game-status').text('Error Creating Game')
  $('#game-status').removeClass()
  $('#game-status').addClass('failure')
  console.error('createGameFailure ran. Error is :', error)
}

const updateGameSuccess = data => {
  $('#game-status').removeClass()
  $('#game-status').addClass('success')
  console.log('updateGameSuccess ran. Data is :', data)
}

const updateGameFailure = error => {
  $('#game-status').text('Error Updating Game')
  $('#game-status').removeClass()
  $('#game-status').addClass('failure')
  console.error('updateGameFailure ran. Error is :', error)
}

const gameCheckWin = data => {
  $('#result').text('Itsa Me a' + currentPlayer + '!')
}

// const gameCheckTie = data => {
//   $('#result').text('Itsa Tie!')
// }

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameCheckWin,
  // gameCheckTie
}
