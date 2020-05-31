const upper = 10000;
const randomNumber = getRandomNumber(upper);
let guess;
let attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while ( guess !== randomNumber ) {
  guess = getRandomNumber(10000);
  attempts += 1;
}

document.write(`<p>The random number was: ${randomNumber}</p>`);
document.write(`<p>It took the computer ${attempts} attempts to get it right.</p>`);
