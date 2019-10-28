

class Board {
  constructor(nuBoxes) {
    this.numberOfBoxes = nuBoxes
    this.grid = this.makeGrid(nuBoxes)
  }

  makeGrid(nuBoxes) {
    let grid = new Array(nuBoxes)
    for (let x=0; x<nuBoxes; x++)
        grid[x]=x
    return grid
  }
}

function DisplayBoard (newBoard){
  
  console.clear()
  console.log (" ") 
  console.log ("Tic Tac Toe Version 3.0 ") 
  console.log (" ")  
  for (let x=0; x<9;){
    console.log ("-------------")
        console.log ("| " + newBoard[x] + " | " + newBoard[x+1] + " | " + newBoard[x+2] + " | ")
        x=x+3
  }
  console.log ("-------------")
  console.log (" ") 
}

function findEmptySpace (emptyBoxes){

    var withOutX = emptyBoxes.filter(function(value, index, arr){

      return value !=="X" 
    })

    var withOutO = withOutX.filter(function(value, index, arr){

      return value !=="O" 
    })
    return withOutO
  }


module.exports = Board
module.exports.DisplayBoard=DisplayBoard
module.exports.findEmptySpace=findEmptySpace

