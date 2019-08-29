

class Board {
  constructor(NumberOfBoxes) {
    this.N_Boxes = NumberOfBoxes
    this.grid = this.makeGrid(NumberOfBoxes)
  }

  makeGrid(NumberOfBoxes) {
    let grid = new Array(NumberOfBoxes)

    for (let x=1; x<NumberOfBoxes+1; x++)
        grid[x-1]=x
    return grid
  }

//   isDraw(boxes) {
//     for (let x =0;x<9;x++){
//       if (boxes[x]===x+1)
//        return ""
//    }
//    return "due"
//  }

  
}

function DisplayBoard (PrintBoard){
  
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
}


module.exports = Board;
module.exports.DisplayBoard=DisplayBoard;

