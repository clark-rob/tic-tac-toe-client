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
let currentPlayer = ''
// gameBoard:
// let game = $('#game') // tic tac board
const box = $('.box') // tic-tac box
const winningPath = [ // all win paths
  [box[0], box[1], box[2]]
]
// const startGame = [] // begin with empty array
// let move = 0 // number of moves
let currentMove = 0 // move to begin with
// const winCount = []

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOff)

  //let boxesInPlay = []


  // place an X in box once, then change to O once

  const nextPlayer = function () {
    if (currentMove % 2) { // if current move is a factor of 2
      console.log(currentMove)
      currentMove++// add another move
      currentPlayer = playerTwo // set current to two
      console.log(currentPlayer)
      return currentPlayer// playerTwo is placed
    } else { // if current move is not a factor of 2
      console.log(currentMove)
      currentMove++// add another move
      currentPlayer = playerOne // set player to one
      console.log(currentPlayer)
      return currentPlayer// add playerOne
    }
  }
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

  const onBoxClick = event => {
    $(event.target).append(nextPlayer) // on the box click, player and move change
  }
  box.one('click', onBoxClick) // when the box is clicked

  const createGrid = function () {
    for (let i = 0; i < box.length; i++) { // for each box in the array

    }
  }
  // see if current player can become playerOne
  // try to find who is current player
  // set up winning scenerio
   // if currentMove = 8 result=tie
  // continue to use onBoxClick function to find array
  $('#retry').on('click', function () {
    event.preventDefault()
  })
})
