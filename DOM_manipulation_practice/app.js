// 1: Set the text of the <h1> element
const heading = document.querySelector('h1');
heading.innerHTML = 'Hobbies';

// 2: Set the color of the <h1> to a different color
heading.style.color = 'teal';

// 3: Set the content of the '.desc' paragraph
// The content should include at least one HTML tag
const paragraph = document.querySelector('.desc');
paragraph.innerHTML = 'Lorem <i>Ipsum</i> dolor sit amet';

// 4: Set the class of the <ul> to 'list'
const list = document.querySelector('ul');
list.className = 'list';

// 5: Create a new list item and add it to the <ul>
const item = document.createElement('li');
item.innerHTML = '<input> Eat ice cream';
list.appendChild(item);

// 6: Change all <input> elements from text fields to checkboxes
const input = document.getElementsByTagName('input');
console.log(input);
for (let i = 0; i < input.length; i++) {
  input[i].type = 'checkbox';
}

// 7: Create a <button> element, and set its text to 'Delete'
// Add the <button> inside the '.extra' <div>
const button = document.createElement('button');
const extraDiv = document.querySelector('.extra');
button.appendChild(document.createTextNode('delete'));
extraDiv.appendChild(button);

// 8: Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete' button
button.addEventListener('click', () => {
  extraDiv.parentElement.removeChild(extraDiv);
});