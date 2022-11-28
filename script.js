function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    let computerChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[computerChoice];
}

function validatePlayerChoice(x) {
    while ((x !== "rock") && (x !== "paper") && (x !== "scissors")) {
        x = prompt("Invalid please enter either Rock, Paper or Scissors").toLowerCase();
    }
    return x;
}

var playerScore = 0;
var computerScore = 0;

function playRound(choice1, choice2) {
    if (choice1 == "rock") {
        if (choice2 == "rock") {
            console.log("Draw");
        } else if (choice2 == "paper") {
            console.log("Computer wins this round");
            computerScore = computerScore + 1;
            document.getElementById("computerScore").innerText = "Computer Score: " + computerScore;
        } else if (choice2 == "scissors") {
            console.log("Player wins this round");
            playerScore = playerScore + 1;
            document.getElementById("playerScore").innerText = "Player Score: " + playerScore;
        }
    }
    if (choice1 == "paper") {
        if (choice2 == "paper") {
            console.log("Draw");
        } else if (choice2 == "scissors") {
            console.log("Computer wins this round");
            computerScore = computerScore + 1;
            document.getElementById("computerScore").innerText = "Computer Score: " + computerScore;
        } else if (choice2 == "rock") {
            console.log("Player wins this round");
            playerScore = playerScore + 1;
            document.getElementById("playerScore").innerText = "Player Score: " + playerScore;
        }
    }
    if (choice1 == "scissors") {
        if (choice2 == "scissors") {
            console.log("Draw");
        } else if (choice2 == "rock") {
            console.log("Computer wins this round");
            computerScore = computerScore + 1;
            document.getElementById("computerScore").innerText = "Computer Score: " + computerScore;
        } else if (choice2 == "paper") {
            console.log("Player wins this round");
            playerScore = playerScore + 1;
            document.getElementById("playerScore").innerText = "Player Score: " + playerScore;
        }
    }
}



function game() {
    playerScore = 0;
    computerScore = 0;
    while ((playerScore !== 5) && (computerScore !== 5)) {
        let playerSelection = validatePlayerChoice(prompt("Rock, Paper or Scissors?").toLowerCase());
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("PlayerScore: " + playerScore);
        console.log("ComputerScore: " + computerScore);
    } if (playerScore > computerScore) {
        console.log("Player wins the game");

    } else {
        console.log("Computer wins the game");
    }
}



game();