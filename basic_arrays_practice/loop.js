/*Note: We've supplied you a basic function for generating a random number from 1 to 100 */

const random100 = () => Math.floor(Math.random() * 100) + 1;

/* 1. Create a function named createRandomList that uses a for loop to create an array containing 10 random numbers from 1 to 100 (use the supplied function above to generate the numbers). The function should return that array. */

const createRandomList = () => {
  const randomNumbersArray = [];
  for (let i = 0; i < 10; i++) {
    randomNumbersArray.push(random100());
  }
  return randomNumbersArray;
};

/* 2. Call the createRandomList() function and store the results in a variable named myRandomList. */

const myRandomList = createRandomList();

/* 3. Use a for loop to access each element in the loop. Each time through the loop log a message to the console that looks something like this:
Item 0 in the array is 48
When you're done you should have output 10 lines to the console -- one for each element. 
*/

myRandomList.forEach((number, index) => {
  console.log(`Item ${index} in the array is ${number}`);
})

