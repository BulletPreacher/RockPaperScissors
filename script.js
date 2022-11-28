let computerDisplay = document.getElementById("computerScore");
let playerDisplay = document.getElementById("playerScore");
let messageDisplay = document.getElementById("displayMessage");
let playerChoiceDisplay = document.getElementById("playerChoice");
let computerChoiceDisplay = document.getElementById("computerChoice");

function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[computerChoice];
}


var submit = document.getElementById("submitChoice");



var playerScore = 0;
var computerScore = 0;


function computerWinDisplay(a, b) {
    messageDisplay.innerHTML = "Computer wins this round";
    playerChoiceDisplay.innerHTML = "You Chose:" + a;
    computerChoiceDisplay.innerHTML = "Computer Chose:" + b;
    computerScore = computerScore + 1;
    computerDisplay.innerHTML = "Computer Score: " + computerScore;
    if(computerScore==5){
        messageDisplay.innerHTML = "Computer won";
        messageDisplay.style.fontSize = "xx-large";
    }
    
}

function playerWinDisplay(a, b) {
    playerChoiceDisplay.innerHTML = "You Chose:" + a;
    computerChoiceDisplay.innerHTML = "Computer Chose:" + b;
    messageDisplay.innerHTML = "Player wins this round";
    playerScore = playerScore + 1;
    playerDisplay.innerHTML = "Player Score: " + playerScore;  
    if (playerScore ==5){
        messageDisplay.innerHTML = "Player won";
        messageDisplay.style.fontSize = "xx-large"; 
    }
    
}


function playRound(choice1, choice2) {
    if (choice1 == "rock") {
        if (choice2 == "paper") {
            computerWinDisplay(choice1, choice2);
        } else if (choice2 == "scissors") {
            playerWinDisplay(choice1, choice2);
        }
    }
    if (choice1 == "paper") {
        if (choice2 == "scissors") {
            computerWinDisplay(choice1, choice2);
        } else if (choice2 == "rock") {
            playerWinDisplay(choice1, choice2);
        }
    }
    if (choice1 == "scissors") {
        if (choice2 == "rock") {
            computerWinDisplay(choice1, choice2);
        } else if (choice2 == "paper") {
            playerWinDisplay(choice1, choice2);
        }
    }
    if (choice1 == choice2) {
        playerChoiceDisplay.innerHTML = "You Chose:" + choice1;
        computerChoiceDisplay.innerHTML = "Computer Chose:" + choice2;
        messageDisplay.innerHTML = "draw";
    }
}




submit.onclick = function game() {
    x = document.getElementById("playerAnswer").value.toLowerCase();
    y = getComputerChoice();
    if ((x !== "rock") && (x !== "paper") && (x !== "scissors")) {
        messageDisplay.innerHTML = "Please enter a valid option";
    }
    playRound(x, y);
}

