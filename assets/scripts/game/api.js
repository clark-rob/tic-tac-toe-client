'use strict'

// when running game logic, curlscripts se game API

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token // token from sign in
    }
  })
}

const updateGame = (data) => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id, // game id to find the exact game played
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createGame,
  updateGame
}
