////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    if (move = "rock", "paper", "scissors"){
      return move;  
    }// If a `move` has a value, your expression should evaluate to that value.
    else if (move === null) {
         return getInput();
    }// However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    if (move === "rock", "paper", "scissors"){
        return move;
    }// If a `move` has a value, your expression should evaluate to that value.
    else if( move ===null) {
        return randomPlay();
    }
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((getPlayerMove === "rock" && randomPlay ==="scissors")|| (getPlayerMove === "scissors" && randomPlay=== "paper") || (getPlayerMove==="paper" && randomPlay === "rock")){
        winner = "player";
    }
    else if (getPlayerMove === randomPlay)
    { winner = "tie"}
    else {
        winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5){
        getInput();
        if (playerWins === 5){
            return ("player wins");
        }
        if (computerWins === 5){
            return ("computer wins");
        }
    }
    
    return [playerWins, computerWins];
}
