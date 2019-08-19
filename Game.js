//@format


const Messages = require('./Messages')
const NewBoard = require('./board');

class Game {
  constructor(playerOne, playerTwo) {
    this.board = new NewBoard(playerOne);
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.activePlayer = this.playerOne;
  }
   
  playAllTurns() {
    const readline = require('readline');                                                       // Readline lets us tap into the process events
    readline.emitKeypressEvents(process.stdin);                                                 // Allows us to listen for events from stdin
    process.stdin.setRawMode(true);                                                             // Raw mode gets rid of standard keypress events and other functionality Node.js adds by default

    process.stdin.on('keypress', (str, key) => {
      let EndOfGame
      let CorrectKey  
      let message
      let NewMessage
     
      EndOfGame = Messages.UserExit(key.sequence)                                               // If user press E the game ends
      if (EndOfGame===true)
        process.exit();
      else{
        CorrectKey = Messages.CorrectKeyPressed(key.sequence)                                   // Check if the pressed key is one of the avialables on the game
        if (CorrectKey===true){
          if (this.board.grid[key.sequence-1]==="X" || this.board.grid[key.sequence-1]==="O")   // Check if a player is already using that box
            console.log("This box is already in use, please press another one")
          else{
            
            this.board.grid[key.sequence-1]= this.activePlayer                             // Check the box on our array to be able to display it later on
            NewMessage=Messages.Winner(this.board.grid)                                                                                                                                                                            
            if (NewMessage==="Win"){
              message = "Player " + this.activePlayer + " wins the game!!!"
              NewBoard.DisplayBoard(this.board.grid,message)   
              process.exit();
            }else {
              NewMessage=this.isOver() 
              if (NewMessage==="due"){
              message = "This game ends on draw!"
              NewBoard.DisplayBoard(this.board.grid,message)   
              process.exit();
              }else{
                this.alternatePlayer()
                message = "It's the turn for " + this.activePlayer + ". Press one of the numbers avialable (Press 'e' for Exit)"
                NewBoard.DisplayBoard(this.board.grid,message)   
              } 
            }                                  
          }
        }
      }
    })
  }

  alternatePlayer() {
    this.activePlayer == this.playerOne
      ? (this.activePlayer = this.playerTwo)
      : (this.activePlayer = this.playerOne);
  }

  isOver() {
    let x= this.board.isDraw(this.board.grid);
    return x
  }
}




module.exports = Game;









