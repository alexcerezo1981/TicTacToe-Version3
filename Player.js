
class Players {
    constructor(nuplayer, naPlayer, huPC) {
      this.numberOfPlayers = nuplayer
      this.namePlayers = naPlayer      
      this.humanPC = huPC
    }
}

function UpdatePlayer(activePlayer,nuPlayers){
  
  activePlayer=activePlayer + 1
  if (activePlayer > nuPlayers - 1)
      return 0
  else
      return activePlayer  
}

module.exports = Players
module.exports.UpdatePlayer=UpdatePlayer