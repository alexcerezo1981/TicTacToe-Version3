
// const Game = require('./Game')
const Board = require('./board');
const Players = require('./Player');
const KeyPressed_Functions = require('./KeyPressed_Functions');
const GameMenu = require('./GameMenu');


function InitialiceTheGame(selectedOption){
    
    if (selectedOption==="1"){
        humanPC = ["Human", "Human"]
    }else if (selectedOption==="2"){
        humanPC = ["Human", "PC"]
    } else{
        humanPC = ["PC", "Human"]
    }
    // Create new Players
    NumberOfPlayers = 2
    NameOfPlayers = ["X", "O"]
    Player = new Players(NumberOfPlayers, NameOfPlayers, humanPC)
    

    // Create a new Board
    NumberOfBoxes = 9
    NewBoard = new Board(NumberOfBoxes)
    Board.DisplayBoard (NewBoard.grid)
    

    // Display the player that Starts the Game
    ActivePlayer=0
    NameActivePlayer = Player.name[ActivePlayer]
    console.log("It's the turn for player " + NameActivePlayer + ".Press one of the numbers avialable (Press 'e' for Exit)")

}

function PlayAllGames(){
    const readline = require('readline');                                                       // Readline lets us tap into the process events
    readline.emitKeypressEvents(process.stdin);                                                 // Allows us to listen for events from stdin
    process.stdin.setRawMode(true);                                                             // Raw mode gets rid of standard keypress events and other functionality Node.js adds by default
    
    gameInit=false                                                                              // Variable to controll if the game was initialize


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

        if (gameInit===true){         

            if (KeyPressed_Functions.EndOfGame(key.sequence)){                                       // Check if player wants to Exit the game
                console.log ("You exited the game")                                   
                process.exit()
            }   
            if (KeyPressed_Functions.ValidKey(key.sequence,NewBoard.N_Boxes)){                      // Check if player pressed an valid key                                                           
                if (KeyPressed_Functions.NotInUse(key.sequence,NewBoard.grid[key.sequence-1].toString())){                     // Check if the box is already in use/////////////
                    NewBoard.grid [key.sequence-1]=NameActivePlayer                                 // Update the board and display it
                    Board.DisplayBoard (NewBoard.grid)

                    if (KeyPressed_Functions.Winner(NewBoard.grid)){                                // Checking if we have a winner
                        console.log ("Player " + NameActivePlayer + " wins the game!!!")
                        process.exit()
                    }else if (KeyPressed_Functions.Draw(NewBoard.grid,NewBoard.N_Boxes)){            // Check if we have a draw game         
                        console.log ("This game ends on draw!")
                        process.exit()
                    } 
                    else{
                        ActivePlayer = Players.UpdatePlayer(ActivePlayer,NumberOfPlayers)           // Change the active player and display it
                        NameActivePlayer = Player.name[ActivePlayer]
                        console.log("It's the turn for player " + NameActivePlayer + ". Press one of the numbers avialable (Press 'e' for Exit)")
                    }                                     


                }else{
                    console.log ("This box is already in use, please select another one")
                }
            }  
            else {
                console.log ("The pressed key is not in the game, please press the number of one of the avialable boxes")     
            }
        }        
        
        if (gameInit===false){
            selectedOption=GameMenu.initialize(key.sequence)
            if (selectedOption==="1" || selectedOption==="2" || selectedOption==="3"){
                gameInit=true
                InitialiceTheGame(selectedOption)
            }
        }
    })
}




PlayAllGames()