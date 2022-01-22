
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
    let result = "";
    
    switch (true) {
        case playerSelection.toLowerCase() == "rock" && computerSelection == "rock":
            result = "Computer chose rock. \n Tie! Both players chose rock.";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "paper":
            result = "Computer chose paper. \n Tie! Both players chose paper.";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors":
            result = "Computer chose scissors. \n Tie! Both players chose scissors.";
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
            result = "Computer chose paper. \n You lost! Paper beats rock.";
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
            result = "Computer chose scissors. \n You win! Rock beats scissors.";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
            result = "Computer chose rock. \n You win! Paper beats rock.";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
            result = "Computer chose scissors. \n You lost! Scissors beats paper.";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
            result = "Computer chose paper. \n You win! Scissors beats paper.";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
            result = "Computer chose rock. \n You lost! Rock beats scissors.";    
            break;   
        default:
            result = "Rock, paper, or scissors?"; 
            
    }

    return result;
}

let playerSelection = "";
let computerSelection = computerPlay(choices);