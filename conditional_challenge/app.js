/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswers = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const answer1 = prompt(`Name a programming language that's also a gem`);
const answer2 = prompt(`Name a programming language that's also a snake`);
const answer3 = prompt(`What language do you use to style web pages?`);
const answer4 = prompt(`What language do you use to build the structure of web pages?`);
const answer5 = prompt(`What language do you use to add interactivity to a web page?`);

if ( answer1.toUpperCase() === 'RUBY') {
  correctAnswers += 1;
}
if ( answer2.toUpperCase() === 'PYTHON') {
  correctAnswers += 1;
}
if ( answer3.toUpperCase() === 'CSS') {
  correctAnswers += 1;
}
if ( answer4.toUpperCase() === 'HTML') {
  correctAnswers += 1;
}
if ( answer5.toUpperCase() === 'JAVASCRIPT') {
  correctAnswers += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( correctAnswers === 5 ) {
  rank = 'Gold';
} else if ( correctAnswers >= 3 ) {
  rank = 'Silver';
} else if ( correctAnswers >= 1 ) {
  rank = 'Bronze';
} else {
  rank = 'No crown';
}

// 6. Output results to the <main> element
main.innerHTML = `<h1>You got ${correctAnswers} out of 5 questions correct.</h1>
                  <h2>Rank earned: ${rank}</h2>`;
