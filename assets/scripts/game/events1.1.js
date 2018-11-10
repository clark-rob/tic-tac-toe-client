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
  }*/
  api.createGame()
    /*.then(ui.) // create a board
    .catch(ui.) // fail message */
  // api.createGame() // api file is called
  //   .then(ui.createGameSuccess)
  //   .catch(ui.createGameFailure)
}
/* -------------------------------- */


const playerOne = 'x'
const playerTwo = 'o'
let currentPlayer = playerOne
let currentMove = 0 // move to begin with

// gameBoard:
let gameOver = false // is the game done
let startBoard = $('#game') //.text() // HTML game
startBoard = []

const onNextGame = event => { // beginning status of game
  event.preventDefault()
  console.log('button success')
  if (gameOver === true) {
    $('.box').empty() // clears box of content
    startBoard = []// beginning status of board(empty)
    console.log('begin board =' + startBoard)
    currentPlayer = playerOne // beginning player is playerOne
    console.log('begin player =' + currentPlayer)
    currentMove = 0 // move starts at 0
    console.log('begin move =' + currentMove)
    gameOver = false // starts false, game is not done
    console.log('game done =' + gameOver)
  } else {
  }
}
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

/* --------------------------------onBoxClick------------------------------- */
const onBoxClick = event => {
  event.preventDefault() // prevent page reload
  // console.log('target = ' + event.target)
  // console.log('target id = ' + ('#' + event.target.id))
  /* --------------------Player-Change----------------- */
  const boxIndex = $('#' + event.target.id).html()
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
  console.log('board = ' + startBoard)
  console.log('board length= ' + startBoard.length)
  // console.log('player = ' + $('#' + event.target))
}
/* --------------------------------onBoxClick------------------------------- */

module.exports = {
  onCreateGameClick,
  onBoxClick,
  onNextGame
}
