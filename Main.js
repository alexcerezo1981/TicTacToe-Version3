
const Board = require('./Board');
const Player = require('./Player');
const KeyPressed_Functions = require('./KeyPressed_Functions');


function InitialiceTheGame(selectedOption){
    
    if (selectedOption==="1"){
        playerX = "Human"
        playerO = "Human"
    }else if (selectedOption==="2"){
        playerX = "Human"
        playerO = "PC"
    } else{
        playerX = "PC"
        playerO = "Human"
    }
 
    newPlayer = new Player(playerX, playerO)
    

    nuBoxes = 9
    newBoard = new Board(nuBoxes)
    Board.DisplayBoard (newBoard.grid)
    
    activePlayer = playerX
    activeMark = "X"
    if (activePlayer==="Human"){
        console.log("It's the turn for player X.Press one of the numbers avialable (Press 'e' for Exit)")
    }
    else {
        var layer=0
        var miniMaxResult = miniMax(newBoard.grid,activeMark,layer)
        markBox(miniMaxResult.index)
    }
}


function PlayAllGames(){
    const readline = require('readline');                                                       
    readline.emitKeypressEvents(process.stdin);                                                 
    process.stdin.setRawMode(true);                                                            
    
                                                                                 

    console.clear()                                                                            
    console.log (" ") 
    console.log ("Tic Tac Toe Version 3.0 ") 
    console.log (" ")  
    console.log ("Please select one of these options: ")
    console.log (" ")
    console.log ("1. Human V Human")  
    console.log ("2. Human (X) V PC (O)")  
    console.log ("3. PC (X) V Human (X)")
    console.log ("4. Exit the game")   
    
    process.stdin.on('keypress', (str, key) => {

        if (firstMenu===false){         
            if (activePlayer==="Human"){
                if (KeyPressed_Functions.EndOfGame(key.sequence)){                                                  
                    console.log ("You exited the game")                                   
                    process.exit()
                }   
                if (KeyPressed_Functions.ValidKey(key.sequence,newBoard.numberOfBoxes)){                                                                                      
                    if (key.sequence.toString()===newBoard.grid[key.sequence].toString()){                          // We check if the selected box is already in use
                        markBox(key.sequence)                                             
                    }else{
                        console.log ("This box is already in use, please select another one")
                    }
                }  
                else {
                    console.log ("The pressed key is not in the game, please press the number of one of the avialable boxes")     
                }
            }

            if (activePlayer==="PC"){
                
                var layer=0
                var miniMaxResult = miniMax(newBoard.grid,activeMark,layer)
                markBox(miniMaxResult.index)
            }
        }        
        
        if (firstMenu===true){
            selectedOption=key.sequence.toString()
            if (selectedOption==="1" || selectedOption==="2" || selectedOption==="3"){
                firstMenu=false
                InitialiceTheGame(selectedOption)
            }
            
            
        }
    })
}

function miniMax(boardmM, activeMarkmM,layer){
    layer++
 
    var availSpots= Board.findEmptySpace(boardmM)

    if (KeyPressed_Functions.Winner(boardmM)){       
        if (activeMarkmM !== activeMark){
            score = 100 - layer
            return {score: score}
        }
        else{
            score = -100 + layer
            return {score: score}
        }

    }else if (availSpots.length ===0){
        return {score: 0}
    }
  
    var moves = []

    for (var i = 0; i< availSpots.length;i++){
        var move ={}
        move.index = boardmM[availSpots[i]]
        boardmM[availSpots[i]] = activeMarkmM
        if (activeMarkmM === "X"){
            var result = miniMax(boardmM,"O",layer)
            move.score = result.score
        }else{
            var result = miniMax(boardmM,"X",layer)
            move.score = result.score
        }
        boardmM[availSpots[i]] = move.index
        moves.push(move)
    }

    var bestMove
    if (activeMarkmM ===activeMark)
    {
        var bestScore = -10000
        for (var i =0; i < moves.length; i++){
            if (moves[i].score > bestScore){
                bestScore = moves[i].score
                bestMove = i
            }
        }
    }else{
        var bestScore = 10000
        for (var i =0; i < moves.length; i++){
            if (moves[i].score < bestScore){
                bestScore = moves[i].score
                bestMove = i
            }
        }
    }
    return moves [bestMove]
      
  }

  function markBox(boxToMark){
    newBoard.grid [boxToMark]=activeMark                                                 
    Board.DisplayBoard (newBoard.grid)                                                            
    if (KeyPressed_Functions.Winner(newBoard.grid)){                                              
        console.log ("Player " + activeMark + " wins the game!!!")
        process.exit()
    }
    if (KeyPressed_Functions.Draw(newBoard.grid)){                                                        
        console.log ("This game ends on draw!")
        process.exit()
            }                                
    if (activeMark === "X"){
        activePlayer = playerO
        activeMark = "O"
    }else{
        activePlayer = playerX
        activeMark = "X"
    } 
    console.log("It's the turn for player " + activeMark + ". Press one of the numbers avialable (Press 'e' for Exit)")  
  }



var firstMenu=true 
PlayAllGames()

