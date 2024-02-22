// Cara untuk membuat Object pada Javascript


// 1. Object Literal
// Tidak obfektif jika objec nya banyak
// let mahasiswa = {
//   //Properti
//   nama: "Fikri",
//   energi: 10,

//   //Method
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa1 = {
//   //Properti
//   nama: "Samsul",
//   energi: 20,

//   //Method
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan!`);
//   },
// };

// console.log(mahasiswa);
// console.log(mahasiswa.energi);
// mahasiswa.makan(4);
// console.log(mahasiswa.energi);

// console.log(mahasiswa1);
// console.log(mahasiswa1.energi);
// mahasiswa1.makan(4);
// console.log(mahasiswa1.energi);


// 2. Function Declarration

// membuat satu object yang memiliki 2 method
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  //Membuat properti yang diambil dari object methodMahasiswa
  mahasiswa.makan = methodMahasiswa.makan;
  mahasiswa.main = methodMahasiswa.main;

  return mahasiswa;
}

let arkun = Mahasiswa("Arkun", 10);
let samsul = Mahasiswa("Samsul", 20);

// 3. Constructor Declaration
// 4. Object.create
