let playerScore = document.getElementById("player-score").innerHTML;
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissors");
let computerBtns = document.querySelectorAll("#computer button");
let playerSelection;
let resultsContainer = document.getElementById("results");
let computerBtnSelected;
let roundNum = 0;
let gameOver = false;

function getComputerChoice() {
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


rockBtn.addEventListener("click", () => {
    if (gameOver == false) {
        playerSelection = "Rock";
        rockBtn.style.border = "5px solid green";
        playRound(playerSelection, getComputerChoice());
        document.getElementById("rock").disabled = true;

        //allow time for the player to see the computer "playing"
        setTimeout(function () {
            rockBtn.style.border = "none";
            document.getElementById("rock").disabled = false;
        }, 500);
    }
});

paperBtn.addEventListener("click", () => {
    if (gameOver == false) {
        playerSelection = "Paper";
        paperBtn.style.border = "5px solid green";
        playRound(playerSelection, getComputerChoice());
        document.getElementById("paper").disabled = true;
        setTimeout(function () {
            paperBtn.style.border = "none";
            document.getElementById("paper").disabled = false;
        }, 500);
    }
});

scissorBtn.addEventListener("click", () => {
    if (gameOver == false) {
        playerSelection = "Scissors";
        scissorBtn.style.border = "5px solid green";
        playRound(playerSelection, getComputerChoice());
        document.getElementById("scissors").disabled = true;
        setTimeout(function () {
            scissorBtn.style.border = "none";
            document.getElementById("scissors").disabled = false;
        }, 500);
    }
});

function playRound(playerSelection, computerSelection) {
    roundNum++;
    let roundResult = "";
    if ((playerSelection == "Scissors" && computerSelection == "Paper")
        || (playerSelection == "Paper" && computerSelection == "Rock")
        || (playerSelection == "Rock" && computerSelection == "Scissors")) {
        roundResult = "You win round " + roundNum + "! " +
            "Your move, " + playerSelection.toLowerCase()
            + ", beat the computer's move, " + computerSelection.toLowerCase() + ".";
        (document.getElementById("player-score").innerHTML)++ //player score
    } else if (playerSelection == computerSelection) {
        roundResult = "It's a tie! There's no winner or loser for round " + roundNum + "! ";
    } else {
        roundResult = "You lose round " + roundNum + "! " + "The computer's move, " + computerSelection.toLowerCase() +
            ", beat your move, " + playerSelection.toLowerCase() + ".";
        (document.getElementById("computer-score").innerHTML)++ //computer score
    }

    resultsContainer.innerHTML = "";
    let resultELem = document.createElement("h2");
    resultELem.textContent = roundResult;
    resultsContainer.appendChild(resultELem);

    if ((document.getElementById("player-score").innerHTML) == 5
        || (document.getElementById("computer-score").innerHTML) == 5) {
        displayWinnerAndRestartGame(
            (document.getElementById("player-score").innerHTML),
            (document.getElementById("computer-score").innerHTML))
    }
}

function displayWinnerAndRestartGame(playerScore, computerScore) {

    gameOver = true;
    let gameResultsElem = document.createElement("h2");
    const restartGameBtn = document.createElement("button");
    restartGameBtn.textContent = "Restart Game"
    restartGameBtn.classList.add("restart-btn");
    if (playerScore == 5 && computerScore == 5) {
        gameResultsElem.textContent = "Tied game."
    } else if (playerScore == 5) {
        gameResultsElem.textContent = "Congratuations, you won the game!"
    } else {
        gameResultsElem.textContent = "You lost the game. Better luck next time."
    }
    resultsContainer.appendChild(gameResultsElem);
    resultsContainer.appendChild(restartGameBtn);

    restartGameBtn.addEventListener("click", () => {
        document.getElementById("player-score").innerHTML = 0;
        document.getElementById("computer-score").innerHTML = 0;
        resultsContainer.innerHTML = "";
        roundNum = 0;
        gameOver = false;
    })
}