const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

const print = (message) => document.querySelector('main').innerHTML = `<p>${message}</p>`;

if ( !search ) {
  message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if (inStock.includes(search.toLowerCase())) {
  message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search.toLowerCase()) + 1} on the list!`;
} else {
  message = `Sorry, we don't have <strong>${search}</strong> in stock.`;
}

print(message);