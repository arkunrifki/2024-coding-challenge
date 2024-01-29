// Coding Challenge 2024 6/366

//www.codewars.com/kata/5556282156230d0e5e000089

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    rna += dna[i].replace("T", "U");
  }
  return rna;
}

console.log(DNAtoRNA("GCAT"));
