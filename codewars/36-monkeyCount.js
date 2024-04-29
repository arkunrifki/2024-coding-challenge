// Learn Data Structure with JavaScript
// Coding Challenge 2024 26/366
// Challenge 2024 26. monkeyCount
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/javascript

// function monkeyCount(n) {
//   const result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//   }
//   return result;
// }

const monkeyCount = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(monkeyCount(5));
