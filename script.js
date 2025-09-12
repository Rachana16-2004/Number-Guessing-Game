let randomNumber;
let attempts;
let gameOver = false;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    document.getElementById('feedback').textContent = '';
    document.getElementById('attempts').textContent = '';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementById('guessInput').disabled = false;
} 

function checkGuess() {
    if (gameOver) return;

    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    if (guess < randomNumber) {
        document.getElementById('feedback').textContent = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        document.getElementById('feedback').textContent = 'Too high! Try again.';
    } else {
        document.getElementById('feedback').textContent = `Congratulations! You guessed the number!`;
        document.getElementById('attempts').textContent = `It took you ${attempts} attempts.`;
        document.getElementById('resetButton').style.display = 'inline-block';
        gameOver = true;
        document.getElementById('guessInput').disabled = true;
    }
}

function resetGame() {
    startGame();
    document.getElementById('guessInput').value = '';
    document.getElementById('guessInput').focus();
}
window.onload = startGame;

