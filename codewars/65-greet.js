/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 50/366
Challenge 2024 48. doubleInteger
https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
=======================================
*/

// function greet(name) {
//   if (name === "Johnny") {
//     return "Hello, my love!";
//   } else {
//     return "Hello, " + name + "!";
//   }
// }

const greet = (name) =>
  name === "Johnny" ? "Hello, my love!" : "Hello, " + name + "!";

console.log(greet("Jim"));
console.log(greet("Johnny"));
