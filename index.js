let computerChoiceNum;
let playerChoiceNum;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    //computer randomly returns rock, paper or scissors as its choice based on if
    //moveNum is 1, 2, or 3
    computerChoiceNum = Math.floor((Math.random() * 3));
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
    console.log(playerChoice)
    //check for invalid input
    while ((format(playerChoice) != "Rock")
        && (format(playerChoice) != "Paper")
        && (format(playerChoice) != "Scissors")) {
        playerChoice = prompt("Invalid input. Please enter rock, paper, or scissors");
    }

    //assign a number to playerChoice
    if (format(playerChoice) == "Rock") {
        playerChoiceNum = 0;
    } else if (format(playerChoice) == "Paper") {
        playerChoiceNum = 1;
    } else {//scissors
        playerChoiceNum = 2;
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
    //ChoiceNum assignments:
    //0 - Rock
    //1 - Paper
    //2 - Scissors
    //with the exception of the case that rock beats scissors (0>2), whoever has
    //the bigger ChoiceNum wins the round
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        roundResult = "You win this round! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        roundResult = "You lose this round! " + computerSelection + " beats " + playerSelection;
        computerScore++;
    } else if (playerChoiceNum > computerChoiceNum) {
        roundResult = "You win this round! " + playerSelection + " beats " + computerSelection;
        playerScore++;
    } else if (computerChoiceNum > playerChoiceNum) {
        roundResult = "You lose this round! " + computerSelection + " beats " + playerSelection;
        computerScore++;
    } else {
        roundResult = "It's a tie! There's no winner or loser for this round. "
    }
    return roundResult;
}

//play 5 rounds of the game and report a winner or loser at the end based on the score
function game() {
    let gameResult = "";
    for (let i = 0; i < 5; i++) {
        playRound();
        // console.log(playRound())
        // console.log(playerScore);
        // console.log(computerScore);
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