const Main = require('./Main');
const KeyPressed_Functions = require('./KeyPressed_Functions');

const Board = require('./board');

function miniMax(newBoard,player,layer){
    
    var emptyBoxes = Board.findEmptySpace(newBoard)                                           // Find the empty boxes
    console.log ("Empty Boxes: " + emptyBoxes + " - LAYER: " + layer)
    console.log (" player: " + player + " - LAYER: " + layer)

    console.log ("  Winner: " + (KeyPressed_Functions.Winner(newBoard) + " - player[0]: " + player[0]))

    if (layer===12){
        process.exit()
    }

    if ((KeyPressed_Functions.Winner(newBoard)) && (player[0] === "Human")){                      // Check if Human Wins
        console.log ("   Winner: Human - LAYER: " + layer)
        console.log ("")
        console.log ("")
        console.log ("")
        return -10
    } else if ((KeyPressed_Functions.Winner(newBoard)) && (player[0] === "PC")){                  // Check if PC Wins
        console.log ("   Winner: PC - LAYER: " + layer)
        console.log ("")
        console.log ("")
        console.log ("")
        return 10
    } else if (emptyBoxes.length === 0){                                                      // Check if game us Draw
        console.log ("   Empatados - LAYER: " + layer)
        console.log ("")
        console.log ("")
        console.log ("")
        return 0
    }

    var movesToEvaluete = []
    console.log ("   movesToEvaluete: " + movesToEvaluete + " - LAYER: " + layer)

    for (var i =0; i < emptyBoxes.length; i++){
        var movement = {}
        console.log ("    movement: " + movement + " - LAYER: " + layer)
        movement.index = newBoard[emptyBoxes[i]-1]
        console.log ("     movement.index: " + movement.index + " - LAYER: " + layer)
        newBoard[emptyBoxes[i]-1]= player [1]
        console.log ("      newBoard[emptyBoxes[i]]: " + newBoard[emptyBoxes[i]-1] + " - LAYER: " + layer)
        console.log ("")
        console.log (newBoard)

        layer = layer + 1
        if (player[0]==="PC"){
            player[0]="Human"
            if (player[1]==="X"){
                player[1]="O"
            }else {
                player[1]="X"
            }
            var result = miniMax(newBoard,player,layer)
            console.log ("       result: " + result + " - LAYER: " + layer)
            movement.score = result
            console.log ("        movement.score: " + movement.score + " - LAYER: " + layer)
        } else {
            player[0]="PC"
            if (player[1]==="X"){
                player[1]="O"
            }else {
                player[1]="X"
            }
            var result = miniMax(newBoard,player,layer)
            console.log ("       result: " + result + " - LAYER: " + layer)
            movement.score = result
            console.log ("        movement.score: " + movement.score + " - LAYER: " + layer)
        }

        newBoard[emptyBoxes[i]-1] = movement.index
        console.log ("         newBoard[emptyBoxes[i]]: " + newBoard[emptyBoxes[i]-1] + " - LAYER: " + layer)

        console.log ("                                   movement: " + movement + " - LAYER: " + layer)
        movesToEvaluete.push(movement.index)
        console.log ("          movesToEvaluete: " + movesToEvaluete + " - LAYER: " + layer)

    }

    var bestOption
    if (player[0] === "PC"){
        var bestScore = -10000
        for (var i=0; i < movesToEvaluete.length; i++){
            if (movesToEvaluete[i] > bestScore){
                bestScore = movesToEvaluete[i].score
                console.log ("              bestScore: " + bestScore + " - LAYER: " + layer)
                bestOption=i
                console.log ("                  bestOption: " + bestOption + " - LAYER: " + layer)
            }
        }
    } else {
        var bestScore = 10000
        for (var i=0; i < movesToEvaluete.length; i++){
            if (movesToEvaluete[i] < bestScore){
                bestScore = movesToEvaluete[i].score
                console.log ("              bestScore: " + bestScore + " - LAYER: " + layer)
                bestOption=i
                console.log ("                  bestOption: " + bestOption + " - LAYER: " + layer)
            }
        }

    }
}




module.exports.miniMax=miniMax