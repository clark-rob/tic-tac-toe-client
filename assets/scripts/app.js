'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

/* --------required files-------- */

const authEvents = require('./auth/events.js')

const gameEvents = require('./game/events.js')

/* ------------------------- */

const players = [
  {
    playerOne: 'M' // player one's letter
  },
  {
    playerTwo: 'L' // player two's letter
  }
]
// let players = [playerOne, playerTwo]// players:
let currentPlayer
// gameBoard:
// let game = $('#game') // tic tac board
const box = $('.box'.id).text() // tic-tac box
const winningPath = [ // each box has content that equals player
  ['0', '1', '2'],
  ['3', '4', '5'],
  ['6', '7', '8'],
  ['0', '3', '6'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['0', '4', '8'],
  ['2', '4', '6']
]
// to win you need 3 values
// const startGame = [] // begin with empty array
// let move = 0 // number of moves
let currentMove = 1 // move to begin with
// const winCount = []
const boxesInPlay = []

// $('#' + event.target.id).text() //jquery selector to post div value

$(() => {
  /* Auth Events */
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOff)
  /* Game Events */
  $('#new-game').on('click', gameEvents.onCreateGame)

  /* ------------------------ */
  // place an X in box once, then change to O once

  const nextPlayer = function () {
    if (currentMove % 2) { // if current move is a factor of 2
      // console.log(currentMove)
      currentPlayer = players[0].playerOne // set current to one
      return currentPlayer// playerOne is set
    } else { // if current move is not a factor of 2
      // console.log(currentMove)
      currentPlayer = players[1].playerTwo // set player to two
      return currentPlayer// playerTwo is set
    }
  }

//  0|1|2
//  3|4|5
//  6|7|8


// if box 0 1 2 have content that is X, X wins; if they have O, O wins, else tie
  const gameCheck = function () {
    console.log('current move= ' + currentMove)
    //console.log(typeof winningPath[0])
    if (currentMove >= 3) { // if currentMove reaches 3

      if (boxesInPlay[0] && boxesInPlay[1] && boxesInPlay[2] === players[0].playerOne)
      // if (boxesInPlay === winningPath) { // if selected three content equal a winningPath values
    /*  if (boxesInPlay[0] && boxesInPlay[1] && boxesInPlay[2] === winningPath[0]) {
        console.log('win')// check selected boxes(boxesInPlay) and compare to winningPath to determine win
      } else if (boxesInPlay[3] === winningPath[3] && boxesInPlay[4] === winningPath[4] && boxesInPlay[5] === winningPath[5]) {
        console.log('win')
      } else if (boxesInPlay[6] === winningPath[6] && boxesInPlay[7] === winningPath[7] && boxesInPlay[8] === winningPath[8]) {
        console.log('win')
      } else if (boxesInPlay[0] === winningPath[0] && boxesInPlay[3] === winningPath[3] && boxesInPlay[6] === winningPath[6]) {
        console.log('win')
      } else if (boxesInPlay[1] === winningPath[1] && boxesInPlay[4] === winningPath[4] && boxesInPlay[7] === winningPath[7]) {
        console.log('win')
      } else if (boxesInPlay[2] === winningPath[2] && boxesInPlay[5] === winningPath[5] && boxesInPlay[8] === winningPath[8]) {
        console.log('win')
      } else if (boxesInPlay[0] === winningPath[0] && boxesInPlay[4] === winningPath[4] && boxesInPlay[8] === winningPath[8]) {
        console.log('win')
      } else if (boxesInPlay[2] === winningPath[2] && boxesInPlay[4] === winningPath[4] && boxesInPlay[6] === winningPath[6]) {
        console.log('win')
      } else {
        console.log('lose')
      } */
      console.log('box in play= ' + boxesInPlay)
      console.log('win path= ' + winningPath[0])
    }
  }
  // determine value of winner by using currentPlayer

  const onBoxClick = event => {
    $(event.target).append(nextPlayer) // on the box click, player change
    // console.log(typeof event.target.id)
    const selectedBox = $('#' + event.target.id).text() // takes content of selected box
    console.log('box conten= ' + selectedBox)
    console.log('target id= ' + event.target.id)
    console.log('Current player= ' + currentPlayer)
    boxesInPlay.push(selectedBox)// box content is pushed to boxesInPlay
    gameCheck()
    currentMove++ // each click, currentMove increments 1
  }

  $('.box').one('click', onBoxClick) // when the box is clicked


  /*const newGame = function () {
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
  })*/
})
