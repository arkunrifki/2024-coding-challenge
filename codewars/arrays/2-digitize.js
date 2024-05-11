/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 41/366
Challenge 2024 41. digitize
==============
*/

function numberToArray(number) {
  if (number === 0) {
    return [0];
  }

  let result = [];
  let isNegative = false;

  if (number < 0) {
    isNegative = true;
    number *= -1;
  }

  while (number > 0) {
    let digit = number % 10;
    result.unshift(digit);
    number = Math.floor(number / 10);
  }

  if (isNegative) {
    result.unshift("-");
  }

  return result;
}

// Contoh penggunaan:
let number = -12345;
let resultArray = numberToArray(number);
console.log(resultArray);

console.log(digitize(35231));
