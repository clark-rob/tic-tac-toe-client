'use strict'

// const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

/* --------------vaiables ---------------- */
const playerOne = 'Mario'
const playerTwo = 'Luigi'
let currentPlayer = playerOne
let currentMove = 0 // move to begin with
// gameBoard:
let gameOver = false // is the game done
let startBoard = $('#game') // .text() // HTML game
startBoard = []
/* --------------vaiables ---------------- */

/* -------------- Create Game ---------------- */
const onCreateGameClick = event => { // new game on click function
  $('.box').empty() // clears box of content
  startBoard = []// beginning status of board(empty)
  currentPlayer = playerOne // beginning player is playerOne
  // $('.current-player').show(currentPlayer)
  currentMove = 0 // move starts at 0
  gameOver = false // starts false, game is not done
  $('.current-player').show().text('MARIO, LETSA GOOO!')
  api.createGame()
    .then(ui.createGameSuccess) // create a board
    .catch(ui.createGameFailure) // fail message
  api.getPastGames()
    .then(ui.getPastGamesSuccess)
    .catch(ui.getPastGamesFailure)
}
/* -------------- Create Game ---------------- */

/* -------------------------------Win/Lose/Tie------------------------------ */
const gameCheck = function () {
  if (currentMove >= 4) { // if currentMove reaches 4 moves, P1 and P2 moved twice each
    if ($('#0').text() === $('#1').text() && $('#1').text() === $('#2').text() && $('#0').text() !== '' ||
    $('#3').text() === $('#4').text() && $('#4').text() === $('#5').text() && $('#3').text() !== '' ||
    $('#6').text() === $('#7').text() && $('#7').text() === $('#8').text() && $('#6').text() !== '' ||
    $('#0').text() === $('#3').text() && $('#3').text() === $('#6').text() && $('#0').text() !== '' ||
    $('#1').text() === $('#4').text() && $('#4').text() === $('#7').text() && $('#1').text() !== '' ||
    $('#2').text() === $('#5').text() && $('#5').text() === $('#8').text() && $('#2').text() !== '' ||
    $('#0').text() === $('#4').text() && $('#4').text() === $('#8').text() && $('#0').text() !== '' ||
    $('#2').text() === $('#4').text() && $('#4').text() === $('#6').text() && $('#2').text() !== '') {
      $('#result').modal('show')
      $('.current-player').hide()
      $('#phrase').text('A Me, a' + currentPlayer + '!')
      gameOver = true
      $('.current-player').hide()
    } else if (currentMove === 9) {
      $('#result').modal('show')
      $('#phrase').text('Itsa Tie!')
      gameOver = true
      $('.current-player').hide()
    }
  }
}
/* -------------------------------Win/Lose/Tie------------------------------ */

/* --------------------------------onBoxClick------------------------------- */
const onBoxClick = event => {
  /* --------------------Player-Change----------------- */
  const boxIndex = $('#' + event.target.id).html() // creates variable that is the index of selected box in html
  if (boxIndex !== 'Mario' && boxIndex !== 'Luigi') { // if the selected box does not equal x or o
    if (currentMove % 2 === 0) { // current move has a remainder of 2
      $('.current-player').show().text('LUIGI TIME!') // shows the next player
      currentPlayer = playerOne // make currentPlayer P1
      $(event.target).append(currentPlayer) // insert P1
      startBoard[(event.target.id)] = currentPlayer // inserts P1 at the selected id of the array startBoard
      currentMove++ // increase currentMove by 1
    } else { // no remainder
      $('.current-player').show().text('MARIO, LETSA GOOO!')
      currentPlayer = playerTwo // make currentPlayer P2
      $(event.target).append(currentPlayer) // insert current P2
      startBoard[(event.target.id)] = currentPlayer // inserts P2 at the selected id of the array startBoard
      currentMove++ // increase currentMove by 1
    }
  } else {
  }
  /* ----------------Player-Change------------------- */
  gameCheck()
  /* ----------------API------------------------- */
  const data = {
    game: {
      cell: {
        index: event.target.id, // gives index value
        value: currentPlayer // player currently
      },
      over: gameOver // instead of false?
    }
  }
  api.updateGame(data)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
  /* ----------------API------------------------- */
}
/* --------------------------------onBoxClick------------------------------- */

module.exports = {
  onCreateGameClick,
  onBoxClick
}
