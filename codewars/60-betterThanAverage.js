/* 
=========================================
Learn Data Structure with JavaScript
Coding Challenge 2024 47/366
Challenge 2024 47. betterThanAverage
=======================================
*/

// function betterThanAverage(classPoints, yourPoints) {
//   const sum = classPoints.reduce((acc, curr) => acc + curr);
//   const average = sum / classPoints.length;
//   return yourPoints > average;
// }

const betterThanAverage = (classPoints, yourPoints) => {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
};

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
