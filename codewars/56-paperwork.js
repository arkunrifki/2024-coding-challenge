/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 44/366
Challenge 2024 44. paperwork
==============
*/

// function paperwork(n, m) {
//   if (n > 0 && m > 0) {
//     return n * m;
//   } else {
//     return 0;
//   }
// }

const paperwork = (n, m) => (n > 0 && m > 0 ? n * m : 0);
console.log(paperwork(5, 5));
console.log(paperwork(5, -5));
console.log(paperwork(-5, -5));
