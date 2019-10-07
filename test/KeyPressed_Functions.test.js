var expect = require ('chai').expect
const EndGameFunctions = require('../KeyPressed_Functions')

describe('EndGameFunctions', () => {

    it('Player wants to EXIT the game', () => {
      let PressedKey1="e"
      let PressedKey2="E"
      let CheckEnd = EndGameFunctions.EndOfGame(PressedKey1) 
      expect(CheckEnd).to.eql(true)
      CheckEnd = EndGameFunctions.EndOfGame(PressedKey2)
      expect(CheckEnd).to.eql(true)    
    });

    it('Player wants to CONTINUE the game', () => {
      let PressedKey1="t"
      let CheckEnd = EndGameFunctions.EndOfGame(PressedKey1)
      expect(CheckEnd).to.eql(false)   
    });

    it('Player pressed a key IN game', () => {
      let PressedKey= 1
      let NumberOfBoxes = 9
      let InGame = EndGameFunctions.ValidKey(PressedKey,NumberOfBoxes)
      expect(InGame).to.eql(true)   
    });

    it('Player pressed a key NOT IN game', () => {
      let PressedKey= "t"
      let NumberOfBoxes = 9
      let InGame = EndGameFunctions.ValidKey(PressedKey,NumberOfBoxes)
      expect(InGame).to.eql(false)   
    });

    it('Player selected a Box ALREADY in use', () => {
      let PressedKey= "1"
      let CellSelected = "X"
      let InUse = EndGameFunctions.NotInUse(PressedKey,CellSelected)
      expect(InUse).to.eql(false)   
    });

    it('Player selected a Box NOT in use', () => {
      let PressedKey= "2"
      let CellSelected = "2"
      let InUse = EndGameFunctions.NotInUse(PressedKey,CellSelected)
      expect(InUse).to.eql(true)   
    });

    const Winner_Combination = [       
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ];

  it ('Check if a player wins', function(){

      Winner_Combination.forEach(function(element){
          let BoardGame=["1","2","3","4","5","6","7","8","9"]
          BoardGame[element[0]] = "X"
          BoardGame[element[1]] = "X"
          BoardGame[element[2]] = "X"
          
          expect (EndGameFunctions.Winner(BoardGame)).to.eql(true) 
        });
  })

  it ('Test that we do not have a winner when the first value is different', function(){
      Winner_Combination.forEach(function(element){
          const BoardGame=["1","2","3","4","5","6","7","8","9"]
          BoardGame[element[0]] = "O"
          BoardGame[element[1]] = "X"
          BoardGame[element[2]] = "X"
          
          expect (EndGameFunctions.Winner(BoardGame)).to.eql(false) 
        });
  })

  it ('Test that we do not have a winner when the second value is different', function(){
      Winner_Combination.forEach(function(element){
          const BoardGame=["1","2","3","4","5","6","7","8","9"]
          BoardGame[element[0]] = "X"
          BoardGame[element[1]] = "O"
          BoardGame[element[2]] = "X"

          expect (EndGameFunctions.Winner(BoardGame)).to.eql(false) 
        });
  })

  it ('Test that we do not have a winner when the third value is different', function(){
      Winner_Combination.forEach(function(element){
          const BoardGame=["1","2","3","4","5","6","7","8","9"]
          BoardGame[element[0]] = "X"
          BoardGame[element[1]] = "X"
          BoardGame[element[2]] = "O"

          expect (EndGameFunctions.Winner(BoardGame)).to.eql(false) 
        });
  })
    

  it ('Test if the game IS Draw', function(){
    let BoardGame=["X","X","O","O","O","X","X","O","X"]
    let N_Boxes=9

    expect (EndGameFunctions.Draw(BoardGame,N_Boxes)).to.eql(true) 

  })

  it ('Test if the game is NOT Draw', function(){
    let BoardGame=["X","X","O","O","O","X","X","O",9]
    let N_Boxes=9

    expect (EndGameFunctions.Draw(BoardGame,N_Boxes)).to.eql(false) 

  })

});