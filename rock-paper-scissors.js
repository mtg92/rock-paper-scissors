
// initialises an array with the choices for the game: rock, paper, scissors, and player selection as an empty string
let choices = ["rock", "paper", "scissors"];
let playerSelection = "";

// function which determines the computer's choice by taking the array 'choices' as a parameter,
// then initialising an index which will randomly select one of the choices and return the choice corresponding to the index number
function computerPlay (choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// function which plays a round of rock, paper, scissors. it prompts the user to select their move,
// initialises the return and then uses a switch  method to store the result in the result variable, returning the return at the end.
function playRound (playerSelection, computerSelection) {
    
    playerSelection = window.prompt("Rock, paper, or scissors?");
    let result = "";
    
    switch (true) {
        case playerSelection.toLowerCase() == "rock" && computerSelection == "rock":
            result = "You chose rock. \nComputer chose rock. \n Tie! Both players chose rock.";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "paper":
            result = "You chose paper. \nComputer chose paper. \n Tie! Both players chose paper.";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors":
            result = "You chose scissors. \nComputer chose scissors. \n Tie! Both players chose scissors.";
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
            result = "You chose rock. \nComputer chose paper. \n You lost! Paper beats rock.";
            break;
        case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
            result = "You chose rock. \nComputer chose scissors. \n You win! Rock beats scissors.";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
            result = "You chose paper. \nComputer chose rock. \n You win! Paper beats rock.";
            break;
        case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
            result = "You chose paper. \nComputer chose scissors. \n You lost! Scissors beats paper.";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
            result = "You chose scissors. \nComputer chose paper. \n You win! Scissors beats paper.";
            break;
        case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
            result = "You chose scissors. \nComputer chose rock. \n You lost! Rock beats scissors.";    
            break;   
        default:
            result = "You must choose either rock, paper or scissors. Check your spelling :)"; 
            
    }

    return result;
}

// function that plays a best of 5 game with a while loop that runs until either player
// or computer have a score of 3, checking the result and adding 
function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        let computerSelection = computerPlay(choices);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        let winner = result.includes("You win");
        let loser = result.includes("You lost");
        if (winner) {
            playerScore++;
        } else if (loser) {
            computerScore++;
        }
        console.log(`Score: \n You: ${playerScore}, Computer: ${computerScore}`);
    }
    if (playerScore == 3) {
        console.log("You are the winner, congratulations!");
    } else if (computerScore == 3) {
        console.log("You lost the game. Better luck next time!")
    }
}