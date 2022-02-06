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
let isWinner, playerTurn, message, brdArr, winCondition, check1, check2, check3;

/*------------------------ Cached Element References ------------------------*/
const resetBtn = document.getElementById('reset-button');
const msgEl = document.getElementById('message');
let squares = document.querySelectorAll('.square');
let boardEl = document.querySelector('.board');
/*----------------------------- Event Listeners -----------------------------*/
squares.forEach((square) => {
	square.addEventListener('click', handleClick);
});
resetBtn.addEventListener('click', init)
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
		msgEl.innerText = `Player ${isWinner === 1 ? 'o' : 'x'} has won!`;
	}
}

function handleClick(event) {
	let squareIdx = parseInt(event.target.id.replace('sq', ' '));
	if (brdArr[squareIdx] || isWinner) {
		return;
	}
	brdArr[squareIdx] = playerTurn = playerTurn * -1;
	isWinner = getWinner();
	render();
}

function getWinner() {
	// for (i = 0; i < winningCombo.length; i++) {
	// const winCondition = winningCombo[i];
	//   let check1 = brdArr[winCondition[0]]
	//   let check2 = brdArr[winCondition[1]]
	//   let check3 = brdArr[winCondition[2]]
	// }
	// if (check1 === check2 && check2 === check3) {
	//   isWinner = check1;
	//   return;
	// }
	if (Math.abs(brdArr[0] + brdArr[1] + brdArr[2]) === 3) return brdArr[0];
	if (Math.abs(brdArr[3] + brdArr[4] + brdArr[5]) === 3) return brdArr[3];
	if (Math.abs(brdArr[6] + brdArr[7] + brdArr[8]) === 3) return brdArr[6];
	if (Math.abs(brdArr[0] + brdArr[3] + brdArr[6]) === 3) return brdArr[0];
	if (Math.abs(brdArr[1] + brdArr[4] + brdArr[7]) === 3) return brdArr[1];
	if (Math.abs(brdArr[2] + brdArr[5] + brdArr[8]) === 3) return brdArr[2];
	if (Math.abs(brdArr[0] + brdArr[4] + brdArr[8]) === 3) return brdArr[0];
	if (Math.abs(brdArr[2] + brdArr[4] + brdArr[6]) === 3) return brdArr[2];

	if (brdArr.includes(null)) {
		return null;
	} else {
		return 'T';
	}
}
