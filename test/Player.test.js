var expect = require ('chai').expect
const Players = require('../Player')

describe('Players', () => {

    it('Create 2 human players "X" & "O"', () => {
      let Nplayers=2
      let NameOfPlayers = ["X", "O"]
      whoPlays = ["Human", "Human"]
      let Player = new Players(Nplayers,NameOfPlayers, whoPlays)
  
      expect(Player.numberOfPlayers).to.eql(2)
      expect(Player.name).to.eql(["X", "O"]);
      expect(Player.humanPC).to.eql(["Human", "Human"]);
    
    });

    it('Create human player with "X" & PC player with "O"', () => {
      let Nplayers=2
      let NameOfPlayers = ["X", "O"]
      whoPlays = ["Human", "PC"]
      let Player = new Players(Nplayers,NameOfPlayers, whoPlays)
  
      expect(Player.numberOfPlayers).to.eql(2)
      expect(Player.name).to.eql(["X", "O"]);
      expect(Player.humanPC).to.eql(["Human", "PC"]);
    
    });

    it('Create human player with "O" & PC player with "X"', () => {
      let Nplayers=2
      let NameOfPlayers = ["X", "O"]
      whoPlays = ["PC", "Human"]
      let Player = new Players(Nplayers,NameOfPlayers, whoPlays)
  
      expect(Player.numberOfPlayers).to.eql(2)
      expect(Player.name).to.eql(["X", "O"]);
      expect(Player.humanPC).to.eql(["PC", "Human"]);
    
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