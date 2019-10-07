const Main = require('./Main');

const Board = require('./board');

function miniMax(newBoard,ActivePlayer){
    const emptyBoxes = Board.findEmptySpace(newBoard)                          // Find the empty boxes

    newBoard [emptyBoxes[0]-1]=ActivePlayer                                // Update the board and display it
    Board.DisplayBoard (newBoard)                                              // Display the new board
    Main.winnerDraw(newBoard,newBoard.length,ActivePlayer)           // Check if we have a winner or it's draw
}




module.exports.miniMax=miniMax