
// const Game = require('./Game')
const Board = require('./board');
const Players = require('./Player');
const KeyPressed_Functions = require('./KeyPressed_Functions');


function InitialiceTheGame(){
    // Create new Players
    NumberOfPlayers = 2
    NameOfPlayers = ["X", "O"]
    Player = new Players(NumberOfPlayers, NameOfPlayers)

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
    
    process.stdin.on('keypress', (str, key) => {
 
        if (KeyPressed_Functions.EndOfGame(key.sequence)){                                       // Check if player wants to Exit the game
            console.log ("You exited the game")                                   
            process.exit()
        }   
        if (KeyPressed_Functions.ValidKey(key.sequence,NewBoard.N_Boxes)){                      // Check if player pressed an invalid key
            NewBoard.grid[0]="X"                         ///////////////////////////////////////////////////////////////    ///////////////////////////////////////////////////////////////
            console.log (NewBoard.grid)                                                             
            if (KeyPressed_Functions.NotInUse(key.sequence,NewBoard.grid)){                     // Check if the box is already in use
                console.log ("Esta Libre")
            }else{
                console.log ("This box is already in use, please select another one")
            }
        }  
        else {
            console.log ("The pressed key is not in the game, please press the number of one of the avialable boxes")     
        }
    })
}



InitialiceTheGame()
PlayAllGames()


//console.log(NameActivePlayer)






// Create a New Game
// const NewGame = new Game("X","O");
//NewGame.playAllTurns()

