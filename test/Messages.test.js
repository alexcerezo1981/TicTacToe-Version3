//@format
var expect = require ('chai').expect

const Messages = require('../Messages');

describe('Messages', () => {

    it('User wants to exit the game', () => {
        let key1="e"
        let key2="E"

        expect (Messages.UserExit(key1)).to.equal(true)
        expect (Messages.UserExit(key2)).to.equal(true)
    });

    it('User do not want to exit the game', () => {
        let key1="p"
    
        expect (Messages.UserExit(key1)).to.equal(false)
    });

    it('User pressed a key avialable to play the game', () => {

        expect (Messages.CorrectKeyPressed("1")).to.equal(true)
        expect (Messages.CorrectKeyPressed("2")).to.equal(true)
        expect (Messages.CorrectKeyPressed("3")).to.equal(true)
        expect (Messages.CorrectKeyPressed("4")).to.equal(true)
        expect (Messages.CorrectKeyPressed("5")).to.equal(true)
        expect (Messages.CorrectKeyPressed("6")).to.equal(true)
        expect (Messages.CorrectKeyPressed("7")).to.equal(true)
        expect (Messages.CorrectKeyPressed("8")).to.equal(true)
        expect (Messages.CorrectKeyPressed("9")).to.equal(true)
    });

    it('User pressed a key NOT avialable to play the game', () => {
        let key="p"
    
        expect (Messages.CorrectKeyPressed(key)).to.equal(false)
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

    it ('Check that Player X wins', function(){

        Winner_Combination.forEach(function(element){
            const BoardGame=["1","2","3","4","5","6","7","8","9"]
            BoardGame[element[0]] = "X"
            BoardGame[element[1]] = "X"
            BoardGame[element[2]] = "X"

            expect (Messages.Winner(BoardGame)).equal("Win")
          });
    })

    it ('Check that Player O wins', function(){

        Winner_Combination.forEach(function(element){
            const BoardGame=["1","2","3","4","5","6","7","8","9"]
            BoardGame[element[0]] = "O"
            BoardGame[element[1]] = "O"
            BoardGame[element[2]] = "O"

            expect (Messages.Winner(BoardGame)).equal("Win")
          });
    })


    it ('Test that we do not have a winner when the first value is different', function(){
        Winner_Combination.forEach(function(element){
            const BoardGame=["1","2","3","4","5","6","7","8","9"]
            BoardGame[element[0]] = "O"
            BoardGame[element[1]] = "X"
            BoardGame[element[2]] = "X"

            expect (Messages.Winner(BoardGame)).equal("")
          });
    })

    it ('Test that we do not have a winner when the second value is different', function(){
        Winner_Combination.forEach(function(element){
            const BoardGame=["1","2","3","4","5","6","7","8","9"]
            BoardGame[element[0]] = "X"
            BoardGame[element[1]] = "O"
            BoardGame[element[2]] = "X"

            expect (Messages.Winner(BoardGame)).equal("")
          });
    })

    it ('Test that we do not have a winner when the third value is different', function(){
        Winner_Combination.forEach(function(element){
            const BoardGame=["1","2","3","4","5","6","7","8","9"]
            BoardGame[element[0]] = "X"
            BoardGame[element[1]] = "X"
            BoardGame[element[2]] = "O"

            expect (Messages.Winner(BoardGame)).equal("")
          });
    })
})