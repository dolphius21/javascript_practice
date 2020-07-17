// Constructor
function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
}

// getSummary
Book.prototype.getSummary = function() {
   return `${this.title} was written by ${this.author} in ${this.year}`; 
}

// getAge
Book.prototype.getAge = function() {
   const years = new Date().getFullYear() - this.year;
   return `${this.title} is ${years} years old`
}

// Revised / Change Year
Book.prototype.revise = function(newYear) {
   this.year = newYear;
   this.revised = true;
}

// Instantiate an object
const book1 = new Book("Philosopher's Stone", "J.K Rowling", "1997");
const book2 = new Book("The Final Empire", "Brandon Sanderson", "2006");

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());
console.log(book2.getAge());

console.log(book2);
book2.revise('2019');
console.log(book2);