// Learn Data Structure with JavaScript
// Coding Challenge 2024 15/366
// Challenge 2024 15. maxmin

// var min = function (list) {
//   let minValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     // Apabila list[i] lebih kecil dari minValue
//     // Maka list[i] ditetapkan sebagai minValue
//     if (minValue > list[i]) {
//       minValue = list[i];
//     }
//   }
//   return minValue;
// };

// var max = function (list) {
//   let maxValue = list[0];
//   for (let i = 1; i < list.length; i++) {
//     if (maxValue < list[i]) {
//       maxValue = list[i];
//     }
//   }
//   return maxValue;
// };

// titik tiga untuk mengubah dari 
[1,2,3] = 1,2,3
// Menggunakan Math min dan max javaScript
// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);

// Menggunakan apply javaScript
// const min = (list) => list.reduce((a, b) => (a < b ? a : b));
// const max = (list) => list.reduce((a, b) => (a > b ? a : b));

// Menggunakan shortest javaScript
const min = (list) => list.sort((a, b) => a - b)[0];
const max = (list) => list.sort((a, b) => b - a)[0];

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([42, 54, 65, 87, 0]));
console.log(max([5]));
