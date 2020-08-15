// Destructuring Assignment
let a, b;
[a, b] = [100, 200];

console.log(a);
console.log(b);

// Rest Pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c:300, d: 400, e: 500 });

({ a, b, ...rest } = { a: 100, b: 200, c:300, d: 400, e: 500 });

console.log(a, b);
console.log(rest);

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

console.log(person1, person2, person3);

// Parse array returned from function
const getPeople = () => {
  return ['Annie', 'Troy', 'Abed'];
};

let char1, char2, char3;

[char1, char2, char3] = getPeople();

console.log(char1, char2, char3);

// Object Destructuring
const cast = {
  name: 'Jeff',
  age: '36',
  city: 'Denver',
  gender: 'Male'
}

// ES6 Destructuring
const { name, age, city } = cast;

console.log(name, age, city);