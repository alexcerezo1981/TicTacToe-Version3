
// const Game = require('./Game')
const Board = require('./Board');
const Player = require('./Player');
const KeyPressed_Functions = require('./KeyPressed_Functions');
const GameMenu = require('./GameMenu');
const PC = require('./PC');



function InitialiceTheGame(selectedOption){
    
    if (selectedOption==="1"){
        huPC = ["Human", "Human"]
    }else if (selectedOption==="2"){
        huPC = ["Human", "PC"]
    } else{
        huPC = ["PC", "Human"]
    }
    // Create new Players
    nuPlayer = 2
    naPlayer = ["X", "O"]
    newPlayer = new Player(nuPlayer, naPlayer, huPC)
    

    // Create a new Board
    nuBoxes = 9
    newBoard = new Board(nuBoxes)
    Board.DisplayBoard (newBoard.grid)
    

    // Display the player that Starts the Game

    activePlayer=0

    if (newPlayer.humanPC[activePlayer]==="Human"){
        console.log("It's the turn for player " + newPlayer.namePlayers[activePlayer] + ".Press one of the numbers avialable (Press 'e' for Exit)")
    }/*else {
        console.log (newPlayer.humanPC[activePlayer])
        console.log ("PC TURN se sale aqui?")
        PC.miniMax(NewBoard.grid,newPlayer.namePlayers[activePlayer])
        activePlayer=0                  //////////////////////////////////////////bORRAR//////////////////////

    }*/

}

function winnerDraw(activeBoard,actualPlayer){
    
    Board.DisplayBoard (activeBoard)                                                            // Display the new board
    if (KeyPressed_Functions.Winner(activeBoard)){                                              // Checking if we have a winner
        console.log ("Player " + actualPlayer + " wins the game!!!")
        process.exit()
    }
    if (KeyPressed_Functions.Draw(activeBoard)){                                                // Check if we have a draw game         
        console.log ("This game ends on draw!")
        process.exit()
    } 
}

function PlayAllGames(){
    const readline = require('readline');                                                       // Readline lets us tap into the process events
    readline.emitKeypressEvents(process.stdin);                                                 // Allows us to listen for events from stdin
    process.stdin.setRawMode(true);                                                             // Raw mode gets rid of standard keypress events and other functionality Node.js adds by default
    
    firstMenu=true                                                                              // Variable to controll if the game was initialize


    console.clear()                                                                             // Menu to select who is going to play
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
            if (newPlayer.humanPC[activePlayer]==="Human"){
                if (KeyPressed_Functions.EndOfGame(key.sequence)){                                                  // Check if player wants to Exit the game
                    console.log ("You exited the game")                                   
                    process.exit()
                }   
                if (KeyPressed_Functions.ValidKey(key.sequence,newBoard.numberOfBoxes)){                            // Check if player pressed an valid key                                                           
                    if (KeyPressed_Functions.NotInUse(key.sequence,newBoard.grid[key.sequence-1].toString())){      // Check if the box is already in use
                        
                        newBoard.grid [key.sequence-1]=newPlayer.namePlayers[activePlayer]                          // Update the board and display it
                        winnerDraw(newBoard.grid,newPlayer.namePlayers[activePlayer])                               // Check if we have a winner or it's draw
                        activePlayer = Player.UpdatePlayer(activePlayer,newPlayer.numberOfPlayers)                  // Change the active player and display it
 
                        console.log("It's the turn for player " + newPlayer.namePlayers[activePlayer] + ". Press one of the numbers avialable (Press 'e' for Exit)")                                                      
                    }else{
                        console.log ("This box is already in use, please select another one")
                    }
                }  
                else {
                    console.log ("The pressed key is not in the game, please press the number of one of the avialable boxes")     
                }
            }
            if (newPlayer.humanPC[activePlayer]==="PC"){
                
                var layer =0
                var PCplayer=["PC", newPlayer.namePlayers[activePlayer]]
                newBoard.grid [PC.miniMax(newBoard.grid,PCplayer,layer)]=newPlayer.namePlayers[activePlayer]    // Update the board and display it
                winnerDraw(newBoard.grid,newPlayer.namePlayers[activePlayer])                                   // Check if we have a winner or it's draw
                activePlayer = Player.UpdatePlayer(activePlayer,newPlayer.numberOfPlayers)                      // Change the active player and display it

                console.log("It's the turn for player " + newPlayer.namePlayers[activePlayer] + ". Press one of the numbers avialable (Press 'e' for Exit)")
            }
        }        
        
        if (firstMenu===true){
            selectedOption=GameMenu.IntialMenu(key.sequence)
            if (selectedOption==="1" || selectedOption==="2" || selectedOption==="3"){
                firstMenu=false
                InitialiceTheGame(selectedOption)
            }
        }
    })
}




PlayAllGames()

module.exports.winnerDraw=winnerDraw
