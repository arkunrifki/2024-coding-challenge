/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 39/366
Challenge 2024 39. century
==============
*/

const century = (year) => {
  var centurys = year / 100;
  if (year % 100 === 0) {
    return centurys;
  } else {
    return centurys - (centurys % 1) + 1;
  }
};

// function century(year) {
//   return year % 100 == 0 ? year / 100 : Math.floor(year / 100) + 1;
// }

console.log(century(1705));
