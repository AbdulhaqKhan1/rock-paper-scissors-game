document.getElementById('rock').addEventListener("click", () => handleChoice("rock"));
document.getElementById('paper').addEventListener("click", () => handleChoice("paper"));
document.getElementById('scissors').addEventListener("click", () => handleChoice("scissors"));

function handleChoice(userChoice) {
    const bot = botChoice();
    alert(bot);
}

function botChoice() {
    const choices = ["rock", "paper", "scissors"];
    const length = choices.length;  
    const random = Math.floor(Math.random() * length);
    return choices[random];
}

if (botChoice === "rock") {
    alert("Bot chose rock");

    else if (botChoice === "paper") {
        alert("Bot chose paper");
    }

    else if (botChoice === "scissors") {
        alert("Bot chose scissors");
    }

    alert("You chose " + userChoice);
    alert("Bot chose " + botChoice());

    if (userChoice === botChoice()) {
        alert("It's a tie");

    } else if (
        (userChoice === "rock" && botChoice() === "scissors") || // In JavaScript, && represents the Logical AND operator. It is used to evaluate two or more expressions and returns a result based on their truthiness or falsiness
        //In JavaScript, you use the && operator (logical AND) for several key purposes:
        // Combining Conditions: The most common use is to combine multiple conditions in if statements or other conditional logic. The && operator returns true only if all of its operands are true. If even one operand is false, the entire expression evaluates to false

        (userChoice === "paper" && botChoice() === "rock") ||  //In JavaScript, || represents the Logical OR operator. It is used to evaluate two operands and returns a value based on their "truthiness".
        //Here's how it works:
        //Evaluates from left to right: The || operator first evaluates the left-hand operand.
        //Short-circuiting:
        //If the left-hand operand is "truthy" (evaluates to true when converted to a boolean), the operator immediately returns the original value of the left-hand operand and does not evaluate the right-hand operand.
        //If the left-hand operand is "falsy" (evaluates to false when converted to a boolean), the operator then evaluates the right-hand operand and returns its original value.
        (userChoice === "scissors" && botChoice() === "paper")

    ) {
        alert("You win");
    } else {
        alert("You lose");
    }
}