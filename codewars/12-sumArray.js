// Coding Challenge 2024 7/366

// https://www.codewars.com/kata/576b93db1129fcf2200001e6/

// function sumArray(array) {
//   // Cek apakah array ada dan panjangnya lebih dari 1
//   if (!array || array.length <= 1) {
//     return 0;
//   }

//   // Mencari max dan min
//   let max = Math.max(...array);
//   let min = Math.min(...array);
//   let sum = 0;

//   // Mencari angka yang bukan max dan min
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== max && array[i] !== min) {
//       sum += array[i];
//     }
//   }

//   return sum;
// }

// const sumArray = (array) => {
//   if (!array || array.length <= 1) return 0;
//   let max = Math.max(...array);
//   let min = Math.min(...array);
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== max && array[i] !== min) sum += array[i];
//   }
//   return sum;
// };

function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }

  let max = Math.max(...array);
  let min = Math.min(...array);
  let sum = 0;
  let maxFound = false;
  let minFound = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === max && !maxFound) {
      maxFound = true;
      continue;
    }
    if (array[i] === min && !minFound) {
      minFound = true;
      continue;
    }
    sum += array[i];
  }

  return sum;
}

console.log(sumArray([-6, -20, -1, -10, -12]));
