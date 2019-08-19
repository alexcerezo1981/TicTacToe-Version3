//@format
var expect = require ('chai').expect

const Board = require('../Board');

describe('Board', () => {
  it('makes a new grid', () => {
    let PlayerOne="X"
    let board = new Board(PlayerOne);

    expect(board.grid).to.eql([1,2,3,4,5,6,7,8,9]);
    expect(PlayerOne).to.eql("X")
  });

  it('detects no draw', () => {
    let PlayerOne="X"
    let board = new Board(PlayerOne);
    
    expect(board.isDraw(board.grid)).equal("");
  });

  it('detects draw', () => {
    let PlayerOne="X"
    let board = new Board(PlayerOne);

    board.grid[0] ='X';
    board.grid[1] ='X';
    board.grid[2] ='O';
    board.grid[3] ='O';
    board.grid[4] ='O';
    board.grid[5] ='X';
    board.grid[6] ='X';
    board.grid[7] ='O';
    board.grid[8] ='X';

    expect(board.isDraw(board.grid)).equal("due");
  });
});
