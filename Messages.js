var Winner_Combination = [       ///All possible combinations to win
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// Player Exit the game pressing "E"

function UserExit(key){

    if(key === "E" || key === "e") {
        console.log ("You exited the game")
        return true
    }else
        return false
  }

function CorrectKeyPressed(key){
    for (let x=1; x<10; x++){
        if (key ===x.toString ())
            return true
    }
    return false
}

function Winner(BoardGame){
    var x=0
    do{
        if((BoardGame[Winner_Combination [x] [0]] === BoardGame[Winner_Combination [x] [1]]) && (BoardGame[Winner_Combination [x] [1]] === BoardGame[Winner_Combination [x] [2]]))
            return "Win" 
        x=x+1
    }while (x<8)
    return ""
}


module.exports.UserExit=UserExit;
module.exports.CorrectKeyPressed=CorrectKeyPressed;
module.exports.Winner=Winner;