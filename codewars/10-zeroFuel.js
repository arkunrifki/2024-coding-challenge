// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
//   //   if (distanceToPump <= mpg * fuelLeft) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }

//   //   return distanceToPump <= mpg * fuelLeft;
//   return distanceToPump / mpg <= fuelLeft;
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  distanceToPump / mpg <= fuelLeft;

console.log(zeroFuel(100, 50, 1));
