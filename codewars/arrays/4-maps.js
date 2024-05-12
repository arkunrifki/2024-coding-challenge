/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 43/366
Challenge 2024 43. maps
Link : https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
==============
*/

// function maps(x) {
//   let result = [];
//   for (let i = 0; i < x.length; i++) {
//     result.push(x[i] * 2);
//   }
//   return result;
// }

const maps = (x) => x.map((element) => element * 2);

console.log(maps([1, 2, 3]));
