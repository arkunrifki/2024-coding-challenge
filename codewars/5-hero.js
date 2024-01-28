// Coding Challenge 2024 3/366

//www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(bullets, dragons) {
//   if (bullets / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hero(bullets, dragons) {
//   return bullets / 2 >= dragons;
// }

const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));
