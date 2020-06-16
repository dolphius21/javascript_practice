const students = [
  { name: 'Jeffrey', track: 'Front End Web Development', achievements: '221', points: '56,931' },
  { name: 'Annie', track: 'Java Web Development', achievements: '219', points: '46,781' },
  { name: 'Troy', track: 'Object-Oriented PHP', achievements: '194', points: '40,321' },
  { name: 'Abed', track: 'Learn Ruby', achievements: '253', points: '59,531' },
  { name: 'Britta', track: 'Data Analysis', achievements: '178', points: '38,792' },
  { name: 'Pierce', track: 'Web Design', achievements: '187', points: '40,036' },
  { name: 'Shirley', track: 'Rails Development', achievements: '210', points: '50,777' },
  { name: 'Jeffrey', track: 'Web Design', achievements: '122', points: '30,536' },
];

const print = (message) => {
  const output = document.getElementById('output');
  output.innerHTML = message;
};

const getStudentData = (student) => {
  let data = `<h2>Student: ${student.name}</h2>`;
  data += `<p>Track: ${student.track}</p>`;
  data += `<p>Points: ${student.points}</p>`;
  data += `<p>Achievements: ${student.achievements}</p>`;
  return data;
};

let found = false;
let result = '';

while (true) {
  let search = prompt('Search student Records: type a name [Jeffrey] (or type "quit" to end and see search results)');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  students.forEach((student) => {
    if (student.name.toLowerCase() === search.toLowerCase()) {
      result += getStudentData(student);
      found = true;
    }
  });
  if (found) {
    print(result);
  } else {
    print(`There's no student named ${search} in the records.`);
  }
}