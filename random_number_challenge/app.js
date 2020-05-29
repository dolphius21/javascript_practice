// Collect input from a user
const inputLow = prompt('Please provide your lowest number');
const inputHigh = prompt('Please provide your highest number');

// Convert the input to a number
const numberLow = parseInt(inputLow);
const numberHigh = parseInt(inputHigh);

if (numberLow && numberHigh) {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor(Math.random() * (numberHigh - numberLow + 1)) + numberLow;

  // Create a message displaying the random number
  document.querySelector('main').innerHTML = `<h1>${randomNumber} is a random number between ${numberLow} and ${numberHigh}</h1>`;
} else {
  document.querySelector('main').innerHTML = `<h1>You need to provide a number, click refresh.</h1>`;
}