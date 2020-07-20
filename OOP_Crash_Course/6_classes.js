class Book {
   constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
   }

   getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
   getAge() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} years old`;
   }

   revise(newYear) {
      this.year = newYear;
      this.revised = true;
   }

   static topBookStore() {
      return 'Barnes & Noble';
   }
}

// Instantiate
const book1 = new Book("Philosopher's Stone", "J.K Rowling", "1997");
const book2 = new Book("The Final Empire", "Brandon Sanderson", "2006");

console.log(book1);

for (let value in book1) {
   console.log(`${value}: ${book1[value]}`);
}

const keys = Object.keys(book1);
console.log(keys);