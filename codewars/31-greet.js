// Learn Data Structure with JavaScript
// Coding Challenge 2024 21/366
// Challenge 2024 21. greet
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

// function greet(name, owner) {
//   if (name === owner) return "Hello boss";
//   if (name !== owner) return "Hello Guest";
// }

const greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest");
console.log(greet("Daniel", "Daniel"));
console.log(greet("Greg", "Daniel"));
