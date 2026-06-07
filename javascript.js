// Function to get computer choice
function getComputerChoice(bot) {
    // Use math.random to randomized result
    let bot_choice = Math.floor(Math.random() * bot);
    if (bot_choice === 0) {
        return "rock"
    }
    else if (bot_choice === 1){
        return "paper"
    }
    else {
         return "scissor"
    }
}

// Function to get human choice
function getHumanChoice() {
    // Prompt the user to input
    // No input check
    let human = prompt("Rock, Paper, or Scissor?");
    // Check if user cancel the prompt if not convert to lower case
    if (human !== null) {
        human = human.toLowerCase();
    }
    return human;

}

// Initialize both human and computer score
let computerscore = 0;
let humanscore = 0;

// The game function
// Check for the 3 possible choice of the human
// Then check 3 possible choice of the computer
// Increment the result and add log of the result
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "scissor") {
            console.log("You Win");
            humanscore++;
        }
        else if (computerChoice === "paper") {
            console.log("You Lose");
            computerscore++;
        }
        else {
            console.log("Draw");
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You Win");
            humanscore++;
        }
        else if (computerChoice === "scissor") {
            console.log("You Lose");
            computerscore++;
        }
        else {
            console.log("Draw");
        }
    }      
    else if (humanChoice === "scissor") {
        if (computerChoice === "paper") {
            console.log("You Win");
            humanscore++;
        }
        else if (computerChoice === "rock") {
            console.log("You Lose");
            computerscore++;
        }
        else {
            console.log("Draw");
        }
    }
}


function playGame() {
    // Loop if both score has no winner
    while (humanscore < 3 && computerscore < 3) {
        playRound(getHumanChoice(), getComputerChoice(3))
        // Update the score for each round
        console.log(`'Score : human = ${humanscore} | computer = ${computerscore}`)
    }
    // If human is winner
    if (humanscore === 3) {
        console.log("Human Win");
    }
    // If computer is winner
    else {
        console.log("Computer Win");
    }
}

playGame();


