/*-------------------------------- Constants --------------------------------*/
// tiles within the tictactoe board.
const tiles = ['#sq0', '#sq1', '#sq2', '#sq3,', '#sq4', '#sq5', '#sq6', '#sq7', '#sq8']
// const players {
//   player1: {
    
//   },
//   player2: {

//   }
// };
/*---------------------------- Variables (state) ----------------------------*/
let isWinner, playerTurn, message

// Message to notify whos turn it is.
// We need to know which tile is chosen by which player
// Wait until the turn changes before pressing another tile.
// need to know the value of the tiles
// currentPick: 'tileVal' = when a player clicks the tile
// if a player gets 3 in a row, if needs to display winner

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.getElementById('start-button')
const resetBtn = document.getElementById('reset-button')
const msgEl = document.getElementById('message')

const topLeft = document.getElementById('sq0')
const topMiddle = document.getElementById('sq1')
const topRight = document.getElementById('sq2')
const middleLeft = document.getElementById('sq3')
const middle = document.getElementById('sq4')
const middleRight = document.getElementById('sq5')
const bottomLeft = document.getElementById('sq6')
const bottomMiddle = document.getElementById('sq7')
const bottomRight = document.getElementById('sq8')


/*----------------------------- Event Listeners -----------------------------*/
document.addEventListener('click', function(event) {
  tiles.event.clickTile()
  console.log(clickTile)
})


/*-------------------------------- Functions --------------------------------*/
// Message to notify whos turn it is.
// We need to know which tile is chosen by which player
// Wait until the turn changes before pressing another tile.
// need to know the value of the tiles
// currentPick: 'tileVal' = when a player clicks the tile
// if a player gets 3 in a row, if needs to display winner
