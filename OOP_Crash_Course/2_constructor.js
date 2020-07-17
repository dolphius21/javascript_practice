// Constructor
function Book(title, author, year) {
   this.title = title;
   this.author = author;
   this.year = year;
   this.getSummary = () => {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
}

// Instantiate an object
const book1 = new Book("Philosopher's Stone", "J.K Rowling", "1997");
const book2 = new Book("The Final Empire", "Brandon Sanderson", "2006");

console.log(book1);
console.log(book1.title);
console.log(book1.getSummary());
console.log(book2.getSummary());