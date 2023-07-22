function rollDice() {
    const dice = document.getElementById("dice");
    const resultElement = document.getElementById("result");
    const diceSidesSelect = document.getElementById("diceSides");

    dice.style.animation = "rollAnimation 1s ease-in-out";

    setTimeout (() => {
        const selectedDiceSides = parseInt(diceSidesSelect.value);
        const randomNumber = Math.floor(Math.random() * selectedDiceSides) + 1;

        dice.innerHTML = `<img src="dice.png" alt="Dice Image" id="rollButton">`;
        resultElement.textContent = randomNumber;
        resultElement.style.display = "inline";
        resultElement.style.fontWeight = "bold";

        setTimeout(() => {
            dice.style.animation = "";
        }, 50);

        setTimeout(() => {
            resultElement.style.display = "none";
        }, 2000);
    }, 1000);
}

document.body.addEventListener("click", function(event) {
    if (event.target.id === "rollButton") {
        rollDice();
    }
});