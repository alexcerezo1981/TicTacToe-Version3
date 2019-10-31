
var expect = require ('chai').expect
const Board = require('../Board')

describe('Board', () => {
  it('Initialice a Board with 9 boxes for Tic Tac Toe', () => {
    let NumberOfBoxes=9
    let board = new Board(NumberOfBoxes);

    expect(board.grid).to.eql([0,1,2,3,4,5,6,7,8]);
    expect(board.numberOfBoxes).to.eql(9);
  
  });

});
