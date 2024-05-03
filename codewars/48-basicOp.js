/* 
==============
Learn Data Structure with JavaScript
Coding Challenge 2024 38/366
Challenge 2024 38. basicOp
==============
*/

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   } else if (operation === "-") {
//     return value1 - value2;
//   } else if (operation === "*") {
//     return value1 * value2;
//   } else if (operation === "/") {
//     return value1 / value2;
//   }
// }

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//       break;
//     case "-":
//       return value1 - value2;
//       break;
//     case "/":
//       return value1 / value2;
//       break;
//     case "*":
//       return value1 * value2;
//       break;
//     default:
//       break;
//   }
// }

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
