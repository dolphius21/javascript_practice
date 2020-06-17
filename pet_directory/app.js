const pets = [
  { name: 'Jeff', type: 'Dog', breed: 'Australian Shepherd', age: 8, imgSrc: 'aussie.jpg' },
  { name: 'Britta', type: 'Dog', breed: 'Dachshund', age: 6, imgSrc: 'dachshund.jpg' },
  { name: 'Annie', type: 'Dog', breed: 'Golden Retriever', age: 6, imgSrc: 'golden.jpg' },
  { name: 'Troy', type: 'Cat', breed: 'Persian', age: 4, imgSrc: 'persian.jpg' },
  { name: 'Abed', type: 'Dog', breed: 'Pug', age: 4, imgSrc: 'pug.jpg' },
  { name: 'Shirley', type: 'Cat', breed: 'Domestic Shorthair', age: 7, imgSrc: 'tabby.jpg' }
];

let directory = '';

const print = (message) => document.querySelector('main').innerHTML = message;

pets.forEach((pet) => {
  directory += `<h2>${pet.name}</h2>`;
  directory += `<h3>${pet.type} | ${pet.breed}</h3>`;
  directory += `<h3>Age: ${pet.age}</h3>`;
  directory += `<img src="img/${pet.imgSrc}">`
});

print(directory);