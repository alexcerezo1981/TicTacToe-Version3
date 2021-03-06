var expect = require ('chai').expect
const MiniMax = require('../MiniMax');

describe('MiniMax', () => {

    it('Minimax: PC ("X") making the right choice to win Test 1', () => {
      let board=[0,"X",2,"O",4,"X","O","O","X"]
      activeMark ="X"
      miniMaxResult=MiniMax.miniMax(board,activeMark)
      expect(miniMaxResult.index).to.eql(2)
    });

    it('Minimax: PC ("X") making the right choice to win Test 2', () => {

        let board=["X",1,"O",3,"O",5,"X","X","O"]
        activeMark ="X"
        miniMaxResult=MiniMax.miniMax(board,activeMark)
        expect(miniMaxResult.index).to.eql(3)
    });

    it('Minimax: PC ("X") making the right choice to win Test 3', () => {

        let board=["O",1,"X","X","X",5,"O","O",8]
        activeMark ="X"
        miniMaxResult=MiniMax.miniMax(board,activeMark)
        expect(miniMaxResult.index).to.eql(5)
    });

    it('Minimax: PC ("0") making the right choice so Human does NOT win Test 1', () => {

        let board=[0,1,2,"X","X",5,"O",7,8]
        activeMark ="O"
        miniMaxResult=MiniMax.miniMax(board,activeMark)
        expect(miniMaxResult.index).to.eql(5)
    });    

    it('Minimax: PC ("0") making the right choice so Human does NOT win Test 2', () => {

        let board=["X","X",2,3,"O",5,6,7,8]
        activeMark ="O"
        miniMaxResult=MiniMax.miniMax(board,activeMark)
        expect(miniMaxResult.index).to.eql(2)
    });  

    it('Minimax: PC ("0") making the right choice so Human does NOT win Test 3', () => {

        let board=[0,1,2,3,"O",5,6,"X","X"]
        activeMark ="O"
        miniMaxResult=MiniMax.miniMax(board,activeMark)
        expect(miniMaxResult.index).to.eql(6)
    });  


});