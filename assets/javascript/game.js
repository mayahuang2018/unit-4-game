
$(document).ready(function() {
    
//The player will be shown a random number at the start of the game.
//The random number shown at the start of the game should be between 19 - 120.

var randomNumber = Math.floor(Math.random() * 102) + 19;
$("#randomNum").html(randomNumber);

//There will be four crystals displayed as buttons on the page.
//Each crystal should have a random hidden value between 1 - 12.

var wins = 0;
var losses = 0;
crystalSum=0;

var crystalNum1 = Math.floor(Math.random() * 12) + 1;
var crystalNum2 = Math.floor(Math.random() * 12) + 1;
var crystalNum3 = Math.floor(Math.random() * 12) + 1;
var crystalNum4 = Math.floor(Math.random() * 12) + 1;


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

function restart(){
crystalSum=0;

randomNumber = Math.floor(Math.random() * 102) + 19;
$("#randomNum").html(randomNumber);
 crystalNum1 = Math.floor(Math.random() * 12) + 1;
 crystalNum2 = Math.floor(Math.random() * 12) + 1;
 crystalNum3 = Math.floor(Math.random() * 12) + 1;
 crystalNum4 = Math.floor(Math.random() * 12) + 1;

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
};

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//Your game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.

$("#crystal_1").on("click", function() {
    crystalSum =crystalSum + crystalNum1;
    $("#totalScore").html(crystalSum);
    winOrLose();
  });

$("#crystal_2").on("click", function() {
    crystalSum =crystalSum + crystalNum2;
    $("#totalScore").html(crystalSum);
    winOrLose();

  });

$("#crystal_3").on("click", function() {
    crystalSum =crystalSum + crystalNum3;
    $("#totalScore").html(crystalSum);
    winOrLose();
  });

$("#crystal_4").on("click", function() {
    crystalSum =crystalSum + crystalNum4;
    $("#totalScore").html(crystalSum);
    winOrLose();
  });

  console.log (crystalNum1 )
  console.log (crystalNum2 )
  console.log (crystalNum3)
  console.log (crystalNum4)
  console.log (crystalSum )
  console.log (randomNumber)

function winOrLose(){

// The player wins if their total score matches the random number from the beginning of the game.

if (crystalSum === randomNumber) {
    wins ++;
    $("#winOrLoss").html("You won!!");
    console.log(wins);
    console.log("You win!!");
    restart();
     //The game restarts whenever the player wins or loses.
} else
 

    // The player loses if their score goes above the random number.

    if (crystalSum > randomNumber) {
        losses ++;
        $("#winOrLoss").text("You lost!!");
        console.log(losses);
        console.log("You Lose!!");
        restart();
 
    }

$("#win-counter").html(wins);
$("#loss-counter").html(losses);

};

});
