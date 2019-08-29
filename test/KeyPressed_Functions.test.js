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
      let Board = ['X',2,3,4,5,6,7,8,9]
      let InUse = EndGameFunctions.NotInUse(PressedKey,Board)
      expect(InUse).to.eql(false)   
    });

    it('Player selected a Box NOT in use', () => {
      let PressedKey= "2"
      let Board = ['X',2,3,4,5,6,7,8,9]
      let InUse = EndGameFunctions.NotInUse(PressedKey,Board)
      expect(InUse).to.eql(true)   
    });

    

});