const Main = require('./Main');
const KeyPressed_Functions = require('./KeyPressed_Functions');
const Board = require('./board');


function miniMax(newBoard,player,layer,maximizing){
  
  if (layer===0){
    nodes_map = new Map()
  }

  // Check if we have a winner
  if (KeyPressed_Functions.Winner(newBoard)){
    if (player[0] === "Human"){


      
      console.log (newBoard)
      if (player[0]==="PC"){
        player[0]="Human"
        if (player[1]==="X"){
            player[1]="O"
        }else {
            player[1]="X"
        }
      }else {
        player[0]="PC"
        if (player[1]==="X"){
          player[1]="O"
        }else {
          player[1]="X"
        }
      }


      return 100-layer
    } else if (player[0] === "PC"){



      console.log (newBoard)
      if (player[0]==="PC"){
        player[0]="Human"
        if (player[1]==="X"){
            player[1]="O"
        }else {
            player[1]="X"
        }
      }else {
        player[0]="PC"
        if (player[1]==="X"){
          player[1]="O"
        }else {
          player[1]="X"
        }
      }
      
      return -100+layer
    }



    console.log (newBoard)
    if (player[0]==="PC"){
      player[0]="Human"
      if (player[1]==="X"){
          player[1]="O"
      }else {
          player[1]="X"
      }
    }else {
      player[0]="PC"
      if (player[1]==="X"){
        player[1]="O"
      }else {
        player[1]="X"
      }
    }
    
    
    return 0
  }

  if (maximizing)
  {
    console.log("maximizing")
    console.log("**************")
    console.log("")
    //Initializ best to the lowest possible value
    let best = -100

    //Loop through all empty cells
    var availSpots= Board.findEmptySpace(newBoard)
    for (var i = 0; i < availSpots.length; i++){

        
      //Initialize a new board with the current state (slice() is used to create a new array and not modify the original)
        
      let childBoard=newBoard.slice()
      console.log (newBoard)
        
      //Create a child node by inserting the maximizing symbol x into the current emoty cell
      childBoard[availSpots[i]-1] = player[1]
      console.log (childBoard)
        
      //Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth
      layer++

      if (player[0]==="PC"){
        player[0]="Human"
        if (player[1]==="X"){
            player[1]="O"
        }else {
            player[1]="X"
        }
      }else {
        player[0]="PC"
        if (player[1]==="X"){
          player[1]="O"
        }else {
          player[1]="X"
        }
      }

      let node_value = this.miniMax(childBoard, player, layer, false)
      layer--
      console.log ("node_value: " + node_value)

      //Updating best value
      best = Math.max(best, node_value);
      console.log ("Best " + best)
        

      //If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies
      if(layer === 0) {
        //Comma seperated indicies if multiple moves have the same heuristic value
        
        console.log("node_value " + node_value)
        console.log ("nodes_map ")
        console.log (nodes_map)
          

        var moves
        if(nodes_map.has(node_value)){
          moves =`${nodes_map.get(node_value)},${availSpots[i]}` 
        }else{
          moves =availSpots[i]
        }
        nodes_map.set(node_value, moves);
        console.log ("Last nodes_map ")
        console.log (nodes_map)

      }
    }
    
    //If it's the main call, return the index of the best move or a random index if multiple indicies have the same value
    if(layer === 0) {
      best=nodes_map.get(best)
      console.log ("Value to return of the variable best")
      console.log(best)
      }
      
      //If not main call (recursive) return the heuristic value for next calculation
      return best;
    }

    if(!maximizing)
    {
      console.log("MINImizing")
      console.log("**************")
      console.log("")

    //Initializ best to the lowest possible value
    let best = 100

    //Loop through all empty cells
    var availSpots= Board.findEmptySpace(newBoard)
    for (var i = 0; i < availSpots.length; i++){

        
      //Initialize a new board with the current state (slice() is used to create a new array and not modify the original)
        
      let childBoard=newBoard.slice()
      console.log (newBoard)
        
      //Create a child node by inserting the maximizing symbol x into the current emoty cell
      childBoard[availSpots[i]-1] = player[1]
      console.log (childBoard)
        
      //Recursively calling getBestMove this time with the new board and minimizing turn and incrementing the depth
      layer++

      if (player[0]==="PC"){
        player[0]="Human"
        if (player[1]==="X"){
            player[1]="O"
        }else {
            player[1]="X"
        }
      }else {
        player[0]="PC"
        if (player[1]==="X"){
          player[1]="O"
        }else {
          player[1]="X"
        }
      }

      let node_value = this.miniMax(childBoard, player, layer, true)
      layer--
      console.log ("node_value: " + node_value)

      //Updating best value
      best = Math.min(best, node_value);
      console.log ("Best " + best)
        

      //If it's the main function call, not a recursive one, map each heuristic value with it's moves indicies
      if(layer === 0) {
        //Comma seperated indicies if multiple moves have the same heuristic value
        
        console.log("node_value " + node_value)
        console.log ("nodes_map ")
        console.log (nodes_map)
          

        var moves
        if(nodes_map.has(node_value)){
          moves =`${nodes_map.get(node_value)},${availSpots[i]}` 
        }else{
          moves =availSpots[i]
        }
        nodes_map.set(node_value, moves);
        console.log ("Last nodes_map ")
        console.log (nodes_map)

      }
    }
    
    //If it's the main call, return the index of the best move or a random index if multiple indicies have the same value
    if(layer === 0) {
      best=nodes_map.get(best)
      console.log ("Value to return of the variable best")
      console.log(best)
      }
      
      //If not main call (recursive) return the heuristic value for next calculation
      return best;
    }
  
}

module.exports.miniMax=miniMax