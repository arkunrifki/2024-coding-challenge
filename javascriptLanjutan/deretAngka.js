// Code mencari angka ke 100 di dalam deret angka berikut: 3, 5, 9, 15, 23, ...
const temukanAngka = (n) => {
  let angka = 3;
  let beda = 2;

  for (let i = 1; i < n; i++) {
    angka += beda;
    beda += 2;
  }
  return angka;
};

console.log(temukanAngka(100));
