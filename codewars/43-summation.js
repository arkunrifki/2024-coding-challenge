/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 33/366
Challenge 2024 33. summation
==============
*/
/**
 * Calculates the sum of all numbers from 1 to a given number
 * @param {number} num - The upper limit of the range of numbers to sum
 * @returns {number} - The sum of all numbers from 1 to num
 */
const summation = (num) => {
  // Initialize the total to 0
  let total = 0;
  // Iterate from 1 to num and add each number to total
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  // Return the sum of all numbers from 1 to num
  return total;
};

console.log(summation(1));
console.log(summation(2));
console.log(summation(3));
