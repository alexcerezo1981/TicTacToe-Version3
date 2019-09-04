
class Players {
    constructor(Nplayers, PlayerNames) {
      this.numberOfPlayers = Nplayers
      this.name = PlayerNames      
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