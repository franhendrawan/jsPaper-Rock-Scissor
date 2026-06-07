function getComputerChoice(bot) {
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


function getHumanChoice() {
    let human = prompt("Rock, Paper, or Scissor?");
    if (human !== null) {
        human = human.toLowerCase();
    }
    return human;

}

let computerscore = 0;
let humanscore = 0;

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
    while (humanscore < 3 && computerscore < 3) {
        playRound(getHumanChoice(), getComputerChoice(3))

        console.log(`'Score : human = ${humanscore} | computer = ${computerscore}`)
    }

    if (humanscore === 3) {
        console.log("Human Win");
    }
    else {
        console.log("Computer Win");
    }
}

playGame();


