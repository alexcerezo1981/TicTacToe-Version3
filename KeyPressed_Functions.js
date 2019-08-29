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

function NotInUse(PressedKey,Board){
    if (Board[PressedKey-1].toString()===PressedKey.toString())
        return true
    else
        return false  
}


module.exports.NotInUse=NotInUse;
module.exports.EndOfGame=EndOfGame;
module.exports.ValidKey=ValidKey;