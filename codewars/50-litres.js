/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 40/366
Challenge 2024 40. litres
==============
*/

// function litres(time) {
//   var drinks = time * 0.5;
//   if (time % 0.5 === 0) {
//     return Math.floor(drinks);
//   }
//   return Math.floor(drinks);
// }

const litres = (time) => Math.floor(time * 0.5);
console.log(litres(2));
console.log(litres(3));
console.log(litres(1.4));
console.log(litres(12.3));

function calculate(value) {
  return value < 2 ? value : calculate(value - 1) + calculate(value - 2);
}

console.log(calculate(3));
