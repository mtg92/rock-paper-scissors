
// initialises an array with the choices for the game: rock, paper, scissors
let choices = ["rock", "paper", "scissors"];

// function which determines the computer's choice by taking the array 'choices' as a parameter,
// then initialising an index which will randomly select one of the choices and return the choice corresponding to the index number
function computerPlay (choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

//
function gameRound (playerSelection, computerSelection) {
    
    playerSelection = window.prompt("Rock, paper, or scissors?");
    
    switch (true) {
        case playerSelection.toLowerCase() == "rock" && computerSelection == "rock":
            console.log("Computer chose rock.");
            console.log("Tie! Both players chose rock.");
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "paper":
            console.log("Computer chose paper.");
            console.log("Tie! Both players chose paper.");
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors":
            console.log("Computer chose scissors.");
            console.log("Tie! Both players chose scissors.");
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
            console.log("Computer chose paper.");
            console.log("You lost! Paper beats rock.");
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
            console.log("Computer chose scissors.");
            console.log("You win! Rock beats scissors.");
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
            console.log("Computer chose rock.");
            console.log("You win! Paper beats rock.");
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
            console.log("Computer chose scissors.");
            console.log("You lost! Scissors beats paper.");
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
            console.log("Computer chose paper.");
            console.log("You win! Scissors beats paper.");
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
            console.log("Computer chose rock.");    
            console.log("You lost! Rock beats scissors.");
            break;   
        default:
            console.log("Rock, paper, or scissors?");         
    }


}

let playerSelection = "";
let computerSelection = computerPlay(choices);