console.log("javascript loaded");

$(document).ready(function(){

//GLOBAL VARIABLES
var playerNum = 0;
var winCount = 0;
var lossCount = 0;

    //generates random number from array
    var numToMatch = Math.floor(Math.random() * 120 + 30);

    //stores it in console to make sure it's working properly
    console.log(numToMatch);

    //displays random number from randomNum array on page
    $("#random-number").text(numToMatch);

    //resets players guessed number to 0 after player wins or loses
    playerNum = 0;

    // generate a random number for each crystal 
    var crystal1 = Math.floor(Math.random() * 18 + 1);
    var crystal2 = Math.floor(Math.random() * 18 + 1);
    var crystal3 = Math.floor(Math.random() * 18 + 1);
    var crystal4 = Math.floor(Math.random() * 18 + 1);

    $("#number-guessed").text(playerNum);

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    console.log(playerNum);


function win() {
    winCount++;
    $("#winCount").text(winCount);

}
function loss() {
    lossCount++;
    $("#lossCount").text(lossCount);

}

// ON CLICK FUNCTION
$("#crystal1").on("click", function(){
    playerNum += crystal1;
    console.log("Your Number: " + playerNum); 
    $("#number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        win()
    }
    else if (playerNum > numToMatch) {
        loss()
    }
})

$("#crystal2").on("click", function(){
    playerNum += crystal2;
    console.log("Your Number: " + playerNum);
    $("number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        win()
    }
    else if (playerNum > numToMatch) {
        loss()
    }
})

$("#crystal3").on("click", function(){
    playerNum += crystal3;
    console.log("Your Number: " + playerNum);
    $("number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        win()
    }
    else if (playerNum > numToMatch) {
        loss()
    }
})

$("#crystal4").on("click", function(){
    playerNum += crystal4;
    console.log("Your Number: " + playerNum);
    $("number-guessed").text(playerNum);

    if (playerNum === numToMatch) {
        win()
    }
    else if (playerNum > numToMatch) {
        loss()
    }
})

});