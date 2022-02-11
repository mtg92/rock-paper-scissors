
// initialises an array with the choices for the game: frodo, gollum, ring, and player selection as an empty string
let choices = ["frodo", "gollum", "ring"];
let playerSelection = "";

// function which determines the computer's choice by taking the array 'choices' as a parameter,
// then initialising an index which will randomly select one of the choices and return the choice corresponding to the index number
function computerPlay (choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

// function which plays a round of frodo, gollum, ring. it prompts the user to select their move,
// initialises the return and then uses a switch  method to store the result in the result variable, returning the return at the end.
function playRound (playerSelection, computerSelection) {
    
    playerSelection = window.prompt("Frodo, Gollum or Ring?");
    let result = "";
    
    switch (true) {
        case playerSelection.toLowerCase() == "frodo" && computerSelection == "frodo":
            result = "You chose Frodo. \nSauron chose Frodo. \n Tie! You both chose Frodo.";
            break;
        case playerSelection.toLowerCase() == "gollum" && computerSelection == "gollum":
            result = "You chose Gollum. \nSauron chose Gollum. \n Tie! You both chose Gollum.";
            break;
        case playerSelection.toLowerCase() == "ring" && computerSelection == "ring":
            result = "You chose the Ring. \nSauron chose the Ring. \n Tie! You both chose the Ring.";
            break;
        case playerSelection.toLowerCase() == "frodo" && computerSelection == "gollum":
            result = "You chose Frodo. \nSauron chose Gollum. \n You lost! Gollum maims Frodo.";
            break;
        case playerSelection.toLowerCase() == "frodo" && computerSelection == "ring":
            result = "You chose Frodo. \nSauron chose the Ring. \n You win! Frodo destroys the Ring.";
            break;
        case playerSelection.toLowerCase() == "gollum" && computerSelection == "frodo":
            result = "You chose Gollum. \nSauron chose Frodo. \n You win! Gollum maims Frodo.";
            break;
        case playerSelection.toLowerCase() == "gollum" && computerSelection == "ring":
            result = "You chose Gollum. \nSauron chose the Ring. \n You lost! The Ring corrupts Gollum.";
            break;
        case playerSelection.toLowerCase() == "ring" && computerSelection == "gollum":
            result = "You chose the Ring. \nSauron chose Gollum. \n You win! The Ring corrupts Gollum.";
            break;
        case playerSelection.toLowerCase() == "ring" && computerSelection == "frodo":
            result = "You chose the Ring. \nSauron chose Frodo. \n You lost! Frodo destroys the Ring.";    
            break;   
        default:
            result = "You must choose either frodo, gollum or ring. Check your spelling :)"; 
            
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
        console.log(`Score: \n You: ${playerScore}, Sauron: ${computerScore}`);
    }
    if (playerScore == 3) {
        console.log("You have beaten Sauron and saved Middle Earth, congratulations!");
    } else if (computerScore == 3) {
        console.log("You have been defeated by Sauron, Middle Earth will now be covered in a second darkness!")
    }
}