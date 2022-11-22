let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// My version:
const compareGuesses = (humanScore, computerScore, generateTarget) => {
  if (
    Math.abs(generateTarget - humanScore) <=
    Math.abs(generateTarget - computerScore)
  ) {
    return true;
  } else {
    return false;
  }
};

// Alternate version:
/*const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
};*/

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
