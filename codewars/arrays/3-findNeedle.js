/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 43/366
Challenge 2024 43. findNeedle
==============
*/

var haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
var haystack_2 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "needle",
  "something somebody lost a while ago",
];
var haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === "needle") {
//       return "found the needle at position " + i;
//     }
//   }
// }

// Menggunakan index of untuk menemukan target value dalam array
const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
console.log(findNeedle(haystack_3));
