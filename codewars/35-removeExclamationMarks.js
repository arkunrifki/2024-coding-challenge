// Learn Data Structure with JavaScript
// Coding Challenge 2024 25/366
// Challenge 2024 25. removeExclamationMarks
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript

// function removeExclamationMarks(s) {
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "!") {
//       result += s[i];
//     }
//   }
//   return result;
// }

// ??Ini sering dipakai
// .split() .join() .replace() .replaceAll()
// Menggunakan .join()
const removeExclamationMarks = (s) => s.split("!").join("");
console.log(removeExclamationMarks("Hello World!"));
