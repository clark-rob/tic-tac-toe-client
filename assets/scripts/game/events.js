'use strict'

// const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onCreateGameClick = event => { // new game on click function
  event.preventDefault() // prevent reload
  // const boxData  // how ever I am going to get the data from the box (event.target)
  /* const data = {
    game: {
      box: {
        index: boxData.cell.index,
        value: boxData.cell.value
      }
    },
    over: false
  }
  api.createGame()
    .then(ui.) // create a board
    .catch(ui.) // fail message */
  // api.createGame() // api file is called
  //   .then(ui.createGameSuccess)
  //   .catch(ui.createGameFailure)
}
/* -------------------------------- */

/* const players = [
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
] */

// .html('<img src="../../public/marioprofile.png">')
// .html('<img src="../../public/luigiprofile.png">')
const playerOne = 'Mario'
const playerTwo = 'Luigi'
let currentPlayer
let currentMove = 0 // move to begin with

// gameBoard:
let startGame = true // is the game done
let startBoard = ['', '', '', '', '', '', '', '', '', '']
// let gameBoard
/* const winningPath = [// each box has content that equals player
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
] */
// const startGame = [] // begin with empty array
// const winCount = []
// $('#' + event.target.id).text() //jquery selector to post div value

// place an X in box once, then change to O once

/* const nextPlayer = function () {
  if (currentMove % 2) { // if current move has a remainder of 2 &
    currentPlayer = playerTwo // set current to P1
    // players[0].boxes.push(event.target.id) // selected box is pushed to P1 box
    // playerOne.move++ // playerOne move increments 1
    // console.log('p1 moves ' + players[0].move)
    return currentPlayer// playerOne is set
  } else { // if current move is not have a remainder of 2
    currentPlayer = playerOne // set player to P2
    // players[1].boxes.push(event.target.id) // selected box is pushed to P2 box
    // playerTwo.move++ // playerTwo move increments 1
    return currentPlayer// playerTwo is set
  }
} */

const nextPlayer = function () {
  if (currentMove % 2) { // if current move has a remainder of 2 &
    currentPlayer = playerTwo // set current to P1
    // players[0].boxes.push(event.target.id) // selected box is pushed to P1 box
    // playerOne.move++ // playerOne move increments 1
    // console.log('p1 moves ' + players[0].move)
    return currentPlayer// playerOne is set
  } else { // if current move is not have a remainder of 2
    currentPlayer = playerOne // set player to P2
    // players[1].boxes.push(event.target.id) // selected box is pushed to P2 box
    // playerTwo.move++ // playerTwo move increments 1
    return currentPlayer// playerTwo is set
  }
}

// event.target gets object
// $('#' + event.target.id) gives you the id of the object targeted
// .val() gets value inside an element
// .off
// .innerHTML
//  0|1|2
//  3|4|5
//  6|7|8

// if box 0 1 2 have content that is X, X wins; if they have O, O wins, else if moves are 9 tie
const gameCheck = function () {
  // const gameCheckWin = $('#result').text('Itsa Me a' + currentPlayer + '!')
  // console.log('div #0 = ' + $('#0').text())
  if (currentMove >= 4) { // if currentMove reaches 4 moves, P1 and P2 moved twice each
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
  console.log(event.target.id)
  console.log($('#' + event.target.id))
  currentMove++ // each click, currentMove increments 1
  console.log('current move= ' + currentMove)
  gameCheck()
  // console.log(typeof event.target.id)
  // const selectedBox = $(event.target).text() // takes index of selected box and writes the content
  // console.log('GB= ' + gameBoard)
  console.log('box content= ' + $(event.target).text())
  console.log('target id= ' + event.target.id) // box selected
  // console.log('p1 boxes= ' + players[0].boxes) // P1 array of boxes
  // console.log('p2 boxes= ' + players[1].boxes) // P2 array of boxes

  // boxesInPlay.push(selectedBox)// box content is pushed to boxesInPlay
  // gameBoard = $('#game').text() // makes gameBoard a variable that takes in content of the jQuery id of 'game' as a string
  // console.log('GB= ' + gameBoard)
}

module.exports = {
  onCreateGameClick,
  onBoxClick
}
