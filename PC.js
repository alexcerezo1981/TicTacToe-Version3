const Main = require('./Main');
const KeyPressed_Functions = require('./KeyPressed_Functions');

const Board = require('./board');

/*function miniMax(newBoard,player,layer){
    
    var emptyBoxes = Board.findEmptySpace(newBoard)                                           // Find the empty boxes

    if (layer===12){
        process.exit()
    }

    if ((KeyPressed_Functions.Winner(newBoard)) && (player[0] === "Human")){                      // Check if Human Wins
        return {score: -10}
    } else if ((KeyPressed_Functions.Winner(newBoard)) && (player[0] === "PC")){                  // Check if PC Wins
        return {score: 10}
    } else if (emptyBoxes.length === 0){                                                      // Check if game us Draw
        return {score: 0}
    }

    var movesToEvaluete = []

    for (var i =0; i < emptyBoxes.length; i++){
        var movement = {}
        movement.index = emptyBoxes[i]
        newBoard[emptyBoxes[i]-1]= player [1]

        layer = layer + 1
        if (player[0]==="PC"){
            player[0]="Human"
            if (player[1]==="X"){
                player[1]="O"
            }else {
                player[1]="X"
            }
            var result = miniMax(newBoard,player,layer)
            movement.score = result.score
        } else {
            player[0]="PC"
            if (player[1]==="X"){
                player[1]="O"
            }else {
                player[1]="X"
            }
            var result = miniMax(newBoard,player,layer)
            movement.score = result.score
            
        }

        newBoard[emptyBoxes[i]-1] = movement.index
  
        movesToEvaluete.push(movement)
    }

    var bestOption
    if (player[0] === "PC"){
        var bestScore = -10000
        for (var i=0; i < movesToEvaluete.length; i++){
            if (movesToEvaluete[i] > bestScore){
                bestScore = movesToEvaluete[i].score
                console.log ("              bestScore: " + bestScore + " - LAYER: " + layer)
                bestOption=i
                console.log ("                  bestOption: " + bestOption + " - LAYER: " + layer)
            }
        }
    } else {
        var bestScore = 10000
        for (var i=0; i < movesToEvaluete.length; i++){
            if (movesToEvaluete[i] < bestScore){
                bestScore = movesToEvaluete[i].score
                console.log ("              bestScore: " + bestScore + " - LAYER: " + layer)
                bestOption=i
                console.log ("                  bestOption: " + bestOption + " - LAYER: " + layer)
            }
        }

    }
}*/

function miniMax(newBoard,player,layer){

  
    //available spots
    var availSpots = Board.findEmptySpace(newBoard) 

  
    if (layer===12){
        process.exit()
    }
  
    // checks for the terminal states such as win, lose, and tie and returning a value accordingly
    if ((KeyPressed_Functions.Winner(newBoard)) && (player[0] === "Human")){
       return {score:-10}
    }
      else if ((KeyPressed_Functions.Winner(newBoard)) && (player[0] === "PC")){
      return {score:10}
      }
    else if (availSpots.length === 0){
        return {score:0}
    }
  
  // an array to collect all the objects
    var moves = [];
  
    // loop through available spots
    for (var i = 0; i < availSpots.length; i++){
      //create an object for each and store the index of that spot that was stored as a number in the object's index key
      var move = {};
        move.index = newBoard[availSpots[i]-1];
  
      // set the empty spot to the current player
      newBoard[availSpots[i]-1] = player[1];

      layer++
  
      //if collect the score resulted from calling minimax on the opponent of the current player
      if (player[0]==="PC"){
        player[0]="Human"
        if (player[1]==="X"){
            player[1]="O"
        }else {
            player[1]="X"
        }
        var result = miniMax(newBoard,player,layer)
        move.score = result.score;
      }
      else {
        player[0]="PC"
        if (player[1]==="X"){
            player[1]="O"
        }else {
            player[1]="X"
        }
        var result = miniMax(newBoard,player,layer)
        move.score = result.score;
      }

      //reset the spot to empty
      newBoard[availSpots[i]] = move.index;
  
      // push the object to the array
      moves.push(move);
    }
  
  // if it is the computer's turn loop over the moves and choose the move with the highest score
    var bestMove;
    if(player[0]==="PC"){
      var bestScore = -10000;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }else{
  
  // else loop over the moves and choose the move with the lowest score
      var bestScore = 10000;
      for(var i = 0; i < moves.length; i++){
        if(moves[i].score < bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
  
  // return the chosen move (object) from the array to the higher depth
  console.log ("Bestmove: " + bestMove)
  console.log (moves)
    return moves[bestMove];
  }


module.exports.miniMax=miniMax