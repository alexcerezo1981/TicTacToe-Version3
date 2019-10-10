function EndOfGame(pressedKey){
    if(pressedKey === "E" || pressedKey === "e"){
        return true
    }
    else{
        return false
    }
}


function ValidKey(pressedKey,nuBoxes){
    let control = false
    for (let x=1; x<nuBoxes+1; x++){
        if (x.toString()===pressedKey.toString()){
            control = true
            break
        }
    }
    return control
}

function NotInUse(pressedKey,valueOnBoard){
    if (pressedKey.toString()===valueOnBoard)
        return true
    else
        return false  
}

function Winner(activeBoard){

    let Winner_Combination = [       ///All possible combinations to win
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    let x=0

    do{
        if((activeBoard[Winner_Combination [x] [0]] === activeBoard[Winner_Combination [x] [1]]) && (activeBoard[Winner_Combination [x] [1]] === activeBoard[Winner_Combination [x] [2]]))
            return true 
        x=x+1
    }while (x<8)
    return false
}

function Draw(activeBoard){
    let x =0
    do {
        if (activeBoard[x] === x+1){
            return false
        }
        else{
            x++
        }
    }while (x<activeBoard.length)
    return true
}



module.exports.NotInUse=NotInUse;
module.exports.EndOfGame=EndOfGame;
module.exports.ValidKey=ValidKey;
module.exports.Winner=Winner;
module.exports.Draw=Draw;