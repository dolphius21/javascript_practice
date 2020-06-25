// Example 1

const usersProfile = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 24},
  {name: 'Beatrice', age: 26}
];

newUsersObj = usersProfile.reduce((usersObj, user) => {
  usersObj[user.name] = user.age;
  return usersObj;
}, {});

console.log(newUsersObj);


// Example 2

const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];

const filteredNames = userNames
  .filter(name => name[0] === 'S')
  .map(name => ({ name }));

console.log(filteredNames);


// //  Example 3

// const users = [
//   {name: 'Samir', age: 27},
//   {name: 'Angela', age: 33},
//   {name: 'Beatrice', age: 42},
//   {name: 'Shaniqua', age: 30},
//   {name: 'Marvin', age: 23},
//   {name: 'Sean', age: 47}
// ];

// const usersAge30AndOver = users
//   .filter(user => user.age >= 30)
//   .map(user => user.name);

// console.log(usersAge30AndOver);


// Example 4

const products = [
  { name: 'hard drive', price: 59.99 },
  { name: 'lighbulbs', price: 2.59 },
  { name: 'paper towels', price: 6.99 },
  { name: 'flatscreen monitor', price: 159.99 },
  { name: 'cable ties', price: 19.99 },
  { name: 'ballpoint pens', price: 4.49 }
];

const highestPriceUnder10Dollars = products
  .filter(product => product.price < 10)
  .reduce((higherPrice, product) => {
    if (higherPrice.price < product.price) {
      return product;
    } 
    return higherPrice;
  });

console.log(highestPriceUnder10Dollars);

const totalPriceOver10Dollars = products
  .filter(product => product.price > 10)
  .reduce((total, product) => total + product.price, 0)
  .toFixed(2);

console.log(totalPriceOver10Dollars);


// Example 5

const movies = [
  ['The Day the Earth Stood Still', 'Superman', 'Ghostbusters'],
  ['Finding Dory'],
  ['Jaws', 'On the Waterfront']
]

const combinedMovies = movies.reduce((moviesArray, innerMovies) => [...moviesArray, ...innerMovies], []);

console.log(combinedMovies);

const users = [
  {
    name: 'Samir',
    age: 27,
    favoriteBooks:[
      {title: 'The Iliad'},
      {title: 'The Brothers Karamazov'}
    ]
  },
  {
    name: 'Angela',
    age: 33,
    favoriteBooks:[
      {title: 'Tenth of December'},
      {title: 'Cloud Atlas'},
      {title: 'One Hundred Years of Solitude'}
    ]
  },
  {
    name: 'Beatrice',
    age: 42,
    favoriteBooks:[
      {title: 'Candide'}
    ]
  }
];

const favBooks = users
  .reduce((booksArray, user) => [...booksArray, ...user.favoriteBooks], [])
  .map(book => book.title);

console.log(favBooks);


// Example 6

const customers = [
  {
    name: "Tyrone",
    personal: {
      age: 33,
      hobbies: ["Bicycling", "Camping"]
    }
  },
  {
    name: "Elizabeth",
    personal: {
      age: 25,
      hobbies: ["Guitar", "Reading", "Gardening"]
    }
  },
  {
    name: "Penny",
    personal: {
      age: 36,
      hobbies: ["Comics", "Chess", "Legos"]
    }
  }
];

const hobbies = customers
  .map(customer => customer.personal)
  .reduce((hobbiesArray, personal) => [...hobbiesArray, ...personal.hobbies], []);

console.log(hobbies);
