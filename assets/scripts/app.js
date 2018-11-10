'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

/* --------required files-------- */

const authEvents = require('./auth/events.js')

const gameEvents = require('./game/events1.1.js')

/* ------------------------- */

$(() => {
  /* -----------------Auth Events----------------- */
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  /* -----------------Auth Events----------------- */
  /* ------------------Game Events------------------------ */
  $('#create-game').on('click', gameEvents.onCreateGameClick)
  $('#game').on('click', gameEvents.onBoxClick) // when the game board is clicked
  /* ------------------Game Events------------------------ */
})
