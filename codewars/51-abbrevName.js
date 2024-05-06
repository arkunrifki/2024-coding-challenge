/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 41/366
Challenge 2024 41. abbrevName
==============
*/
// function abbrevName(name) {
//   const [firstName, lastName] = name.split(" ");
//   const initials = `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
//   return initials;
// }

const abbrevName = (name) =>
  name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");

console.log(abbrevName("Sam Harris")); // Output: "S.H"
console.log(abbrevName("patrick feeney")); // Output: "P.F"
