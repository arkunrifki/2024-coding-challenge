// Learn Data Structure with JavaScript
// Coding Challenge 2024 27/366
// Challenge 2024 27. quarterOfmonkeyCount
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

// const quarterOf = (month) => {
//   if (month <= 3) {
//     return 1;
//   } else if (month <= 6) {
//     return 2;
//   } else if (month <= 9) {
//     return 3;
//   } else if (month <= 12) {
//     return 4;
//   }
// };

//Pakai Ternary
// const quarterOf = (month) =>
//   month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;

const quarterOf = (month) => Math.ceil(month / 3);

console.log(quarterOf(3));
