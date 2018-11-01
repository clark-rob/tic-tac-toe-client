'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
// players:
const playerOne = 'X' // player one's letter
// const playerTwo = 'O' // player two's letter
// gameBoard:
// const board = $('.board') // tic tac board
const box = $('.box') // tic-tac box
/* const winningPath = [ // all win paths
  $(['#1, #2, #3']),
  $(['#4, #5, #6']),
  $(['#7, #8, #9']),
  $(['#1, #4, #7']),
  $(['#2, #5, #8']),
  $(['#3, #6, #9']),
  $(['#1, #5, #9']),
  $(['#3, #5, #7'])
] */
// const startGame = [] // begin with empty array
// const turnCount = [] // number of turns
// const winCount = []

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  // place an X on the id of gameboard with a click
  box.on('click', function () {
    console.log(playerOne)
    box.append(playerOne)
    if (box === null) {

    } else {
    }
  })
  // player can place the letter X in empty box
})
