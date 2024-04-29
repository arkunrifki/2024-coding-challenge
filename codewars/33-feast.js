// Learn Data Structure with JavaScript
// Coding Challenge 2024 23/366
// Challenge 2024 22. feast
// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

const feast = (beast, dish) =>
  beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];

console.log(feast("great blue heron", "garlic naan"));
