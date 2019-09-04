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

    it('Change to the next player when you ARE NOT on the last one', () => {
      let Nplayers=2
      let NameOfPlayers = ["X", "O"]
      let Player = new Players(Nplayers,NameOfPlayers)
  
      expect(Players.UpdatePlayer(0,Nplayers)).to.eql(1)
    
    });

    it('Change to the next player when you ARE on the last one', () => {
      let Nplayers=2
      let NameOfPlayers = ["X", "O"]
      let Player = new Players(Nplayers,NameOfPlayers)
  
      expect(Players.UpdatePlayer(1,Nplayers)).to.eql(0)
    
    });

});