// Learn Data Structure with JavaScript
// Coding Challenge 2024 19/366
// Challenge 2024 19. getGrade
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

function getGrade(...s) {
  // Code here
  const score = s.reduce((acc, curr) => acc + curr / s.length);
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(70, 70, 100));
