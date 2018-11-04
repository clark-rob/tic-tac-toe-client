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
  console.log(data.user.token)
  store.user = data.user
  $('#message').text('Signed In Successfully')
  $('#username').text(data.user.email)
  $('#message').removeClass()
  $('#message').addClass('success')
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
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess ran. Data is: ', data)
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
