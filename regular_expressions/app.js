let re;
re = /hello/;
re = /hello/g; // g = global search
re = /hello/i; // i = case insensitive

console.log(re);
console.log(re.source);

// exec() - Returns result in an array or null
const result1 = re.exec('hello world');

console.log(result1);
console.log(result1[0]);
console.log(result1.index);
console.log(result1.input);


// test() - Returns true or false
const result2 = re.test('Hello');

// Returns false because of the uppercase 'H'
console.log(result2);


// match() - Returns result array or null
const str = 'Hello There';
const result3 = str.match(re);
console.log(result3);

// search() - Returns index of the first match, if not found, returns -1
const str2 = 'Hello There';
const result4 = str2.search(re);
console.log(result4);

// replace() - Returns new string with some or all matches of a pattern
const str3 = 'Hello There';
const newStr = str3.replace(re, 'Hi');
console.log(newStr);