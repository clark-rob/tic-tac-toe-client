'use strict'

let playerOne = 'X' // player one's letter
let playerTwo = 'O' // player two's letter


const placeX = event => {
  event.preventDefault() // prevents reload of page
  // if a box is empty
  console.log('x')
}
// player can place the letter X in empty box

module.exports = {
  placeX
}
