// const simpleArraySum = (ar) => {
//   let sum = 0;
//   for (let i = 0; i < ar.length; i++) {
//     sum += ar[i];
//   }
//   return sum;
// };

const simpleArraySum = (ar) => ar.reduce((a, b) => a + b, 0);

console.log(simpleArraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
