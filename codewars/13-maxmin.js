// Coding Challenge 2024 8/366

// https://codewars.com/kata/577a98a6ae28071780000989/

// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// };

// var max = function (list) {
//   let maxValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (list[i] > maxValue) {
//       maxValue = list[i];
//     }
//   }
//   return maxValue;
// };

// Menggunakan Math min dan max javaScript
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// Menggunakan apply javaScript
// const min = (list) => Math.min.apply(null, list);
// const max = (list) => Math.max.apply(null, list);

// Menggunakan reduce javaScript
const min = (list) => list.reduce((a, b) => (a < b ? a : b));
const max = (list) => list.reduce((a, b) => (a > b ? a : b));

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
