// Maps = key-value pairs - can use any type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
      key2 = {},
      key3 = () => {};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');

// Get Values by Keys
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count Values
console.log(map1.size);

// Iterating thru Maps

// Loop using for...of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

// Iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// Loop thru forEach
map1.forEach((value, key) => console.log(`${key} = ${value}`));


// Convert to arrays

const keyValArray = Array.from(map1);
const valArray = Array.from(map1.values());

console.log(keyValArray);
console.log(valArray);