
class Players {
    constructor(Nplayers, PlayerNames, whoPlays) {
      this.numberOfPlayers = Nplayers
      this.name = PlayerNames      
      this.humanPC = whoPlays
    }
}

function UpdatePlayer(ActivePlayer,NumberOfPlayers){
  ActivePlayer=ActivePlayer + 1
  if (ActivePlayer > NumberOfPlayers - 1)
      return 0
  else
      return ActivePlayer  
}

module.exports = Players
module.exports.UpdatePlayer=UpdatePlayer