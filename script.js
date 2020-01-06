let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generate the target number
const generateTarget = () => {
    const randNum = Math.floor(Math.random() * 10);
    return randNum;
}

// Get distance between guess and target
const getAbsoluteDistance = (guess, target) => {
    const diff = Math.abs(guess - target);
    return diff;
}

// Figure out whether the human or the computer was closer
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    // Ensure guess is valid
    let guessValid = validateHumanGuess(humanGuess);

    if (guessValid === false) {
        alert("That number is out of range! You have lost this round.");
        return false;
    } else {
        // Compare distances
        const humanDiff = getAbsoluteDistance(humanGuess, secretTarget);
        const computerDiff = getAbsoluteDistance(computerGuess, secretTarget);

        // Determine winner
        if (humanDiff <= computerDiff) {
            return true; // Human was closest or there was a tie (human wins)
        } else {
            return false; // Computer was closest (computer wins)
        } 
    }
}

// Add 1 to the score of the winner
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
}

// Add 1 to the number of rounds
const advanceRound = () => {
    currentRoundNumber += 1;
}

// Validate whether human has guessed an integer between (including) 0 and 9
const validateHumanGuess = (guess) => {
    if (Number.isInteger(parseFloat(guess)) && guess >= 0 && guess <= 9) {
        return true;
    } else {
        return false;
    }
}