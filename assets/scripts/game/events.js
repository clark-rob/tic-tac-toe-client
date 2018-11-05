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
  $('.box').empty()
  // api.createGame() // api file is called
  //   .then(ui.createGameSuccess)
  //   .catch(ui.createGameFailure)
}
/* -------------------------------- */

const players = [
  {
    name: 'Mario', // player one's letter
    move: 0, // player one's move
    boxes: [] // array of boxes P1 selected
  },
  {
    name: 'Luigi', // player two's letter
    move: 0, // player two's moves
    boxes: [] // array of boxes P2 selected
  }
]

// .html('<img src="../../public/marioprofile.png">')
// .html('<img src="../../public/luigiprofile.png">')

let currentPlayer
let currentMove = 1 // move to begin with

// gameBoard:
let game = $('#game') // tic tac board
let gameBoard
const winningPath = [// each box has content that equals player
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
// const startGame = [] // begin with empty array
// const winCount = []
// $('#' + event.target.id).text() //jquery selector to post div value

// place an X in box once, then change to O once

const nextPlayer = function () {
  if (currentMove % 2) { // if current move is a factor of 2
    currentPlayer = players[0].name // set current to P1
    players[0].boxes.push(event.target.id) // selected box is pushed to P1 box
    players[0].move++ // playerOne move increments 1
    console.log('p1 moves ' + players[0].move)
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

// if box 0 1 2 have content that is X, X wins; if they have O, O wins, else if moves are 9 tie
const gameCheck = function () {
  // const gameCheckWin = $('#result').text('Itsa Me a' + currentPlayer + '!')
  console.log('current move= ' + currentMove)
  // console.log('div #0 = ' + $('#0').text())
  if (players[0].move >= 3) { // if P1 reaches 3 moves
    if ($('#0').text() === $('#1').text() && $('#1').text() === $('#2').text() && $('#0').text() !== '') { // if the jQuery Id equal to each other you get a winner
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!') // current player is then awarded winner
      // $('#result').text('Itsa Me a' + currentPlayer + '!')
      console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#3').text() === $('#4').text() && $('#4').text() === $('#5').text() && $('#3').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#6').text() === $('#7').text() && $('#7').text() === $('#8').text() && $('#6').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#0').text() === $('#3').text() && $('#3').text() === $('#6').text() && $('#0').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#1').text() === $('#4').text() && $('#4').text() === $('#7').text() && $('#1').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#2').text() === $('#5').text() && $('#5').text() === $('#8').text() && $('#2').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#0').text() === $('#4').text() && $('#4').text() === $('#8').text() && $('#0').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#2').text() === $('#4').text() && $('#4').text() === $('#6').text() && $('#2').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if (currentMove === 9) {
      $('#result').modal('show')
      $('#phrase').text('Itsa Tie!')
      // console.log('Itsa Tie! LETSA GOOOO')
    }
  }
}
// determine value of winner by using currentPlayer

const onBoxClick = event => {
  event.preventDefault()
  $(event.target).append(nextPlayer) // on the box click, player change
  gameCheck()
  currentMove++ // each click, currentMove increments 1
  // console.log(typeof event.target.id)
  // const selectedBox = $(event.target).text() // takes index of selected box and writes the content
  // console.log('GB= ' + gameBoard)
  // console.log('box content= ' + selectedBox)
  console.log('target id= ' + event.target.id) // box selected
  console.log('Current player= ' + currentPlayer) // 'M' or 'L'
  console.log('p1 boxes= ' + players[0].boxes) // P1 array of boxes
  console.log('p2 boxes= ' + players[1].boxes) // P2 array of boxes

  // boxesInPlay.push(selectedBox)// box content is pushed to boxesInPlay
  // gameBoard = $('#game').text() // makes gameBoard a variable that takes in content of the jQuery id of 'game' as a string
  // console.log('GB= ' + gameBoard)
}

module.exports = {
  onCreateGame,
  onBoxClick
}
