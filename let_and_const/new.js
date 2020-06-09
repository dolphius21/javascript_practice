const teachers = [
	{
		name: 'Ashley',
		topicArea: 'Javascript'
	}
];


const courses = [
	'Introducing JavaScript',
	'JavaScript Basics',
	'JavaScript Loops, Arrays and Objects',
	'Getting Started with ES2015',
	'JavaScript and the DOM',
	'DOM Scripting By Example'
];


let newTeachers = [
	{
		name: 'James',
		topicArea: 'Javascript'
	},
	{
		name: 'Treasure',
		topicArea: 'HTML & CSS'
	}
];

let javascript = teachers.filter(function(val) {
  return val.topicArea === 'Javascript';
});

function addNewTeachers(newTeachers) {
	// TODO: write a function that adds new teachers to the teachers array 
	teachers.push(...newTeachers);
}

function printTreehouseSummary() {
	// TODO: fix this function so that it prints the correct number of courses and   teachers 
	
  teachers.forEach((teachers) => {
    console.log(`${teachers.name} teaches ${teachers.topicArea}`);
  });

  let javascriptTeachersCount = teachers.filter(val => val.topicArea === 'Javascript').length;
	
  console.log(`Treehouse has ${courses.length} JavaScript courses, and ${javascriptTeachersCount} Javascript teachers`);
}

addNewTeachers(newTeachers);
printTreehouseSummary();