'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').show().text('Welcome to the Game!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').fadeOut(5000)
}

const signUpFailure = () => { // removed error parameter
  $('#message').show().text('Error on Sign Up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // removed console.error
}

const signInSuccess = data => {
  store.user = data.user
  $('#message').show().text('Welcome Back!')
  $('#username').text(data.user.email) // inserts username
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out').show() // sign out form appear
  $('#change-password').show() // password form appear
  $('#sign-up').hide() // sign up is hidden
  $('#sign-in').hide() // sign in is hidden
  $('.inOrOut').text('Options') // changes button to 'Options'
  $('.create-game').show() // create game button appears on success
  $('#message').fadeOut(5000)
}

const signInFailure = () => { // removed error parameter
  $('#message').show().text('Error on Sign In')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // removed console.error
}

const changePasswordSuccess = data => {
  $('#message').show().text('Successfully Changed Password!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#message').fadeOut(5000)
}

const changePasswordFailure = () => { // removed error parameter
  $('#message').show().text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // removed console.error
}

const signOutSuccess = data => {
  store.user = null
  $('#message').show().text('See You Next Time!')
  $('#username').text('') // removes text for username
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#game').hide() // board hidden
  $('#sign-out').hide() // sign out hidden
  $('#change-password').hide() // password hidden
  $('#sign-up').show() // sign up appears
  $('#sign-in').show() // sign in appears
  $('.inOrOut').text('Sign Up/In') // changes button to 'In'
  $('#game-status').hide()
  $('.create-game').hide() // hide create game button
  $('.past-games').hide() // hide past games
  $('#message').fadeOut(5000)
}

const signOutFailure = () => { // removed error parameter
  $('#message').show().text('Error on Sign Out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  // removed console.error
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
