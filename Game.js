//@format


// const Messages = require('./Messages')
const NewBoard = require('./board');

// var EndOfGame =false

class Game {
  constructor() {
    this.board = new NewBoard();
    // this.playerOne = playerOne;
    // this.playerTwo = playerTwo;
    // this.activePlayer = this.playerOne;
  }
   
  // playAllTurns() {
  //   const readline = require('readline');                                                       // Readline lets us tap into the process events
  //   readline.emitKeypressEvents(process.stdin);                                                 // Allows us to listen for events from stdin
  //   process.stdin.setRawMode(true);                                                             // Raw mode gets rid of standard keypress events and other functionality Node.js adds by default

  //   process.stdin.on('keypress', (str, key) => {
  //     var DisplayMessage = this.ProcessEveryTurn(key.sequence)
  //     NewBoard.DisplayBoard(this.board.grid,DisplayMessage) 
  //     if (EndOfGame===true)
  //       process.exit();    
  //   })
  // }

  // alternatePlayer() {
  //   this.activePlayer == this.playerOne
  //     ? (this.activePlayer = this.playerTwo)
  //     : (this.activePlayer = this.playerOne);
  // }

  // isOver() {
  //   let x= this.board.isDraw(this.board.grid);
  //   return x
  // }

  // ProcessEveryTurn(key){
    
  //   let CorrectKey  
  //   let message
  //   let NewMessage
     
  //   EndOfGame = Messages.UserExit(key)                                               
  //   if (EndOfGame===true){
  //     EndOfGame = true
  //     message = "You exited the game"    
  //     }else{
  //       CorrectKey = Messages.CorrectKeyPressed(key)                                 
  //       if (CorrectKey===true){
  //         if (this.board.grid[key-1]==="X" || this.board.grid[key-1]==="O"){   
  //           message = "It's the turn for " + this.activePlayer + ". Press one of the numbers avialable (Press 'e' for Exit). This box is already in use, please select another one"  
  //         }else{
  //           this.board.grid[key-1]= this.activePlayer                             
  //           NewMessage=Messages.Winner(this.board.grid) 
  //           if (NewMessage==="Win"){
  //             EndOfGame = true
  //             message = "Player " + this.activePlayer + " wins the game!!!"   
  //           }else {
  //             NewMessage=this.isOver() 
  //             if (NewMessage==="due"){
  //               EndOfGame = true 
  //               message = "This game ends on draw!" 
  //             }else{
  //               this.alternatePlayer()
  //               message = "It's the turn for " + this.activePlayer + ". Press one of the numbers avialable (Press 'e' for Exit)" 
  //             } 
  //           }                                  
  //         }
  //       }
  //     else{
  //       message = "The pressed key is not in the game, please press the number of one of the avialable boxes"   
  //     }
  //   }
  //   return message
  // }
}




module.exports = Game;









