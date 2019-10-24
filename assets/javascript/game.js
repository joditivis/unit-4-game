console.log("javascript loaded");

$(document).ready(function(){

//GLOBAL VARIABLES
var playerNum = 0;
var winCount = 0;
var lossCount = 0;

//START GAME FUNCTION
function startGame() {

    //generates random number from array
    var numToMatch = Math.floor(Math.random() * 120 + 19);

    //stores it in console to make sure it's working properly
    console.log(numToMatch);

    //displays random number from randomNum array on page
    $("#random-number").text(numToMatch);

    //resets players guessed number to 0
    playerNum = 0;

    // generate a random number for each crystal 
    var crystal1 = Math.floor(Math.random() * 18 + 1);
    var crystal2 = Math.floor(Math.random() * 18 + 1);
    var crystal3 = Math.floor(Math.random() * 18 + 1);
    var crystal4 = Math.floor(Math.random() * 18 + 1);
   
   
    // for (var i = 0; i < numForCrystals.length; i++) {
    //     var imageCrystal = $(".crystalImage");
    //     imageCrystal.attr("data-crystalvalue", numForCrystals[i]);

    //     $(".crystalImage").text(numForCrystals);
        

        // $("#crystalImages").html(crystalNum);
        // console.log(crystalNum);       
    }
// ON CLICK FUNCTION
    // $(".crystalImage").on("click", function(){
    //    var crystalValue = ($(this).attr("data-crystalvalue"));
    //    crystalValue = parseInt(crystalValue);
    //    playerNum += crystalValue;

    //    if (playerNum === numToMatch) {
    //        winCount++;
    //    }

    //    else if (playerNum >= numToMatch) {
    //        lossCount++;
    //    }

    //    $("#number-guessed").text(playerNum);
    //    $("#winCount").text(winCount);
    //    $("#lossCount").text(lossCount);
    // });

startGame()

});