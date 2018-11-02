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
let currentPlayer
// gameBoard:
// let game = $('#game') // tic tac board
const box = $('.box') // tic-tac box
const winningPath = [box[0], box[1], box[2]]

// const startGame = [] // begin with empty array
// let move = 0 // number of moves
let currentMove = 1 // move to begin with
// const winCount = []
let boxesInPlay = []

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOff)

  // place an X in box once, then change to O once

  const nextPlayer = function () {
    if (currentMove % 2) { // if current move is a factor of 2
      // console.log(currentMove)
      currentPlayer = playerOne // set current to one
      return currentPlayer// playerOne is set
    } else { // if current move is not a factor of 2
      // console.log(currentMove)
      currentPlayer = playerTwo // set player to two
      return currentPlayer// playerTwo is set
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

  const gameCheck = function () {
    if (currentMove > 3) { // if currentMove reaches 3
      if (boxesInPlay === winningPath) { // if selected three values equal a winningPath values
        console.log('win')
      // check selected boxes(boxesInPlay) and compare to winningPath to determine win
      }
      console.log(boxesInPlay)
      console.log(winningPath)
    }
  // determine value of winner by using currentPlayer
  }

  const onBoxClick = event => {
    $(event.target).append(nextPlayer) // on the box click, player change
    console.log(event.target)
    console.log(currentPlayer)
    currentMove++ // each click, currentMove increments 1
    boxesInPlay.push(event.target)// box index is pushed to boxesInPlay
    gameCheck()
  }
  box.one('click', onBoxClick) // when the box is clicked


  const createGrid = function () {
    for (let i = 0; i < box.length; i++) { // for each box in the array

    }
  }
  // see if current player can become playerOne - done
  // try to find who is current player - done
  // set up winning scenerio
  // if currentMove = 8 result=tie
  // continue to use onBoxClick function to find array
  $('#retry').on('click', function () {
    event.preventDefault()
  })
})
