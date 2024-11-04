/**
Pengkondisian dalam JavaScript digunakan untuk membuat keputusan dalam kode, yaitu menjalankan kode tertentu berdasarkan kondisi yang sudah ditentukan. 
Ini adalah konsep dasar dalam pemrograman yang memungkinkan Anda mengontrol alur program berdasarkan situasi tertentu. 
Berikut adalah beberapa cara umum untuk melakukan pengkondisian dalam JavaScript:

*/

/*
1. if...else Statement
    Struktur if...else adalah bentuk pengkondisian paling dasar di JavaScript. 
    Pengkondisian ini digunakan untuk mengeksekusi kode jika suatu kondisi benar (true), dan mengeksekusi kode lain jika kondisi tersebut salah (false). 
*/
let umur = 20;

if (umur >= 18) {
  console.log("Anda sudah dewasa.");
} else {
  console.log("Anda masih di bawah umur.");
}

/*
2. if...else if...else Statement
    Struktur ini berguna jika Anda ingin memeriksa beberapa kondisi. 
    Hanya satu blok kode yang akan dieksekusi, yaitu blok yang memenuhi kondisi pertama yang benar.
*/
let nilai = 85;

if (nilai >= 90) {
  console.log("Nilai Anda adalah A");
} else if (nilai >= 80) {
  console.log("Nilai Anda adalah B");
} else if (nilai >= 70) {
  console.log("Nilai Anda adalah C");
} else {
  console.log("Nilai Anda di bawah standar");
}

/*    
3. switch Statement
    switch digunakan jika Anda memiliki banyak kondisi yang harus diperiksa berdasarkan satu variabel. 
    Setiap kondisi di switch disebut sebagai "case". 
    switch biasanya digunakan untuk membandingkan nilai langsung, bukan ekspresi.
*/
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu");
    break;
  default:
    console.log("Hari tidak dikenal");
    break;
}

/*
4. Ternary Operator
    Ternary operator (? :) adalah cara singkat untuk menulis if...else statement. 
    Operator ini digunakan untuk ekspresi sederhana.
*/
let usia = 18;
let status = (usia >= 18) ? "Dewasa" : "Di bawah umur";
console.log(status);

/*
5. Logical Operators dalam Pengkondisian
    Anda juga dapat menggabungkan beberapa kondisi menggunakan operator logika seperti && (AND) dan || (OR).
        && (AND): Mengembalikan true hanya jika semua kondisi bernilai true.
        || (OR): Mengembalikan true jika salah satu kondisi bernilai true.
*/
let angka = 10;

if (angka > 5 && angka < 15) {
  console.log("Angka berada di antara 5 dan 15.");
}

if (angka < 5 || angka > 15) {
  console.log("Angka berada di luar rentang 5 dan 15.");
}
/*
6. Nullish Coalescing Operator (??)
    ?? adalah operator yang mengembalikan operand pertama jika operand tersebut bukan null atau undefined. 
    Jika tidak, operand kedua yang akan dikembalikan. 
    Ini tidak langsung berfungsi untuk pengkondisian, tetapi sering dipakai untuk menentukan nilai default.
*/
let nama = null;
let namaPengguna = nama ?? "Pengguna Tidak Dikenal";
console.log(namaPengguna); // Output: "Pengguna Tidak Dikenal"