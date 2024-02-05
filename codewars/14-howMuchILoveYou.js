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
  return phrases[nbPetals % 7];
};
console.log(howMuchILoveYou(7));
