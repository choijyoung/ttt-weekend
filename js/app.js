/*-------------------------------- Constants --------------------------------*/
const winningCombo = [
	[ 0, 1, 2 ],
	[ 3, 4, 5 ],
	[ 6, 7, 8 ],
	[ 0, 3, 6 ],
	[ 1, 4, 7 ],
	[ 2, 5, 8 ],
	[ 0, 4, 8 ],
	[ 2, 4, 6 ]
];
/*---------------------------- Variables (state) ----------------------------*/
let isWinner, playerTurn, message, brdArr;

/*------------------------ Cached Element References ------------------------*/
const startBtn = document.getElementById('start-button');
const resetBtn = document.getElementById('reset-button');
const msgEl = document.getElementById('message');
let squares = document.querySelectorAll('.square');
let boardEl = document.querySelector('.board');
/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {
	square.addEventListener('click', handleClick);
});
resetBtn.addEventListener('click', init);
/*-------------------------------- Functions --------------------------------*/
init();

function init() {
	brdArr = [ null, null, null, null, null, null, null, null, null ];
	playerTurn = 1;
	isWinner = null;
	render();
}

function render() {
	brdArr.forEach((cell, idx) => {
		let boardLetter;
		if (cell === 1) {
			boardLetter = 'O';
		} else if (cell === -1) {
			boardLetter = 'X';
		} else if (cell === null) {
			boardLetter = ' ';
		}
		squares[idx].innerText = boardLetter;
	});
	if (!isWinner) {
		msgEl.innerText = `It is player ${playerTurn === 1 ? 'x' : 'o'}'s turn`;
	} else if (isWinner === 'T') {
		msgEl.innerText = `It is a tie!`;
	} else {
		msgEl.innerText = `Player ${isWinner === 1 ? 'x' : 'o'} has won!`;
	}
}

function handleClick(event) {
	let squareIdx = parseInt(event.target.id.replace('sq', ' '));
	if (brdArr[squareIdx] || isWinner) {
		return;
	}
	brdArr[squareIdx] = playerTurn = playerTurn * -1;
	render();
  getWinner()
}

function getWinner() {
	if (Math.abs(squares[0] + squares[1] + squares[2] === 3)) {
		return squares[0];
	}
	if (Math.abs(squares[3] + squares[4] + squares[5] === 3)) {
		return squares[3];
	}
	if (Math.abs(squares[6] + squares[7] + squares[8] === 3)) {
		return squares[6];
	}
	if (Math.abs(squares[0] + squares[3] + squares[6] === 3)) {
		return squares[0];
	}
	if (Math.abs(squares[1] + squares[4] + squares[7] === 3)) {
		return squares[1];
	}
	if (Math.abs(squares[2] + squares[5] + squares[8] === 3)) {
		return squares[2];
	}
	if (Math.abs(squares[0] + squares[4] + squares[8] === 3)) {
		return squares[0];
	}
	if (Math.abs(squares[2] + squares[4] + squares[6] === 3)) {
		return squares[2];
	}
	if (brdArr !== null) {
		return 'T';
	} else {
		return null;
	}
  render();
}
