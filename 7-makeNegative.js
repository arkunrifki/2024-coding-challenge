// function makeNegative(num) {
//   if (num > 0) {
//     return -num;
//   } else {
//     return num;
//   }
// }

// const makeNegative = (num) => -Math.abs(num);
const makeNegative = (num) => (num < 0 ? num : -num);
console.log(makeNegative(42));
