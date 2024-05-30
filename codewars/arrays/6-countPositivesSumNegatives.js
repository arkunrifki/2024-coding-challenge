/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 50/366
Challenge 2024 48. countPositivesSumNegatives
Link : https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
=======================================
*/

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
function countPositivesSumNegatives(input) {
  if (input == null || input.length === 0) {
    return [];
  }
  let countPositive = 0;
  let countNegative = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositive++;
    } else {
      countNegative += input[i];
    }
  }
  return [countPositive, countNegative];
}

console.log(countPositivesSumNegatives(testData));
