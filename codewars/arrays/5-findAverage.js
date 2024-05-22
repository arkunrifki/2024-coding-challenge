/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 47/366
Challenge 2024 47. findAverage
=======================================
*/

function findAverage(array) {
  array.length === 0 ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
