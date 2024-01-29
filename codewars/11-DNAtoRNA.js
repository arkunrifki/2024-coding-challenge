// Coding Challenge 2024 6/366

//www.codewars.com/kata/5556282156230d0e5e000089

// function DNAtoRNA(dna) {
//   // create a function which returns an RNA sequence from the given DNA sequence
//   let rna = "";
//   for (let i = 0; i < dna.length; i++) {
//     rna += dna[i].replace("T", "U");
//   }
//   return rna;
// }

// const DNAtoRNA = (dna) => {
//   return dna
//     .split("")
//     .map((el) => (el === "T" ? "U" : el))
//     .join("");
// };

// const DNAtoRNA = (dna) => dna.replace(/T/g, "U");
// const DNAtoRNA = (dna) => dna.replaceAll("T", "U");
const DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("GCAT"));
