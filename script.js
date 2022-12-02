let wrapper= document.getElementById("wrapper");
let ChoiceDisplay = document.getElementById("Choice");
let playDiv = document.getElementById("playerScore");
let comDiv = document.getElementById("computerScore");
let container = document.getElementById("container2");
let rock =document.getElementById("rockChoice");
let paper =document.getElementById("paperChoice");
let scissors =document.getElementById("scissorsChoice");
let row =document.getElementById("row");

function getComputerChoice() {
    const computerChoices = ["Rock", "Paper", "Scissors"];
    let computerChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[computerChoice];
}


var playerScore = 0;
var computerScore = 0;
const display= document.createElement('p');
const reset= document.createElement('button');
const gameOverMessage = document.createElement('p');
display.setAttribute('style', 'display: none');
reset.setAttribute('style', 'display: none');
reset.textContent="Reset";
wrapper.insertBefore(display, ChoiceDisplay)
row.appendChild(reset);



function WinDisplay(a, b, c) {
    if (c=='player'){
        playerScore=playerScore+1;
        if(playerScore==5){
            let winner='player';
            gameover(winner);
        }
        playDiv.textContent = `Player Score: ${playerScore}`;
    }else if (c=='computer'){
        computerScore=computerScore+1;
        if(computerScore==5){
            let winner='computer';
            gameover(winner);
        }
        comDiv.textContent = `Computer Score: ${computerScore}`;
    }
    container.appendChild(display);
    display.setAttribute('style','width: fit-content; margin: auto; margin-top:5%; display: flex');
    display.textContent = `You chose ${a}, the computer chose ${b}, ${c} wins the round`;
}

const options = document.querySelectorAll('.choice');
options.forEach(option => option.addEventListener('click', playRound));

function playRound(e) {
    let pChoice = e.currentTarget.innerHTML;
    let comChoice = getComputerChoice();
    if (pChoice == "Rock") {
        if (comChoice == "Paper") {
            let winner = "computer";
            WinDisplay(pChoice, comChoice, winner);
        } else if (comChoice == "Scissors") {
            let winner = "player";
            WinDisplay(pChoice, comChoice, winner);
        }
    }
    if (pChoice == "Paper") {
        if (comChoice == "Scissors") {
            let winner = "computer";
            WinDisplay(pChoice, comChoice, winner);
        } else if (comChoice == "Rock") {
            let winner = "player";
            WinDisplay(pChoice, comChoice, winner);
        }
    }
    if (pChoice == "Scissors") {
        if (comChoice == "Rock") {
            let winner = "computer";
            WinDisplay(pChoice, comChoice, winner);
        } else if (comChoice == "Paper") {
            let winner = "player";
            WinDisplay(pChoice, comChoice, winner);
        }
    }
    if (pChoice == comChoice) {
        let winner = "no one";
        WinDisplay(pChoice, comChoice, winner)
    }
}


reset.addEventListener('click', function (e) {
    rock.style.display = "block";
    paper.style.display = "block";
    scissors.style.display = "block";
    reset.style.display="none";
    gameOverMessage.style.display="none";
    display.textContent=""
    playerScore=0;
    computerScore=0;
    playDiv.textContent = `Player Score: ${playerScore}`;
    comDiv.textContent = `Computer Score: ${computerScore}`;
  });

function gameover(a){
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
    reset.setAttribute('style', 'width:150px; height:100px; border: 5px solid white; border-radius: 10%; background: black; align-items:center; justify-content:center; color: white; display: flex');
    gameOverMessage.setAttribute('style', 'font-size: XXL; font-weight:bolder');
    if (a=="player"){
        gameOverMessage.textContent = `You won`;
        container2.appendChild(gameOverMessage);
       
    }else{
        gameOverMessage.textContent = `You Lost`;
        container2.appendChild(gameOverMessage);
    }
   
}