'use strict'

const store = require('../store.js')

const createGameSuccess = data => {
  $('#game-status').text('New Game Made!')
  $('#game-status').removeClass()
  $('#game-status').addClass('success')
  console.log('createGameSuccess ran. Data is :', data)
}

const createGameFailure = error => {
  $('#game-status').text('Error Creating Game')
  $('#game-status').removeClass()
  $('#game-status').addClass('failure')
  console.log('createGameFailure ran. Error is :', error)
}

const gameCheckWin = data => {
  $('#result').text('Itsa Me a' + currentPlayer + '!')
}

const gameCheckTie = data => {
  $('#result').text('Itsa Tie!')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  gameCheckWin,
  gameCheckTie
}
