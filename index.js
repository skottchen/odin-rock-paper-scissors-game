let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //computer randomly returns rock, paper or scissors as its choice based on if
    //moveNum is 1, 2, or 3
    const computerChoiceNum = Math.floor((Math.random() * 3));
    let computerChoice;
    if (computerChoiceNum == 0) {
        computerChoice = "Rock";
    } else if (computerChoiceNum == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Enter rock, paper, or scissors");

    while ((format(playerChoice) != "Rock")
        && (format(playerChoice) != "Paper")
        && (format(playerChoice) != "Scissors")) {
        playerChoice = prompt("Invalid input. Please enter rock, paper, or scissors");
    }

    return format(playerChoice);
}

function format(playerChoice) {
    //format the player's input so that it matches the words Rock, Paper, or Scissors
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}


function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let roundResult = "";

    if ((playerSelection == "Scissors" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Rock" && computerSelection == "Scissors")) {
        roundResult = "You win this round! " + "Player's move: "
            + playerSelection + " beats " + "Computer's move: " + computerSelection;
        playerScore++;
    } else if (playerSelection == computerSelection) {
        roundResult = "It's a tie! There's no winner or loser for this round. "
    } else {
        roundResult = "You lose this round! " + "Computer's move: " + computerSelection +
            " beats " + "Player's move: " + playerSelection;
        computerScore++;
    }
    return roundResult;
}

//play 5 rounds of the game and report a winner or loser at the end based on the score
function game() {
    let gameResult = "";
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }

    if (playerScore > computerScore) {
        gameResult = "You won this game!"
    } else if (computerScore > playerScore) {
        gameResult = "You lost this game. Better luck next time. "
    } else {
        gameResult = "Tied game."
    }

    //reset scores before new round
    playerScore = 0;
    computerScore = 0;
    return gameResult;
}

console.log(game());