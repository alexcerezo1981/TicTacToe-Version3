//@format

class Board {
  constructor(playerOne) {
    let message ="It's the turn for " + playerOne + ". Press one of the numbers avialable (Press 'e' for Exit)"
    this.grid = this.makeGrid();
    DisplayBoard(this.grid, message)
  }

  makeGrid() {
    let grid = new Array(9);
    for (let x=1; x<10; x++){
      grid[x-1]=x
      }
    return grid
  }

  isDraw(boxes) {
    for (let x =0;x<9;x++){
      if (boxes[x]===x+1)
        return ""
    }
    return "due"
  }

  
}

function DisplayBoard (PrintBoard, message){
  console.clear()
  console.log (" ") 
  console.log ("Tic Tac Toe Version 3.0 ") 
  console.log (" ")  
  for (let x=0; x<9;){
    console.log ("-------------")
        console.log ("| " + PrintBoard[x] + " | " + PrintBoard[x+1] + " | " + PrintBoard[x+2] + " | ")
        x=x+3
  }
  console.log ("-------------")
  console.log (" ") 
  console.log (message)
  console.log (" ") 
}


module.exports = Board;
module.exports.DisplayBoard=DisplayBoard;

