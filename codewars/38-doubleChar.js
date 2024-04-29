// Learn Data Structure with JavaScript
// Coding Challenge 2024 28/366
// Challenge 2024 28. doubleChar
// https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript

// function doubleChar(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     result += str[i];
//   }
//   return result;
// }

const doubleChar = (str) =>
  str
    .split("")
    .map((el) => (el += el))
    .join("");
console.log(doubleChar("abcd"));
