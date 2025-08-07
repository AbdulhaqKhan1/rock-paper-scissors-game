document.getElementById('rock').addEventListener("click", () => handleChoice("rock"));
document.getElementById('paper').addEventListener("click", () => handleChoice("paper"));
document.getElementById('scissors').addEventListener("click", () => handleChoice("scissors"));

function handleChoice(userChoice) {
    alert(userChoice);
}

function botChoice() {
    const choices = ["rock", "paper", "scissors"];
    const length = choices.length;
    const random = Math.floor(Math.random() * length);
    return choices[random];
}