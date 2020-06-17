const questions = [
  { question: 'How many planets are in the Solar System?', answer: 8 },
  { question: 'How many continents are there?', answer: 7 },
  { question: 'How many legs does an insect have?', answer: 6 },
  { question: 'What year was JavaScript created?', answer: 1995 }
];
const correct = [];
const incorrect = [];
let correctAnswers = 0;

const print = (message) => document.querySelector('main').innerHTML = message;

questions.forEach((question) => {
  let answer = question.answer;
  let response = +prompt(question.question);
  if (response === answer) {
    correctAnswers++;
    correct.push(question.question);
  } else {
    incorrect.push(question.question);
  }
});

const createList = (array) => {
  let list = `<ol>`;
  array.forEach((item) => list += `<li>${item}</li>`);
  list += `</ol>`;
  return list;
}

let result = `<h1>You got ${correctAnswers} question(s) right.<h1>`;
result += `<h2>You got these questions right:</h2>`;
result += createList(correct);
result += `<h2>You got these questions wrong:</h2>`;
result += createList(incorrect);

print(result);

