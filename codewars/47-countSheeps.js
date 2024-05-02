/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 37/366
Challenge 2024 37. countSheeps
==============
*/

const countSheeps = (sheep) => (count = sheep.filter(Boolean).length);

console.log(countSheeps([]));
console.log(countSheeps([undefined]));
console.log(countSheeps([null]));
console.log(countSheeps([false]));
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
