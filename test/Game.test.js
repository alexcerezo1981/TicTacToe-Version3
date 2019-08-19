//@format
var expect = require ('chai').expect

const Game = require('../game');

describe('Game', () => {

  it('Create a new Game', () => {
    
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    expect(game.board.grid).to.eql([1,2,3,4,5,6,7,8,9]);
    expect(game.playerOne).to.eql("X")
    expect(game.playerTwo).to.eql("O")
    expect(game.activePlayer).to.eql("X")
  });


  it('Change Player X to O', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    game.alternatePlayer()

    expect(game.activePlayer).equal(playerTwo);
  });

  it('Change Player O to X', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    game.alternatePlayer()
    game.alternatePlayer()

    expect(game.activePlayer).equal(playerOne);
  });


  it('detects not over', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    expect(game.isOver()).equal("");
  });

  it('detects draw', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    game.board.grid[0] ='X';
    game.board.grid[1] ='X';
    game.board.grid[2] ='O';
    game.board.grid[3] ='O';
    game.board.grid[4] ='O';
    game.board.grid[5] ='X';
    game.board.grid[6] ='X';
    game.board.grid[7] ='O';
    game.board.grid[8] ='X';

    expect(game.isOver()).equal("due");
  });

  it('End of Game with e', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    expect(game.ProcessEveryTurn("e")).equal("You exited the game");
  });

  it('End of Game with E', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    expect(game.ProcessEveryTurn("E")).equal("You exited the game");
  });

  it('Pressed an invalid key', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);

    expect(game.ProcessEveryTurn("p")).equal("The pressed key is not in the game, please press the number of one of the avialable boxes");
  });


  it('Player X pressed a key already in use', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);
    game.ProcessEveryTurn("1")
    game.ProcessEveryTurn("2")  

    expect(game.ProcessEveryTurn("1")).equal("It's the turn for " + game.activePlayer + ". Press one of the numbers avialable (Press 'e' for Exit). This box is already in use, please select another one");
  });

  it('Player O pressed a key already in use', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);
    game.ProcessEveryTurn("1")
    game.ProcessEveryTurn("2")
    game.ProcessEveryTurn("3")

    expect(game.ProcessEveryTurn("2")).equal("It's the turn for " + game.activePlayer + ". Press one of the numbers avialable (Press 'e' for Exit). This box is already in use, please select another one");
  });

  it('Change turn to Y', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);
    
    expect(game.ProcessEveryTurn("1")).equal("It's the turn for " + game.activePlayer + ". Press one of the numbers avialable (Press 'e' for Exit)");
  });

  it('Change turn to X', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo);
    game.ProcessEveryTurn("1")
    
    expect(game.ProcessEveryTurn("2")).equal("It's the turn for " + game.activePlayer + ". Press one of the numbers avialable (Press 'e' for Exit)");
  });

  it('Player X press a key already in use', () => {
    playerOne = "X"
    playerTwo = "O"
    let game = new Game(playerOne, playerTwo)
    game.board.grid[0] ='X';
    game.board.grid[1] ='X';
    game.board.grid[2] ='O';
    game.board.grid[3] ='O';
    game.board.grid[4] ='O';
    game.board.grid[5] ='X';
    game.board.grid[6] ='X';
    game.board.grid[7] ='O';

    expect(game.ProcessEveryTurn("9")).equal("This game ends on draw!");
  });

  const Winner_Combination = [       
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  it ('Check that Player X wins', function(){

    Winner_Combination.forEach(function(element){
      playerOne = "X"
      playerTwo = "O"
      let game = new Game(playerOne, playerTwo)
      game.activePlayer = "X"

      game.board.grid[element[0]] = "X"
      game.board.grid[element[1]] = "X"
      var key =element[2] + 1
      expect(game.ProcessEveryTurn(key.toString())).equal("Player " + game.activePlayer + " wins the game!!!")
    });
  })

  it ('Check that Player Y wins', function(){

    Winner_Combination.forEach(function(element){
      playerOne = "X"
      playerTwo = "O"
      let game = new Game(playerOne, playerTwo)
      game.activePlayer = "Y"

      game.board.grid[element[0]] = "Y"
      game.board.grid[element[1]] = "Y"
      var key =element[2] + 1
      expect(game.ProcessEveryTurn(key.toString())).equal("Player " + game.activePlayer + " wins the game!!!")
    });
  })

});
