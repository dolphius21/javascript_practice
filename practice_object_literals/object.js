// 1. Create an object named book using object literal syntax
// 2. Add a title property to the book object and assign it a string value
// 3. Add an author property to the book object and assign it a string value
// 4. Add a publish_year to the book object and assign it a number to represent the year the book was published

const book = {
  title: `Harry Potter and the Sorcerer's Stone`,
  author: 'J.K. Rowling',
  publishYear: 1997
};

/* 5. Use a for-in loop to print the book object to the console so the final output looks something like this:
title: Harry Potter and the Sorcerer's Stone
author: J.K. Rowling
publish_year: 1997
*/

for (let bookProperty in book) {
  console.log(`${bookProperty}: ${book[bookProperty]}`);
}
