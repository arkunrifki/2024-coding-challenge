// Learn Data Structure with JavaScript
// Coding Challenge 2024 18/366
// Challenge 2024 18. arrayPlusArray

// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   //   mencari total
//   for (let i = 0; i < arr1.length; i++) {
//     total += arr1[i];
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     total += arr2[i];
//   }
//   return total;
// }

//Menggunakan arguments javaScript
// function arrayPlusArray(arr1, arr2) {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       total += arguments[i][j];
//     }
//   }
// }

//menggunakan reduce
const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((a, b) => a + b, 0);

//

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
