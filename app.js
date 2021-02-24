const answers = ["rock", "paper", "scissors"];

let score = 0;
let roundsToPlay = 5;
let roundsPlayed = 0;
let wrongInputFound;

const computerPlay = () => {
    return answers[Math.floor(Math.random() * answers.length)];
}

const playRound = (playerSelection, computerSelection) => {
    if(playerSelection === answers[2] && computerSelection === answers[0]) {
        score--;
        return "You Lose! Rock beats scissors."
    }
    if(playerSelection === answers[0] && computerSelection === answers[1]) {
        score--;
        return "You lose! Paper beats rock."
    }
    if(playerSelection === answers[1] && computerSelection === answers[2]) {
        score--;
        return "You lose! Scissors beats paper."
    }
    if(playerSelection === answers[0] && computerSelection === answers[2]) {
        score++;
        return "You win! Rock beats scissors."
    }
    if(playerSelection === answers[2] && computerSelection === answers[1]) {
        score++;
        return "You win! Scissors beat paper."
    }
    if(playerSelection === answers[1] && computerSelection === answers[0]) {
        score++;
        return "You win! Paper beats rock."
    }
    if(playerSelection !== answers[0] && playerSelection !== answers[1] && playerSelection !== answers[2]) {
        wrongInputFound = true;
        return "Error! Wrong input! You can only type 'rock', 'paper' or 'scissors' as your answer. Please try again."
    }
    if(playerSelection === computerSelection) {
        return "You tied with the computer! Try again."
    }
}

let computerSelection = computerPlay();
let playerSelection;

const game = () => {
    if (roundsPlayed >= roundsToPlay) {
        console.clear();
        console.log(`The game is over! You got ${score} score.`)
        if(score >= 3) {
            console.log("You got 3 or more score, you win!!");
        } else if(score < 3) {
            console.log("You got less than 3 in score, you lose. Better luck next time!");
        }
        console.log("Resetting game...")
        setInterval(restartGame(), 5000);
        return;
    }
    if (wrongInputFound === true) {
        console.clear();
        console.log(`Your input was: ${playerSelection}.`);
        wrongInputFound = false;
        game();
    }
    if(roundsPlayed <= roundsToPlay) {
        while(playerSelection === undefined) {
            playerSelection = window.prompt("Rock, Paper, Scissors!");
        }

        console.clear();
        console.log(`Your input was: ${playerSelection}.`);
        console.log(`The computer chose: ${computerSelection}.`);
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        console.log(`Your score is now ${score}.`)
        roundsPlayed++;
        console.log(roundsPlayed);
        playerSelection = undefined;
        game();
    }
}

const restartGame = () => {
    roundsPlayed = 0;
    score = 0;
    console.log("Completed!");
    game();
}

game();