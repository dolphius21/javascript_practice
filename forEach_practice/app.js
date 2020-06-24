// Practice 1
const numbers = [1, 2, 3, 4, 5];
let total = 0;

numbers.forEach(number => total += number);

console.log(total);


// Practice 2
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

days.forEach(day => dayAbbreviations.push(day.slice(0, 2)));

console.log(dayAbbreviations);


// Practice 3
const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

stringPrices.forEach(price => priceTotal += parseFloat(price));

console.log(priceTotal);


// Practice 4
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

alphabets.forEach(alphabet => {
  if (alphabet !== 'L') {
    noel.push(alphabet);
  }
});

console.log(noel);


// Practice 5
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

percentages.forEach(percentage => {
  if (percentage > 50) {
    upperRange.push(percentage);
  }
});

console.log(upperRange);


// Practice 6
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

colors.forEach(color => {
  if (color[1] === 'F') {
    filteredColors.push(color);
  }
});

console.log(filteredColors);


// Practice 7
const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

months.forEach(month => capitalizedMonths.push(month.toUpperCase()));

console.log(capitalizedMonths);
