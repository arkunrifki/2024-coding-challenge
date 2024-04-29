// Learn Data Structure with JavaScript
// Coding Challenge 2024 24/366
// Challenge 2024 24. rentalCarCost
//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// function rentalCarCost(d) {
//   // Your solution here
//   let diskon = 0;
//   if (d >= 3) {
//     diskon = 20;
//   }
//   if (d >= 7) {
//     diskon = 50;
//   }
//   return d * 40 - diskon;
// }

const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
console.log(rentalCarCost(1));
console.log(rentalCarCost(2));
console.log(rentalCarCost(3));
console.log(rentalCarCost(8));
