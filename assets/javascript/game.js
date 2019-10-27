console.log("javascript loaded");

$(document).ready(function(){

//GLOBAL VARIABLES
var numToMatch;
var playerNum = 0;
var winCount = 0;
var lossCount = 0;

//=========================
//FUNCTIONS
//=========================
function resetGame() {

    for (var i = 0; i < crystals.length; i++) {

        crystals[i].setAttribute("crystalNum", Math.floor(Math.random() * 11 + 1))   
    }

    numToMatch = Math.floor(Math.random() * 101 + 19);

    playerNum = 0;

    $("#random-number").text(numToMatch);
    $("#number-guessed").text(playerNum);
}

function initialize() {

    crystals = document.getElementsByTagName("img")

    for (var i = 0; i < crystals.length; i++) {

        crystals[i].setAttribute("crystalNum", Math.floor(Math.random() * 11 + 1))

        crystals[i].addEventListener("click", (args) => {

            value = Math.round(args.target.getAttribute("crystalNum"))

            playerNum = playerNum + value;

            $("#number-guessed").text(playerNum);
            console.log(playerNum);

            winORlose();
        })
    }

    numToMatch = Math.floor(Math.random() * 120 + 30);

    $("#random-number").text(numToMatch);
    $("#winCount").text(winCount);
    $("#lossCount").text(lossCount);
    $("#number-guessed").text(playerNum);
}

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

initialize();
});