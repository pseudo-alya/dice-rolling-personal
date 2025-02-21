function rollDice() {
    const diceImage = document.getElementById("diceImage");
    const diceNumberText = document.getElementById("diceNumber");
    const rollButton = document.getElementById("rollButton");

    // Disable button to prevent rapid clicks during the roll
    rollButton.disabled = true;

    // Optional: Play dice roll sound (ensure dice-sound.mp3 is in your directory)
    const diceSound = new Audio("dice-sound.mp3");
    diceSound.play();

    // Remove existing animation class before re-adding it
    diceImage.classList.remove("dice-roll");

    // Force reflow (triggers a DOM recalculation)
    void diceImage.offsetWidth;

    // Add animation class to dice image
    diceImage.classList.add("dice-roll");

    // Wait for animation to finish before updating the dice
    setTimeout(() => {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `dice${diceRoll}.png`;
        diceNumberText.textContent = `You rolled: ${diceRoll}`;

        // Re-enable the roll button
        rollButton.disabled = false;
    }, 1000); // 1s matches the animation duration
}

// Use event listener instead of inline onclick
document.getElementById("rollButton").addEventListener("click", rollDice);
