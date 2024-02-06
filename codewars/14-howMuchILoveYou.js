// function howMuchILoveYou(nbPetals) {
//   // your code
//   let petals = [
//     "I love you",
//     "a little",
//     "a lot",
//     "passionately",
//     "madly",
//     "not at all",
//   ];
//   return petals[nbPetals % 6];
// }

const howMuchILoveYou = (nbPetals) => {
  let phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];
  // Operator modulo digunakan untuk menemukan sisa yang sesuai dengan indeks dalam array frasa
  // Karena array diindeks dari 0, kita mengurangi 1 dari nbPetals sebelum menerapkan operasi modulo

  return phrases[(nbPetals - 1) % 6];
};

console.log(howMuchILoveYou(7));
