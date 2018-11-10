'use strict'

// when running game logic, curlscripts se game API

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  // console.log('data is', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = () => {
  // console.log('data is', data)
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createGame,
  updateGame
}
