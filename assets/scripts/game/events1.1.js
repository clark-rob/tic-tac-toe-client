'use strict'

// const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

/* --------------vaiables ---------------- */
const playerOne = '<img id="Mario" src="./public/marioprofile.png" />'
const playerTwo = '<img id="Luigi" src="./public/luigiprofile.png" />'
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
    if ($('#0').val() === $('#1').val() && $('#1').val() === $('#2').val() && $('#0').val() !== '' ||
    $('#3').val() === $('#4').val() && $('#4').val() === $('#5').val() && $('#3').val() !== '' ||
    $('#6').val() === $('#7').val() && $('#7').val() === $('#8').val() && $('#6').val() !== '' ||
    $('#0').val() === $('#3').val() && $('#3').val() === $('#6').val() && $('#0').val() !== '' ||
    $('#1').val() === $('#4').val() && $('#4').val() === $('#7').val() && $('#1').val() !== '' ||
    $('#2').val() === $('#5').val() && $('#5').val() === $('#8').val() && $('#2').val() !== '' ||
    $('#0').val() === $('#4').val() && $('#4').val() === $('#8').val() && $('#0').val() !== '' ||
    $('#2').val() === $('#4').val() && $('#4').val() === $('#6').val() && $('#2').val() !== '') {
      $('#result').modal('show')
      $('.current-player').hide()
      $('#phrase').text('A Me, a' + currentPlayer + '!')
      gameOver = true
      $('.current-player').hide()
    } else if (currentMove === 9) {
      $('#result').modal('show')
      $('#phrase').text('...Cat Mario?')
      gameOver = true
      $('.current-player').hide()
    }
  }
}
/* -------------------------------Win/Lose/Tie------------------------------ */

/* --------------------------------onBoxClick------------------------------- */
const onBoxClick = event => {
  /* --------------------Player-Change----------------- */
  const boxIndex = $(event.target.id) // creates variable that is the index of selected box in html
  console.log(event.target.id)
  if (boxIndex !== 'Mario' && boxIndex !== 'Luigi') { // if the selected box does not equal x or o
    // console.log(playerOne)
    console.log($('#0').children())
    console.log($('#1').contents())
    console.log($('#0').children() === $('#1').children())
    if (currentMove % 2 === 0) { // current move has a remainder of 2
      $('.current-player').show().text('LUIGI TIME!') // shows the next player
      currentPlayer = playerOne // make currentPlayer P1
      $(event.target).append(currentPlayer) // insert P1
      startBoard[(event.target.id)] = currentPlayer // inserts P1 at the selected id of the array startBoard
      console.log('current player = ' + event.target)
      // console.log('boxIndex = ' + boxIndex)
      currentMove++ // increase currentMove by 1
    } else { // no remainder
      $('.current-player').show().text('MARIO, LETSA GOOO!')
      currentPlayer = playerTwo // make currentPlayer P2
      $(event.target).append(currentPlayer) // insert current P2
      startBoard[(event.target.id)] = currentPlayer // inserts P2 at the selected id of the array startBoard
      // console.log('current player = ' + currentPlayer)
      // console.log('boxIndex = ' + boxIndex)
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
