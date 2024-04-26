// Learn Data Structure with JavaScript
// Coding Challenge 2024 14/366
// Challenge 2024 14. Count Sheep

// function countSheep(num) {
//   let sheep = "";

//   for (let i = 1; i <= num; i++) {
//     sheep += i + " sheep...";
//   }

//   return sheep;
// }

// function countSheep(num) {
//   let sheep = "";

//   for (let i = 1; i <= num; i++) {
//     sheep += "${i} + sheep...";
//   }

//   return sheep;
// }

const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");

console.log(countSheep(3));
console.log(countSheep(1));
console.log(countSheep(2));
