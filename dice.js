function rollDice() {
    const dice = document.getElementById("dice");
    const resultE = document.getElementById("result");
    const diceSidesSelect = document.getElementById("diceSides");

    dice.style.animation = "rollAnimation 1s ease-in-out";

    setTimeout (() => {
        const selectedDiceSides = parseInt(diceSidesSelect.value);
        const number = Math.floor(Math.random() * selectedDiceSides) + 1;

        dice.innerHTML = `<img src="dice.png" alt="Dice Image" id="rollButton">`;
        resultE.textcontent = number;

        setTimeout(() => {
            dice.style.animation = "";
        }, 100);

        setTimeout(() => {
            resultE.style.display = "none";
        }, 3000);
    }, 1000);
}

document.body.addEventListener("click", function(event) {
    if (event.target.id === "rollButton") {
        rollDice();
    }
});