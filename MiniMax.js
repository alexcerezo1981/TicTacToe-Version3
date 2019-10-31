const Board = require('./Board');
const KeyPressed_Functions = require('./KeyPressed_Functions');

function miniMax(boardmM, activePlayerOnGame, activeMarkmM,layer){
    layer++
    activeMark
    var availSpots= Board.findEmptySpace(boardmM)

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
        if (activeMarkmM === "X"){
            var result = miniMax(boardmM,activePlayerOnGame,"O",layer)
            move.score = result.score
        }else{
            var result = miniMax(boardmM,activePlayerOnGame,"X",layer)
            move.score = result.score
        }
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