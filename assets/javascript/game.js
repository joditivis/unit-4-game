console.log("javascript loaded");

$(document).ready(function(){

//GLOBAL VARIABLES
var numToMatch;
var playerNum = 0;
var winCount = 0;
var lossCount = 0;


//==========================================
//RESET FUNCTION TO BE CALLED FOR EACH ROUND
//==========================================
function resetGame() {

    //generates random number for player to match
    numToMatch = Math.floor(Math.random() * 101 + 19);

    //resets players guessed number to 0 after player wins or loses
    playerNum = 0;

    // for loop to go through each individual crystal image 
    for (var i = 0; i < crystals.length; i++) {

        //crystals[i] is calling the crystals that we placed in the for loop,
        //.setAttribute is giving crystals[i] a value of a number between 1-12, and calling that value crystalNumber
        crystals[i].setAttribute("crystalNumber", Math.floor(Math.random() * 11 + 1))
    }

    //displays random number from randomNum array on page
    $("#random-number").text(numToMatch);
    //displays the players guess to webpage
    $("#number-guessed").text(playerNum);

    //stores in console to make sure it's working properly
    console.log(numToMatch);
    console.log(playerNum);
    console.log(crystals[i]);
}





//=========================
// WIN OR LOSE FUNCTIONS
//=========================
function winORlose() {
    
    if (playerNum === numToMatch) {
        resetGame();
        winCount++;
        $("#winCount").text(winCount);
    }
    else if (playerNum >= numToMatch) {
        resetGame();
        lossCount++;
        $("#lossCount").text(lossCount);
    }
}

winORlose();

});