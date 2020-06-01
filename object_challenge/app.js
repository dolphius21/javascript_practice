let html = '';
let student;
found = false;
let studentsFound = [];

function print(message) {
  document.getElementById('output').innerHTML = message;
}

function getStudentRecord(student) {
  let record = `<h2>Student: ${student.name}</h2>`;
  record += `<p>Track: ${student.track}</p>`;
  record += `<p>Points: ${student.points}</p>`;
  record += `<p>Achievements: ${student.achievements}</p>`;
  return record;
}

while (true) {
  let search = prompt(`Search student records: [John] (or type "quit" to exit.)`);
  if ( search === null || search.toLowerCase() === 'quit' ) {
    break;
  }
  for ( let i = 0; i < students.length; i++) {
    student = students[i];
    if ( student.name.toLowerCase() === search.toLowerCase() ) {
      html += getStudentRecord(student);
      found = true;
    }
  }
  if (found){
    print(html);
  } else {
    print(`student ${search} is not found`);
  }
}

