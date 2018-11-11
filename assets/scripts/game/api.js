'use strict'

// when running game logic, curlscripts se game API

const config = require('../config.js')
const store = require('../store.js')

const createGame = () => {
  console.log('created game')
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = () => {
  // console.log('data is', data)
  return $.ajax({
    url: config.apiUrl + '/games/:id',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
    //   game: {
    //     box: {
    //       index:
    //       value:
    //     }
    //   },
    //   over: false
    }
  })
}
module.exports = {
  createGame,
  updateGame
}
