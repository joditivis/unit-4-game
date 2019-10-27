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
    var numToMatch = Math.floor(Math.random() * 120 + 30);

    //stores it in console to make sure it's working properly
    console.log(numToMatch);

    //resets players guessed number to 0 after player wins or loses
    playerNum = 0;

    // generate a random number between 1-17 for each crystal 
    var crystal1 = Math.floor(Math.random() * 18 + 1);
    var crystal2 = Math.floor(Math.random() * 18 + 1);
    var crystal3 = Math.floor(Math.random() * 18 + 1);
    var crystal4 = Math.floor(Math.random() * 18 + 1);


    //displays random number from randomNum array on page
    $("#random-number").text(numToMatch);
    //displays the players guess to webpage
    $("#number-guessed").text(playerNum);

    //stores in console to make sure it's working properly
    console.log(numToMatch);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    console.log(playerNum);
}

//=========================
// WIN OR LOSE FUNCTIONS
//=========================
function winORlose() {
    winCount++;
    $("#winCount").text(winCount);

    resetGame();
}
function lose() {
    lossCount++;
    $("#lossCount").text(lossCount);

    resetGame();
}

//==========================
// ON CLICK FUNCTION
//==========================
$("#crystal1").on("click", function(){
    playerNum += crystal1;
    playerNum = playerNum + crystal1;
    console.log("Your Number: " + playerNum); 
    $("#number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        winORlose()      
    }
    else if (playerNum > numToMatch) {
        loss()
        lose()       
    }
})

$("#crystal2").on("click", function(){
    playerNum += crystal2;
    playerNum = playerNum + crystal2;
    console.log("Your Number: " + playerNum);
    $("number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        win()       
    }
    else if (playerNum > numToMatch) {
        lose()      
    }
})

$("#crystal3").on("click", function(){
    playerNum += crystal3;
    playerNum = playerNum + crystal3;
    console.log("Your Number: " + playerNum);
    $("number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        win()
    }
    else if (playerNum > numToMatch) {
        lose()
    }
})

$("#crystal4").on("click", function(){
    playerNum += crystal4;
    playerNum = playerNum + crystal4;
    console.log("Your Number: " + playerNum);
    $("number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        win()
    }
    else if (playerNum > numToMatch) {
        lose()
    }
})

resetGame()

})