/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
const tiles = ['#sq0', '#sq1', '#sq2', '#sq3,', '#sq4', '#sq5', '#sq6', '#sq7', '#sq8']
// Message to notify whos turn it is.
// We need to know which tile is chosen by which player
// Wait until the turn changes before pressing another tile.
// need to know the value of the tiles
// currentPick: 'tileVal' = when a player clicks the tile
// if a player gets 3 in a row, if needs to display winner

/*------------------------ Cached Element References ------------------------*/
// const msg = document.querySelector('#message')
const brd = document.querySelector('.board')



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
