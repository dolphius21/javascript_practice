let questions = [
  ['How many states are in teh United States?', 50],
  ['How many legs does an insect have?', 6],
  ['How many continents are there?', 7]
];
let correctAnswers = 0;
let question;
let answer;
let response;
let html;
let correct = [];
let wrong = [];

function print(message) {
  document.getElementById('output').innerHTML = message;
}

function buildList(array) {
  let listHTML = `<ol>`;
  for (let i = 0; i < array.length; i++) {
    listHTML += `<li>${array[i]}</li>`;
  }
  listHTML += `</ol>`;
  return listHTML;
}

for (let i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = parseInt(prompt(question));
  if ( response === answer) {
    correct.push(question);
    correctAnswers += 1; 
  } else {
    wrong.push(question);
  }
}

html = `<p>You got ${correctAnswers} question(s) right.</p>`;
html += `<h2> You got these question(s) right:`;
html += buildList(correct);
html += `<h2> You got these question(s) wrong:`;
html += buildList(wrong);
print(html);

