// Learn Data Structure with JavaScript
// Coding Challenge 2024 22/366
// Challenge 2024 22. sumMix
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// function sumMix(x) {
//   let total = 0;
//   for (let i = 0; i < x.length; i++) {
//     total += parseInt(x[i]);
//   }
//   return total;
// }

// function sumMix(x) {
//   let total = 0;
//   for (let i = 0; i < x.length; i++) {
//     total += Number(x[i]);
//   }
//   return total;
// }

// function sumMix(x) {
//   let total = 0;
//   for (let i = 0; i < x.length; i++) {
//     total += +x[i];
//   }
//   return total;
// }

// Jika ada penjumlahan untuk menghasilkan satu nilai bisa menggunakan reduce
const sumMix = (x) => x.reduce((acc, curr) => acc + +curr, 0);

console.log(sumMix([9, 3, "7", "3"]));
