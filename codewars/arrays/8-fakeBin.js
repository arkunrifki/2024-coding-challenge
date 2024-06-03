/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 47/366
Challenge 2024 47. fakeBin
Link : https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript
=======================================
*/

function fakeBin(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5) {
      console.log(0);
    } else {
      console.log(1);
    }
  }
}

console.log(fakeBin("45385593107843568"));
