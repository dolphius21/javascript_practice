const randomNumber = getRandomNumber(10);
let guess;
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  attempts += 1;
} while ( +guess !== randomNumber )

document.write(`<p>It took ${attempts} tries to guess the number ${randomNumber}</p>`);