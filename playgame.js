function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const outcome = determineWinner(playerChoice, computerChoice);
    displayResult(outcome, playerChoice, computerChoice);
}

const getComputerChoice = () => {
    const randomNumber = Math.random();
    return randomNumber < 0.33 ? "rock" : randomNumber < 0.66 ? "paper" : "scissors";
}

const displayResult = function(outcome, playerChoice, computerChoice) {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `You ${outcome}! You chose ${playerChoice}, computer chose ${computerChoice}.`;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tied";
    }
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        return "won";
    } else {
        return "lost";
    }
}

const attachClickListeners = () => {
    const buttons = document.getElementById("buttons").querySelectorAll("button");
    buttons.forEach(button => button.addEventListener("click", () => playRound(button.id)));
}

function getComputerChoiceCheat(cheat = false) {
    return cheat ? "scissors" : getComputerChoice();
}

document.addEventListener("DOMContentLoaded", function() {
    attachClickListeners();
});
