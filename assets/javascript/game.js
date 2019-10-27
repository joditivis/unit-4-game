console.log("javascript loaded");

$(document).ready(function(){

//GLOBAL VARIABLES
var playerNum = 0;
var winCount = 0;
var lossCount = 0;

    //generates random number for player to match
    var numToMatch = Math.floor(Math.random() * 101 + 19)

    // generate a random number between 1-12 for each crystal 
    var gem1 = Math.floor(Math.random() * 12 + 1);
    var gem2 = Math.floor(Math.random() * 12 + 1);
    var gem3 = Math.floor(Math.random() * 12 + 1);
    var gem4 = Math.floor(Math.random() * 12 + 1);


    //displays each variable on page from html
    $("#random-number").text(numToMatch);
    $("#number-guessed").text(playerNum);
    $("#winCount").text(winCount);
    $("#lossCount").text(lossCount);


    //stores it in console to make sure it's working properly
    console.log("Number to Match: " + numToMatch);
    console.log("Crystal Numbers: " + crystal1, crystal2, crystal3, crystal4);
    console.log("Your Number: " + playerNum);

//=========================
//RESET FUNCTION
//=========================
function resetGame() {
    playerNum = 0;

    numToMatch = Math.floor(Math.random() * 101 + 19);
    
    console.log("Number to Match: " + numToMatch);
    
    $("#random-number").text(numToMatch);

    gem1 = Math.floor(Math.random() * 12 + 1);
    gem2 = Math.floor(Math.random() * 12 + 1);
    gem3 = Math.floor(Math.random() * 12 + 1);
    gem4 = Math.floor(Math.random() * 12 + 1);

    $("#number-guessed").text(playerNum);
}

//=========================
// WIN OR LOSE FUNCTIONS
//=========================
function win() {
    alert("You won!");
    winCount++;
    $("#winCount").text(winCount);
    resetGame();
}
function lose() {
    alert("Bummer! You lost.");
    lossCount++;
    $("#lossCount").text(lossCount);
    resetGame();
}

//==========================
// ON CLICK FUNCTIONS FOR CRYSTALS
//==========================
$('#crystal1').on('click', function() {

    playerNum = playerNum + gem1;

    console.log("Your Number: " + playerNum); 
    $("#number-guessed").text(playerNum);

    if (playerNum == numToMatch) {
        win();       
    }
    else if (playerNum >= numToMatch) {
        lose();       
    }
})
//=========
$('#crystal2').on('click', function() {

    playerNum = playerNum + gem2;

    console.log("Your Number: " + playerNum);
    $("#number-guessed").text(playerNum);

    if (playerNum == numToMatch) {
        win();       
    }
    else if (playerNum >= numToMatch) {
        lose();      
    }
})
//========
$('#crystal3').on('click', function() {

    playerNum = playerNum + gem3;

    console.log("Your Number: " + playerNum);
    $("#number-guessed").text(playerNum);

    if (playerNum == numToMatch) {
        win();
    }
    else if (playerNum >= numToMatch) {
        lose();
    }
})
//========
$('#crystal4').on('click', function() {

    playerNum = playerNum + gem4;

    console.log("Your Number: " + playerNum);
    $("#number-guessed").text(playerNum);

    if (playerNum == numToMatch) {
        win();
    }
    else if (playerNum >= numToMatch) {
        lose();
    }
  });
});