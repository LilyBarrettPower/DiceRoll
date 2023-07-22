# DiceRoll

Public repo for Dice roll, random number generator

To create a dice roll webpage that you can choose how many side there are on the dice,
Click the dice image to roll the dice and a random number between 1 and the selected number of sides is generated

Functionalities:

- Function to generate a random number
  Math.random
  Math.floor
- Ensure the number is between 1 and the side selected
  parseInt(selected sides);
  Will need to add 1
- Animation to imitate dice roll
  image.style.animation = "rollAnimation 1s ease-in-out"
- Set a timout for the animation
- The dice rolls onclick of the image
  addEventListener("click)
