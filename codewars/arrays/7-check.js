/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 49/366
Challenge 2024 49. check
Link : https://www.codewars.com/kata/57cc975ed542d3148f00015b/solutions/javascript
=======================================
*/

// function check(a, x) {
//   return a.includes(x);
// }

const check = (a, x) => a.includes(x);
console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check([101, 45, 75, 105, 99, 107], 109));
console.log(check(["what", "a", "great", "kata"], "kat"));
