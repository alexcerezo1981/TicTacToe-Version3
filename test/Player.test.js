var expect = require ('chai').expect
const Players = require('../Player')

describe('Players', () => {
    it('Create 2 players "X" & "O"', () => {
      let Nplayers=2
      let NameOfPlayers = ["X", "O"]
      let Player = new Players(Nplayers,NameOfPlayers)
  
      expect(Player.numberOfPlayers).to.eql(2)
      expect(Player.name).to.eql(["X", "O"]);
    
    });
});