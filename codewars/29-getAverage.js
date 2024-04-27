// Learn Data Structure with JavaScript
// Coding Challenge 2024 20/366
// Challenge 2024 20. getAverage
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

// function getAverage(marks) {
//   //TODO : calculate the downward rounded average of the marks array
//   let total = 0;
//   for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
//   }
//   return Math.floor(total / marks.length);
// }

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, curr) => acc + curr, 0) / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
