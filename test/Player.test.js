var expect = require ('chai').expect
const Players = require('../Player')

describe('Players', () => {

    it('Create 2 players', () => {
      let playerX="X"
      let playerO="O"
      let Player = new Players(playerX,playerO)
  
      expect(Player.player1).to.eql("X")
      expect(Player.player2).to.eql("O");
    
    });

});