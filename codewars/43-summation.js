/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 33/366
Challenge 2024 33. summation
==============
*/
// var summation = function (num) {
//   // Code here
//   let total = 0;
//   for (let i = 1; i <= num; i++) {
//     total += i;
//   }
//   return total;
// };
const summation = (n) => (n * (n + 1)) / 2;

console.log(summation(1));
console.log(summation(2));
console.log(summation(3));
