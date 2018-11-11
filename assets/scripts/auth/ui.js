'use strict'
const store = require('../store.js')

const signUpSuccess = data => {
  $('#message').text('Welcome to the Game!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is: ', data)
}

const signUpFailure = error => {
  $('#message').text('Error on Sign Up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signUpFailure ran. Error is :', error)
}

const signInSuccess = data => {
  console.log(data.user)
  store.user = data.user
  $('#message').text('Signed In Successfully')
  $('#username').text(data.user.email) // inserts username
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#sign-out').show() // sign out form appear
  $('#change-password').show() // password form appear
  $('#sign-up').hide() // sign up is hidden
  $('#sign-in').hide() // sign in is hidden
  $('.inOrOut').text('Out') // changes button to 'Out'
  console.log('signInSuccess ran. Data is: ', data)
}

const signInFailure = error => {
  $('#message').text('Error on Sign In')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signInFailure ran. Error is :', error)
}

const changePasswordSuccess = data => {
  $('#message').text('Password changed successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('changePasswordSuccess ran. Data is :', data)
}

const changePasswordFailure = error => {
  $('#message').text('Error on password change')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = data => {
  store.user = null
  $('#message').text('Signed Out Successfully')
  $('#username').text('') // removes text for username
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is: ', data)
  $('#sign-out').hide() // sign out hidden
  $('#change-password').hide() // password hidden
  $('#sign-up').show() // sign up appears
  $('#sign-in').show() // sign in appears
  $('.inOrOut').text('In') // changes button to 'In'
}

const signOutFailure = error => {
  $('#message').text('Error on Sign Out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('signOutFailure ran. Error is :', error)
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
