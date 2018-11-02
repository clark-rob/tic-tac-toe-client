'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
// players:
const playerOne = 'M' // player one's letter
const playerTwo = 'L' // player two's letter
// let players = [playerOne, playerTwo]// players:
let currentPlayer = playerOne
// gameBoard:
// let game = $('#game') // tic tac board
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
// let move = 0 // number of moves
let currentMove = 0 // move to begin with
// const winCount = []

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOff)

  // place an X in box once, then change to O once

  const nextPlayer = function () { // player changes to next when current move changes
  /*  if (currentMove === 0) { // if the current move is 0
      console.log(currentMove)
      currentMove++ // another move is added
      return playerOne // playerOne is placed
    } else { // but if current move is not 0
      console.log(currentMove)
      currentMove-- // move is subtracted
      return playerTwo // playerTwo is placed
    }
  } */

    if (currentMove % 2) { // if current move is a factor of 2
      console.log(currentMove)
      currentMove++// add another move
      return playerTwo// playerTwo is placed
    } else { // if current move is not a factor of 2
      currentMove++// add another move
      return playerOne// add playerOne
    }
  }
  const onBoxClick = event => {
    $(event.target).append(nextPlayer) // on the box click, player and move change
  }
  box.one('click', onBoxClick) // when the box is clicked
})
