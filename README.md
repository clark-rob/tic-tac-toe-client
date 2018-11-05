**Tic-Tac_A_TOE**

## Super Tic-Tac Bros.
The game; Tic-Tac-Toe. The players; Mario (you) and Luigi (taller version of you wearing green).
Determine who is the better sibling as you face off on a grid of choice.

## Game
- New user creates an account to store their game data
- Create a 3x3 gameboard
- Two players, or solo player versus self. Battle of Wits.
- Player One, 'Mario', and Player Two, 'Luigi'

## Rules
- Player One, 'Mario', selects first box and places name. Player Two,
'Luigi', selects next box and places name.
- Alternate between players until winning combination is made or all
boxes (9) are filled leading to a tie game.
- 'Results' pop-up window will deliver winner of game to user(s)
- Winning combinations consist of 8 different possibilities:

```
            Rows:         [0, 1, 2],
                          [3, 4, 5],
0|1|2                     [6, 7, 8],
3|4|5       Columns:      [0, 3, 6],
6|7|8                     [1, 4, 7],
                          [2, 5, 8],
            Diagonals:    [0, 4, 8],
                          [2, 4, 6]
```

## Repository URL


## Idea Behind the Game (Planning)
- Tic-Tac-Toe is a game, typically, between two players, an 'X' and
  an 'O'. In the beginning, those two letters were too common for me
  to use. So when building the wireframe, the question became "what is
  the theme of this board?"

  The wireframe, as shown later, had the board as the main focus. The typical
  header with game name, and a box on the right of the screen that contained
  the players 'username', 'High Score' and 'Win Streak.' Then the
  authorization needs, such as 'Sign up' and 'Sign Out,' were tucked in the
  top right corner. The idea of a customizable board also became a thought in
  which a drop down menu with background colors and letter styles would be
  chosen by the user. Given it is a new user account and they hold the power
  of their board, this feature seemed like a nice addtion.

  As ideas kept flowing, the thought of the authorization needs being a pop-up
  once the page is loaded became an option to make the main page look less
  cluttered. The scaling of display when the window is shrunk or expanded were
  also taken into account. Including the header being shrunk and the name
  being shortened to just initials, 'TTT.'

  Now what my board theme became is thanks to my fiancee. She recommended a
  Mario Kart theme, and I chose a simple Mario and Luigi. Brother battle in
  TicTacToe. Instead of an 'X' and 'O' it would be 'M' and 'L.' My design was
  to use Mario themes throughout the window page to grab the attention of the
  users playing the game.

  My initial start in building the foundation was to create the HTML for the
  game board using `divs`, `class='box'` and `id` that equal the index of each
  box. The title, Super Tic Tac Bros., would be placed in a header and a
  couple buttons and inputs for the authorization requirements. The CSS would
  then be added to give the eye appeal of a Mario world. Instead of letters,
  Mario and Luigi icons would be used to mark each spot on the board. Then the
  JavaScript and jQuery would be the last addition. With all the JS
  (JavaScript) being split between specified files that all linked together.

  The process became a bit more complex and certain features had to be cut to
  reach barebone, workable status. The product shown is a fully functional
  game, with a lot more work to be fully completed. The board works on a click function that creates the player names on the game board. When a winning path is selected by a player, a prompt will appear declaring the winner. 'Sign Up', 'Sign In', 'Changing Password' and 'Sign Out' all work, but have minor bugs.

  The work for this first project so far was intuitive, fun and intimidating.
  You don't realize how many different variables, functions and combinations
  of both there are until fully invested in creating a work of your own.

  One realization that was discovered in the ladder stages of this project, is
  that asking for assistance or just trying to get a lead in the right
  direction is beneficial for everyone. Going forward, asking for help is
  going to be the biggest key to get this project, and many others, to the
  point where they will be great.


## Future Fixes
- Fix one click feature on board
- On win or tie, New Game button clears board, player move count and saves
game outcome
- MAKE WORK DRY!!!!!
- Imporve CSS
- Instead of player names, Images of each player would appear as tokens on the
board
- Sign up window only appears to new users
- In authorization, remove written content in input boxes after submitted
- Save game logic created to store inprogress games

## Wireframe
image = ![wireframe](https://imgur.com/lOZC525)

## User Stories
1) Game player must be prompted with 'Sign Up' to be able to play game
2) Game player must be able to alternate between 'Mario' and 'Luigi' to be
  able to reach a game result
3) Game player must be visually told the outcome of the game to be able t
  continue
4) Game player must be able to create a new game without reloading the browser to be able to hold win/tie data
5) Game player must be able to Log in using credentials
6) Collabrative developers must be able to read code to be able to fix any errors that may occur

## Resources
  This game was built using the assistance of Google search engine. It helped
  me find sites such as:
    [https://developer.mozilla.org/en-US/]
    [https://www.w3schools.com/]
    [https://stackoverflow.com/]

  *Majority of all my questions, led me to these sites.

  Other problems were assisted by fellow colleagues in GA WDI PVD-04
    -Thank you all for the help. I will have more problems in the future
    that I'll be able to use your help with.
