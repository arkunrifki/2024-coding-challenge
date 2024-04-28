// const areaOrPerimeter = function (l, w) {
//   // Return your answer
//   if (l === w) {
//     return l * w;
//   } else {
//     return 2 * l + 2 * w;
//   }
// };

// Memakai ternary
const areaOrPerimeter = (l, w) => {
  return l === w ? l * w : 2 * (l + w);
};

console.log(areaOrPerimeter(3, 3));
