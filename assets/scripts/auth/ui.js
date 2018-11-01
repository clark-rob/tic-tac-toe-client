'use strict'

const signUpSuccess = data => {
  $('#message').text('Welcome to the Game!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess ran. Data is: ', data)
}

module.exports = {
  signUpSuccess
}
