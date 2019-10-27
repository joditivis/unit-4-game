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

    // for loop to go through each individual crystal image and assign it a value
    for (var i = 0; i < crystals.length; i++) {
        //crystals[i] is calling the crystals that we placed in the for loop,
        //.setAttribute is giving crystals[i] a value of a number between 1-12, and naming that value crystalNumber
        crystals[i].setAttribute("crystalNumber", Math.floor(Math.random() * 11 + 1))
    }

    //generates random number for player to match
    numToMatch = Math.floor(Math.random() * 101 + 19);

    //resets players guessed number to 0 after player wins or loses
    playerNum = 0;

    //displays random number from randomNum array on page
    $("#random-number").text(numToMatch);
    //displays the players guess to webpage
    $("#number-guessed").text(playerNum);
}

//======================
// START GAME FUNCTION
//======================
function startGame() {

    // this will call the crystals by their tag name from html
    crystals = $("img")

    //repeating our for loop from our resetGame function so the same process can be called using startGame function
    for (var i = 0; i < crystals.length; i++) {

        //crystals[i] is calling the crystals that we placed in the for loop,
        //.setAttribute is giving crystals[i] a value of a number between 1-12, and naming that value crystalNumber
        crystals[i].setAttribute("crystalNumber", Math.floor(Math.random() * 11 + 1))

        //.addEventListener will add a click function to each of the crystals
        crystals[i].addEventListener("click", function() {

            //creating a value for each crystal and math.round is rounding to the nearest number
            crystalValue = ;

            //adding the players guess to the crystal value
            playerNum = playerNum + crystalValue;

            $("#number-guessed").text(playerNum);
            console.log(playerNum);

            winORlose();
        })
    }

    //initializing random number to match
    numToMatch = Math.floor(Math.random() * 101 + 19);

    //
    $("#random.number").text(numToMatch);
    $("#winCount").text(winCount);
    $("#lossCount").text(lossCount);
    $("#number-guessed").text(playerNum);
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

startGame();

});