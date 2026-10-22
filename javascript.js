
// Button Script
const startBtn = document.querySelector("#start-btn");
const startContainer = document.querySelector("#start-container");
const gameWrapper = document.querySelector("#game-wrapper");
const gameContainer = document.querySelector("#game-container");
const restartButton = document.querySelector("#restart-container");

// Hide start button if user interact with it
startBtn.addEventListener("click", () => {
    startContainer.style.display = "none";
    gameWrapper.style.display = "flex";
});

// Computer choice result
const computerChoiceResult = document.querySelector("#computer-choiceResult");

// Function to get computer choice
function getComputerChoice(bot) {
    // Use math.random to randomized result
    let bot_choice = Math.floor(Math.random() * bot);
    if (bot_choice === 0) {
        return "Rock";
    }
    else if (bot_choice === 1){
        return "Paper";
    }
    else {
         return "Scissor";
    }
}

// Initialize both human and computer score
let computerScore = 0;
let humanScore = 0;
const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");
// The game function
// Check for the 3 possible choice of the human
// Then check 3 possible choice of the computer
// Increment the result and add log of the result
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "Scissor") {
            console.log("You Win");
            humanScore++;
        }
        else if (computerChoice === "Paper") {
            console.log("You Lose");
            computerScore++;
        }
        else {
            console.log("Draw");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "Rock") {
            console.log("You Win");
            humanScore++;
        }
        else if (computerChoice === "Scissor") {
            console.log("You Lose");
            computerScore++;
        }
        else {
            console.log("Draw");
        }
    }      
    else if (humanChoice === "scissor") {
        if (computerChoice === "Paper") {
            console.log("You Win");
            humanScore++;
        }
        else if (computerChoice === "Rock") {
            console.log("You Lose");
            computerScore++;
        }
        else {
            console.log("Draw");
        }
    }
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    computerChoiceResult.textContent = computerChoice;

    checkWinner()
}

// Game Script hook the button and play round
const choiceButtons = document.querySelectorAll(".choice-btn");
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Hook Choice to game button
        const humanChoice = button.id;
        // Get computer choice from function
        const computerChoice = getComputerChoice(3);
        // Call playround function after click
        playRound(humanChoice, computerChoice);
    });
});

// Select winner announcement in the page
const winnerAnnouncement = document.querySelector("#winner-announcement");

// Restart button function
restartButton.addEventListener("click", () => {
    // Reset score
    humanScore = 0;
    computerScore = 0;

    // Set score display to new number
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    // Reset winner announcement
    winnerAnnouncement.textContent = "";

    // Show button and hide restart button
    gameContainer.style.display = "flex";
    restartButton.style.display = "none";
});

// Function to Check Winner
function checkWinner() {
    if (humanScore === 5) {
        console.log("Winner Found");
        gameContainer.style.display = "none";
        winnerAnnouncement.textContent = "Congratulations! You won the game!";
        restartButton.style.display = "block";
    }
    else if (computerScore === 5) {
        console.log("Winner Found");
        gameContainer.style.display = "none";
        winnerAnnouncement.textContent = "Game Over! The computer won!";
        restartButton.style.display = "block";
    }
}





