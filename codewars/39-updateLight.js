// Learn Data Structure with JavaScript
// Coding Challenge 2024 29/366
// Challenge 2024 29. updateLight
// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

//Pakai Ternary
const updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";

console.log(updateLight("green"));
console.log(updateLight("yellow"));
console.log(updateLight("red"));
