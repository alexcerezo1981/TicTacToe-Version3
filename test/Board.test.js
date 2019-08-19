//@format
var expect = require ('chai').expect

const Board = require('../Board');

describe('Board', () => {
  it('makes a new grid', () => {
    let PlayerOne="X"
    board = new Board(PlayerOne);

    expect(board.grid).to.eql([1,2,3,4,5,6,7,8,9]);
    expect(PlayerOne).to.eql("X")
  });

  it('sets mark', () => {
    board = new Board();

    board.setMark(1, 'X');

    expect(board.grid[0]).equal('X');
  });

  it('detects no draw', () => {
    board = new Board();

    expect(board.isDraw()).equal(false);
  });

  it('detects draw', () => {
    board = new Board();

    board.setMark(2, 'X');
    board.setMark(3, 'X');
    board.setMark(4, 'X');
    board.setMark(7, 'X');
    board.setMark(9, 'X');
    board.setMark(1, 'O');
    board.setMark(5, 'O');
    board.setMark(6, 'O');
    board.setMark(8, 'O');

    expect(board.isDraw()).equal(true);
  });
});
