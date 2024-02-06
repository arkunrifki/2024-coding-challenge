// function invert(array) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     result[i] = array[i] * -1;
//   }

//   return result;
// }

// const invert = (array) => array.map((x) => -x);

// const invert = (array) => {
//   return array.map((x) => -x);
// };

const invert = (array) => {
  return array.map((x) => x * -1);
};
console.log(invert([1, 2, 3, 4, 5]));
