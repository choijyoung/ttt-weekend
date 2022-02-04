/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/
let isWinner, playerTurn, message, brdArr

// Message to notify whos turn it is.
// We need to know which tile is chosen by which player
// Wait until the turn changes before pressing another tile.
// need to know the value of the tiles
// currentPick: 'tileVal' = when a player clicks the tile
// if a player gets 3 in a row, if needs to display winner

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.getElementById('start-button');
const resetBtn = document.getElementById('reset-button');
const msgEl = document.getElementById('message');
const squares = document.querySelectorAll('.square')
const boardEl = document.querySelector('.board')
/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', function(event) {
	console.log(event.target);
});
resetBtn.addEventListener('click', function(event) {
	console.log(event.target);
});
boardEl.addEventListener('click', function(event) {
	console.log(event.target);
});

/*-------------------------------- Functions --------------------------------*/
init();

function init() {
	playerTurn = 1;
	isWinner = null;
	brdArr = [ null, null, null, null, null, null, null, null, null ];
  render();
}

function render() {
  brdArr.forEach((cell, idx) => {
    let boardLetter
    if (cell === 1) {
      squares[idx].innerText = "O"
    } else if (cell === -1) {
      squares[idx].innerText = "X"
    } else {
      boardLetter = " "
    }
    squares[idx].innerText = boardLetter
  })
}

