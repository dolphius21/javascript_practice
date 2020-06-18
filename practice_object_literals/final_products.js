// 1. Create an array named products.
// 2. Add objects to the array. Each object should be a single product, with the following 4 properties. 
// Make up the values for the properties, just make sure the inventory is a whole number (it's the number of that product currently in stock) and unit_price is a floating point number like 45.99
// -- name
// -- inventory
// -- unit_price

const products = [
  { name: 'egg', inventory: 23, unitPrice: 1.99 },
  { name: 'tomato', inventory: 14, unitPrice: 2.99 },
  { name: 'onion', inventory: 17, unitPrice: 1.99 }
];

// 3. Create a function named listProducts(). The function should accept 1 parameter -- the array of products. It should return an array of just the names of the products.

const listProducts = (array) => {
  let productName = [];
  array.forEach(product => productName.push(product.name));
  return productName;
};

// 4. Call the listProducts() function and log the returned value to the console.

console.log(listProducts(products));

// 5. Create a function names totalValue(). The function should accept 1 parameter -- the array of products. It should return the total value of all of the products in the array. You calculate the value of one product by multiplying the inventory value by the unit_price value

const totalValue = (array) => {
  let total = 0;
  array.forEach(product => total += (product.inventory * product.unitPrice));
  return total;
};

// 6. Call the totalValue() function and log the returned value to the console.

console.log(totalValue(products));