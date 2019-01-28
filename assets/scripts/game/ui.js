'use strict'

const store = require('../store.js')

const createGameSuccess = data => {
  $('.game-status').show().text('New Game Made!')
  store.game = data.game // sends the game to the store, data.game takes that info
  $('#game').show() // board form appear
  $('.game-status').fadeOut(3000)
  $('.past-games').show() // hide past games
}

const createGameFailure = () => { // removed error parameter
  $('.game-status').show().text('Error Creating Game')
  // removed console.error
}

const updateGameSuccess = data => {
}

const updateGameFailure = () => { // removed error parameter
  $('.game-status').show().text('Error Updating Game')
  // removed console.error
}

const getPastGamesSuccess = data => {
  $('.past-games').text('You have played ' + data.games.length)
}

const getPastGamesFailure = () => {
  $('.past-games').text('Could not load your past games')
}

module.exports = {
  createGameSuccess,
  createGameFailure,
  updateGameSuccess,
  updateGameFailure,
  getPastGamesSuccess,
  getPastGamesFailure
}
