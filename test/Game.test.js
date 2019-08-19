//@format
var expect = require ('chai').expect

const Game = require('../game');
const Player = require('../player');

describe('Game', () => {
  it('detects not over', () => {
    game = new Game();

    expect(game.isOver()).equal(false);
  });

  it('detects draw', () => {
    playerOne = new Player([2, 3, 4, 7, 9], 'X');
    playerTwo = new Player([1, 5, 6, 8], 'O');
    game = new Game(playerOne, playerTwo);

    game.playAllTurns();

    expect(game.isOver()).equal(true);
  });

  it('alternates players', () => {
    playerOne = new Player([], 'X');
    playerTwo = new Player([], 'O');
    game = new Game(playerOne, playerTwo);

    game.alternatePlayer();

    expect(game.activePlayer).equal(playerTwo);
  });

  it('alternates players again', () => {
    playerOne = new Player([], 'X');
    playerTwo = new Player([], 'O');
    game = new Game(playerOne, playerTwo);

    game.alternatePlayer();
    game.alternatePlayer();

    expect(game.activePlayer).equal(playerOne);
  });
});
