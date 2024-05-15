/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 46/366
Challenge 2024 46. past
=======================================
*/
// const past = (h, m, s) => h * 3600000 + m * 60000 + s * 1000;
const past = (h, m, s) => 1000 * (3600 * h + 60 * m + s);

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
console.log(past(0, 0, 0));
console.log(past(1, 0, 1));
