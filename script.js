document.getElementById('rock').addEventListener("click", () => handleChoice("rock"));
document.getElementById('paper').addEventListener("click", () => handleChoice("paper"));
document.getElementById('scissors').addEventListener("click", () => handleChoice("scissors"));

    function handleChoice(userChoice) {
      const bot = botChoice();
      
    function botChoice() {
      const choices = ["rock", "paper", "scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }

      alert("You chose " + userChoice);
      alert("Bot chose " + bot);

      if (bot === "rock") {
        alert("Bot chose rock");
      } else if (bot === "paper") {
        alert("Bot chose paper");
      } else if (bot === "scissors") {
        alert("Bot chose scissors");
      }

      if (userChoice === bot) {
        alert("It's a tie");
      } else if (
        (userChoice === "rock" && bot === "scissors") ||
        (userChoice === "paper" && bot === "rock") ||
        (userChoice === "scissors" && bot === "paper")
      ) {
        alert("You win");
      } else {
        alert("You lose");
      }
    }



// In JavaScript, && represents the Logical AND operator. It is used to evaluate two or more expressions and returns a result based on their truthiness or falsiness
        //In JavaScript, you use the && operator (logical AND) for several key purposes:
        // Combining Conditions: The most common use is to combine multiple conditions in if statements or other conditional logic. The && operator returns true only if all of its operands are true. If even one operand is false, the entire expression evaluates to false  
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND  
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

         //What does || do in JavaScript?
        // The logical OR ( || ) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values.

         //In JavaScript, || represents the Logical OR operator. It is used to evaluate two operands and returns a value based on their "truthiness".
        //Here's how it works:
        //Evaluates from left to right: The || operator first evaluates the left-hand operand.
        //Short-circuiting:
        //If the left-hand operand is "truthy" (evaluates to true when converted to a boolean), the operator immediately returns the original value of the left-hand operand and does not evaluate the right-hand operand.
        //If the left-hand operand is "falsy" (evaluates to false when converted to a boolean), the operator then evaluates the right-hand operand and returns its original value.