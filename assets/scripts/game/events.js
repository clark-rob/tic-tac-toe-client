'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
/* const playerOne = 'X' // player one's letter
const playerTwo = 'O' // player two's letter
const box = $('box')

const placeX = function () {
  event.preventDefault() // prevents reload of page
  // if a box is empty
  if (box === null) {
    console.log(playerOne)
  }
}
// player can place the letter X in empty box */

const onCreateGame = event => { // new game on click function
  event.preventDefault() // prevent reload
  api.createGame() // api file is called
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}
/* -------------------------------- */

const players = [
  {
    name: 'M', // player one's letter
    move: 0, // player one's move
    boxes: [] // array of boxes P1 selected
  },
  {
    name: 'L', // player two's letter
    move: 0, // player two's moves
    boxes: [] // array of boxes P2 selected
  }
]

let currentPlayer
let currentMove = 1 // move to begin with

// gameBoard:
// let game = $('#game') // tic tac board
let gameBoard
const boxes = document.querySelectorAll('.box') // tic-tac box
const winningPath = [ // each box has content that equals player
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
// to win you need 3 values
// const startGame = [] // begin with empty array
// let move = 0 // number of moves
// const winCount = []
// const boxesOfPlayerOne = []
// const boxesOfPlayerTwo = []
// $('#' + event.target.id).text() //jquery selector to post div value

// place an X in box once, then change to O once

const nextPlayer = function () {
  if (currentMove % 2) { // if current move is a factor of 2
    currentPlayer = players[0].name // set current to P1
    players[0].boxes.push(event.target.id) // selected box is pushed to P1 box
    players[0].move++ // playerOne move increments 1
    // console.log('p1 moves ' + players[0].move)
    return currentPlayer// playerOne is set
  } else { // if current move is not a factor of 2
    currentPlayer = players[1].name // set player to P2
    players[1].boxes.push(event.target.id) // selected box is pushed to P2 box
    players[1].move++ // playerTwo move increments 1
    return currentPlayer// playerTwo is set
  }
}

//  0|1|2
//  3|4|5
//  6|7|8

// if box 0 1 2 have content that is X, X wins; if they have O, O wins, else tie
const gameCheck = function () {
  console.log('current move= ' + currentMove)
  console.log('Gb is ' + typeof winningPath)
  console.log('P1 boxes are ' + typeof players[0].boxes)
  if (players[0].moves >= 3) { // if P1 reaches 3 moves
    for (let i = 0; i < winningPath.length; i++) {
      if (players[0].boxes === winningPath[i]) {
        console.log('win')
      } else {
        console.log('lose')
      }
    }
    /* if (boxesInPlay === winningPath) { // if selected three content equal a winningPath values
    if (boxesInPlay[0] && boxesInPlay[1] && boxesInPlay[2] === winningPath[0]) {
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
    // console.log('box in play= ' + boxesInPlay)
    // console.log('win path= ' + winningPath[0])
  }
}
// determine value of winner by using currentPlayer

const onBoxClick = event => {
  $(event.target).append(nextPlayer) // on the box click, player change
  // console.log(typeof event.target.id)
  const selectedBox = $(event.target).text() // takes index of selected box and writes the content
  // console.log('GB= ' + gameBoard)
  // console.log('box content= ' + selectedBox)
  console.log('target id= ' + event.target.id)
  console.log('Current player= ' + currentPlayer)
  console.log('p1 boxes= ' + players[0].boxes)
  console.log('p2 boxes= ' + players[1].boxes)
  // boxesInPlay.push(selectedBox)// box content is pushed to boxesInPlay
  gameCheck()
  gameBoard = $('#game').text() // makes gameBoard a variable that takes in content of the jQuery id of 'game' as a string
  // console.log('GB= ' + gameBoard)
  currentMove++ // each click, currentMove increments 1
}

/* const createGame = function () {
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
}) */

module.exports = {
  onCreateGame,
  onBoxClick
}
