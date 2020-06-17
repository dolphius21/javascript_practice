const questions = [
  ['How many planets are in the Solar System?', 8],
  ['How many legs does an insect have?', 6],
  ['What year was JavaScript created?', 1995]
];
const correct = [];
const incorrect = [];
let correctAnswers = 0;

const print = (message) => document.querySelector('main').innerHTML = message;

questions.forEach((question) => {
  let answer = question[1]
  let response = +prompt(question[0]);
  if (response === answer) {
    correctAnswers++;
    correct.push(question[0]);
  } else {
    incorrect.push(question[0]);
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

