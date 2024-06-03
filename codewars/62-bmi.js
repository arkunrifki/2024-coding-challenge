/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 48/366
Challenge 2024 48. bmi
Link : https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
=======================================
*/

// const bmi = (weight, height) => {
//   const result = weight / (height * height);
//   if (result <= 18.5) {
//     return "Underweight";
//   } else if (result <= 25.0) {
//     return "Normal";
//   } else if (result <= 30) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// };

const bmi = (weight, height, bmi = weight / (height * height)) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25.0
    ? "Normal"
    : bmi <= 30
    ? Overweight
    : Obese;
console.log(bmi(80, 1.8));
console.log(bmi(80, 1.8));
