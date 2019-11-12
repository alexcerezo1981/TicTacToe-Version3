const Board = require('./Board');
const KeyPressed_Functions = require('./KeyPressed_Functions');

function miniMax(boardmM, activePlayerOnGame){
    layer = 0
    return innerMiniMax(boardmM, activePlayerOnGame,layer)
}

function innerMiniMax(boardmM, activePlayerOnGame,layer){

    layer++
    var availSpots= Board.findEmptySpace(boardmM)
    availSpots.length % 2 === 0 ? activeMarkmM = "O" : activeMarkmM = "X"
 
    if (KeyPressed_Functions.Winner(boardmM)){       
        if (activeMarkmM !== activePlayerOnGame){
            score = 100 - layer
            return {score: score}
        }
        else{
            score = -100 + layer
            return {score: score}
        }

    }else if (availSpots.length ===0){
        return {score: 0}
    }
    
    var moves = []    
    for (var i = 0; i< availSpots.length;i++){
         var move ={}
        move.index = boardmM[availSpots[i]]
        boardmM[availSpots[i]] = activeMarkmM
        var result = innerMiniMax(boardmM,activePlayerOnGame, layer)
        availSpots.length % 2 === 0 ? activeMarkmM = "O" : activeMarkmM = "X"
        move.score = result.score
        boardmM[availSpots[i]] = move.index
        moves.push(move)
    }

    var bestMove
    if (activeMarkmM ===activePlayerOnGame)
    {
        var bestScore = -10000
        for (var i =0; i < moves.length; i++){
            if (moves[i].score > bestScore){
                bestScore = moves[i].score
                bestMove = i
            }
        }
    }else{
        var bestScore = 10000
        for (var i =0; i < moves.length; i++){
            if (moves[i].score < bestScore){
                bestScore = moves[i].score
                bestMove = i
            }
        }
    }
    return moves [bestMove]
      
  }




module.exports.miniMax=miniMax