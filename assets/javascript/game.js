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
        crystals[i].setAttribute("crystalNum", Math.floor(Math.random() * 16 + 1))
    }
    numToMatch = Math.floor(Math.random() * 120 + 30);
    playerNum = 0;
    $("#random-number").text(numToMatch);
    $("#number-guessed").text(playerNum);
}

function initialize() {
    crystals = document.getElementsByTagName("img")
    for (var i = 0; i < crystals.length; i++) {
        crystals[i].setAttribute("crystalNum", Math.floor(Math.random() * 16 + 1))
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
    
    // playerNum = 0;

    // var numToMatch = Math.floor(Math.random() * 120 + 30);
    // console.log("Number to Match: " + numToMatch);
    // $("#random-number").text(numToMatch);

    // var crystal1 = Math.floor(Math.random() * 18 + 1);
    // var crystal2 = Math.floor(Math.random() * 18 + 1);
    // var crystal3 = Math.floor(Math.random() * 18 + 1);
    // var crystal4 = Math.floor(Math.random() * 18 + 1);

    // $("#number-guessed").text(playerNum);

    // console.log("Crystal Numbers: " + crystal1, crystal2, crystal3, crystal4);
    // console.log("Your Number: " + playerNum);


//=========================
// WIN OR LOSE FUNCTIONS
//=========================
// function win() {
//     winCount++;
//     $("#winCount").text(winCount);
//     resetGame();
// }
// function lose() {
//     lossCount++;
//     $("#lossCount").text(lossCount);
//     resetGame();
// }

// //==========================
// // ON CLICK FUNCTION
// //==========================
// $("#crystal1").on("click", function(){
//     playerNum = playerNum + crystal1;
//     console.log("Your Number: " + playerNum); 
//     $("#number-guessed").text(playerNum);

//     if (playerNum === numToMatch) {
//         win()       
//     }
//     else if (playerNum >= numToMatch) {
//         lose()       
//     }
// });

// $("#crystal2").on("click", function(){
//     playerNum = playerNum + crystal2;
//     console.log("Your Number: " + playerNum);
//     $("number-guessed").text(playerNum);

//     if (playerNum === numToMatch) {
//         win()       
//     }
//     else if (playerNum >= numToMatch) {
//         lose()      
//     }
// });

// $("#crystal3").on("click", function(){
//     playerNum = playerNum + crystal3;
//     console.log("Your Number: " + playerNum);
//     $("number-guessed").text(playerNum);

//     if (playerNum === numToMatch) {
//         win()
//     }
//     else if (playerNum >= numToMatch) {
//         lose()
//     }
// });

// $("#crystal4").on("click", function(){
//     playerNum = playerNum + crystal4;
//     console.log("Your Number: " + playerNum);
//     $("number-guessed").text(playerNum);

//     if (playerNum === numToMatch) {
//         win()
//     }
//     else if (playerNum >= numToMatch) {
//         lose()
//     }
// });

// });