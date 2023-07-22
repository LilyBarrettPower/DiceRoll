function rollDice() {
    const dice = document.getElementById("dice");
    const result = document.getElementById("result");
    const diceSidesSelect = document.getElementById("diceSides");

    dice.style.animation = "rollAnimation 1s ease-in-out";

    setTimeout (() => {
        const selectedDiceSides = parseInt(diceSidesSelect.value);
        const number = Math.floor(Math.random() * selectedDiceSides) + 1;
        
    })
}