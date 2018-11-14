'use strict'

// const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

/* --------------vaiables ---------------- */
const playerOne = 'x'
const playerTwo = 'o'
let currentPlayer = playerOne
let currentMove = 0 // move to begin with
// gameBoard:
let gameOver = false // is the game done
let startBoard = $('#game') // .text() // HTML game
startBoard = []
/* --------------vaiables ---------------- */

/* -------------- Create Game ---------------- */
const onCreateGameClick = event => { // new game on click function
  event.preventDefault() // may not need unless its a form
  $('.box').empty() // clears box of content
  startBoard = []// beginning status of board(empty)
  // console.log('begin board =' + startBoard)
  currentPlayer = playerOne // beginning player is playerOne
  // console.log('begin player =' + currentPlayer)
  currentMove = 0 // move starts at 0
  // console.log('begin move =' + currentMove)
  gameOver = false // starts false, game is not done
  // console.log('game done =' + gameOver)
  api.createGame()
    .then(ui.createGameSuccess) // create a board
    .catch(ui.createGameFailure) // fail message
}
/* -------------- Create Game ---------------- */

/* -------------------------------Win/Lose/Tie------------------------------ */
const gameCheck = function () {
  if (currentMove >= 4) { // if currentMove reaches 4 moves, P1 and P2 moved twice each
    if ($('#0').text() === $('#1').text() && $('#1').text() === $('#2').text() && $('#0').text() !== '') { // if the jQuery Id equal to each other you get a winner
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!') // current player is then awarded winner
      gameOver = true
      // $('#result').text('Itsa Me a' + currentPlayer + '!')
      console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#3').text() === $('#4').text() && $('#4').text() === $('#5').text() && $('#3').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      gameOver = true
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#6').text() === $('#7').text() && $('#7').text() === $('#8').text() && $('#6').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      gameOver = true
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#0').text() === $('#3').text() && $('#3').text() === $('#6').text() && $('#0').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      gameOver = true
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#1').text() === $('#4').text() && $('#4').text() === $('#7').text() && $('#1').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      gameOver = true
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#2').text() === $('#5').text() && $('#5').text() === $('#8').text() && $('#2').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      gameOver = true
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#0').text() === $('#4').text() && $('#4').text() === $('#8').text() && $('#0').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      gameOver = true
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if ($('#2').text() === $('#4').text() && $('#4').text() === $('#6').text() && $('#2').text() !== '') {
      $('#result').modal('show')
      $('#phrase').text('Itsa Me, a' + currentPlayer + '!')
      gameOver = true
      // console.log('Itsa Me a' + currentPlayer + '!')
    } else if (currentMove === 9) {
      $('#result').modal('show')
      $('#phrase').text('Itsa Tie!')
      // console.log('Itsa Tie! LETSA GOOOO')
      gameOver = true
    }
    console.log('game over = ' + gameOver)
  }
}
/* -------------------------------Win/Lose/Tie------------------------------ */

/* -------------- Update Game ---------------- */
const updateApi = function (event, currentPlayer, gameOver) {
  event.preventDefault()
  const data = {
    game: {
      cell: {
        index: event.target.id, // gives index value
        value: currentPlayer // player currently
      }
    },
    over: gameOver // instead of false?
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

/* -------------- Update Game ---------------- */

/* --------------------------------onBoxClick------------------------------- */
const onBoxClick = event => {
  event.preventDefault() // prevent page reload
  // console.log('target = ' + event.target)
  // console.log('target id = ' + ('#' + event.target.id))
  /* --------------------Player-Change----------------- */
  const boxIndex = $('#' + event.target.id).html()
  // console.log('#' + event.target.id)
  if (boxIndex !== 'x' && boxIndex !== 'o') { // if the selected box does not equal x or o
    if (currentMove % 2 === 0) { // current move has a remainder of 2
      currentPlayer = playerOne // make currentPlayer P1
      $(event.target).append(currentPlayer) // insert P1
      startBoard[(event.target.id)] = currentPlayer // inserts P1 at the selected id of the array startBoard
      currentMove++ // increase currentMove by 1
      // console.log('move = ' + currentMove)
    } else { // no remainder
      currentPlayer = playerTwo // make currentPlayer P2
      $(event.target).append(currentPlayer) // insert current P2
      startBoard[(event.target.id)] = currentPlayer // inserts P2 at the selected id of the array startBoard
      currentMove++ // increase currentMove by 1
      // console.log('move = ' + currentMove)
    }
  } else {
    // console.log('cant move') // else to continue the 'if boxIndex' statment
  }
  /* ----------------Player-Change------------------- */
  gameCheck()
  updateApi(event, currentPlayer, gameOver)
}
/* --------------------------------onBoxClick------------------------------- */

module.exports = {
  onCreateGameClick,
  onBoxClick,
  updateApi
}
