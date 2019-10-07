function EndOfGame(PressedKey){
    if(PressedKey === "E" || PressedKey === "e"){
        return true
    }
    else
        return false

}


function ValidKey(PressedKey,NumberOfBoxes){
    let control = false
    for (let x=1; x<NumberOfBoxes+1; x++){
        if (x.toString()===PressedKey.toString()){
            control = true
            break
        }
    }
    return control
}

function NotInUse(PressedKey,valueOnBoard){
    if (PressedKey.toString()===valueOnBoard)
        return true
    else
        return false  
}

function Winner(Board){

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
        if((Board[Winner_Combination [x] [0]] === Board[Winner_Combination [x] [1]]) && (Board[Winner_Combination [x] [1]] === Board[Winner_Combination [x] [2]]))
            return true 
        x=x+1
    }while (x<8)
    return false
}

function Draw(Board,N_Boxes){
    let x =0
    do {
        if (Board[x] === x+1){
            return false
        }
        else{
            x++
        }
    }while (x<N_Boxes)
    return true
}



module.exports.NotInUse=NotInUse;
module.exports.EndOfGame=EndOfGame;
module.exports.ValidKey=ValidKey;
module.exports.Winner=Winner;
module.exports.Draw=Draw;