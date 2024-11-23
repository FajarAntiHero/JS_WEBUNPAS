/*
Perulangan for dalam JavaScript adalah salah satu struktur perulangan yang paling umum digunakan untuk menjalankan blok kode secara berulang berdasarkan kondisi tertentu. 
Dengan for, kita dapat mengontrol jumlah iterasi atau pengulangan sesuai kebutuhan, baik dengan increment (meningkat) atau decrement (menurun) setiap iterasi.

for (inisialisasi; kondisi; perubahan) {
  // Blok kode yang akan dijalankan setiap iterasi
}

Setiap bagian dari perulangan for berfungsi sebagai berikut:
    Inisialisasi: Menyatakan variabel (biasanya counter) yang hanya dijalankan sekali di awal perulangan.
    Kondisi: Dievaluasi sebelum setiap iterasi. Jika bernilai true, blok kode di dalam for dijalankan. Jika false, perulangan berhenti.
    Perubahan: Ekspresi yang dieksekusi di akhir setiap iterasi. Biasanya digunakan untuk meningkatkan (i++) atau mengurangi (i--) nilai variabel counter.
*/

/*
Kata kunci continue dalam JavaScript digunakan dalam loop (seperti for, while, atau do...while) untuk melanjutkan ke iterasi berikutnya, melewati kode yang ada setelahnya dalam iterasi saat ini. 
Saat continue dieksekusi, loop akan langsung menuju ke iterasi berikutnya, melewati sisa kode dalam blok yang sama.
*/

/*
Menggunakan for dengan Array
for juga sering digunakan untuk mengakses elemen-elemen dalam array. Misalnya, mencetak setiap elemen dalam sebuah array
*/
let buah = ["Apel", "Jeruk", "Mangga"];
console.log("=========================================")
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

/*
Loop Bersarang (Nested for Loops)
Anda juga dapat menempatkan satu for loop di dalam for loop lain, biasanya digunakan untuk bekerja dengan struktur data dua dimensi seperti matriks atau tabel.
*/
console.log("=========================================")
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      console.log(`i = ${i}, j = ${j}`);
    }
}
console.log("=========================================")
/*
for...in adalah jenis perulangan khusus dalam JavaScript yang digunakan untuk mengiterasi properti-properti objek atau indeks dari elemen array. 
Tidak seperti for loop biasa, for...in lebih berfokus pada pengaksesan properti dalam objek atau elemen indeks dalam array tanpa mengharuskan Anda menentukan jumlah iterasi secara manual.

for (variabel in objek) {
  // Blok kode yang dijalankan untuk setiap properti
}

variabel: Biasanya merupakan variabel yang akan menyimpan nama properti (atau indeks untuk array) yang sedang diakses pada setiap iterasi.
objek: Objek atau array yang akan diiterasi.

Kapan Menggunakan for...in
    Mengiterasi Properti Objek: for...in sangat cocok untuk objek, karena memberikan akses langsung ke setiap properti dalam objek tersebut.
    Tidak Disarankan untuk Array: Meskipun for...in dapat digunakan dengan array, lebih baik menggunakan for...of atau for biasa, karena for...in juga akan mengiterasi properti yang mungkin ditambahkan ke array sebagai properti non-indeks.
*/
const mahasiswa = {
    nama: "Budi",
    umur: 20,
    jurusan: "Teknik Informatika"
  };
  
  for (let properti in mahasiswa) {
    console.log(properti + ": " + mahasiswa[properti]);
}

buah = ["Apel", "Jeruk", "Mangga"];
console.log("=========================================")
for (let indeks in buah) {
  console.log(`Perulangan Index Ke ${indeks} : ${buah[indeks]}`);
}

/*
for...of adalah perulangan khusus di JavaScript yang digunakan untuk mengiterasi elemen-elemen dalam iterable, yaitu objek yang bisa diiterasi, seperti array, string, Map, Set, dan objek lainnya yang mendukung iterasi. 
Tidak seperti for...in yang mengiterasi indeks atau nama properti, for...of bekerja langsung dengan nilai-nilai elemen tersebut, menjadikannya lebih sederhana dan mudah dibaca saat berurusan dengan array atau koleksi data lainnya.

for (variabel of iterable) {
  // Blok kode yang dijalankan untuk setiap elemen
}
*/
buah = ["Apel", "Jeruk", "Mangga"];
console.log("=========================================")
for (let item of buah) {
  console.log(item);
}

/*
Menggunakan for...of dengan String
Karena string juga bersifat iterable, kita bisa menggunakan for...of untuk mengakses setiap karakter dalam string.
*/
const teks = "Halo";
console.log("=========================================")
for (let karakter of teks) {
  console.log(karakter);
}

/*
Menggunakan for...of dengan Map
for...of juga mendukung objek Map, yang sering digunakan untuk menyimpan pasangan kunci-nilai. Saat digunakan dengan Map, setiap iterasi menghasilkan pasangan [key, value].
*/
// mahasiswa = new Map([
//     ["nama", "Budi"],
//     ["umur", 20],
//     ["jurusan", "Teknik Informatika"]
// ]);
  
// for (let [kunci, nilai] of mahasiswa) {
//     console.log(`${kunci}: ${nilai}`);
// }

/* 
Menggunakan for...of dengan Set
for...of juga berfungsi dengan Set, yang merupakan koleksi data yang tidak mengizinkan duplikasi. Dalam Set, for...of mengiterasi setiap elemen unik.
*/
const angka = new Set([1, 2, 3, 4, 4, 5]);
console.log("=========================================")
for (let item of angka) {
  console.log(item);
}
console.log("=========================================")
/*
Kata Kunci break dan continue dalam for...of
Anda dapat menggunakan break dan continue untuk mengendalikan alur iterasi dalam for...of, seperti pada loop lainnya.
*/
angka1 = [1, 2, 3, 4, 5];

for (let item of angka1) {
  if (item === 3) {
    break; // Hentikan loop ketika item adalah 3
  }
  console.log(item);
}
console.log("=========================================")
for (let item of angka1) {
  if (item === 3) {
    continue; // Lewati angka 3
  }
  console.log(item);
}
console.log("=========================================")

/*
Menggunakan for...of dengan Object (Objek Literal)
Perlu diingat bahwa for...of tidak bekerja langsung dengan objek biasa ({}), karena objek tidak bersifat iterable. 
Jika ingin mengiterasi objek, gunakan Object.keys(), Object.values(), atau Object.entries() untuk mengubah objek menjadi iterable.
*/
mahasiswa1 = {
    nama: "Budi",
    umur: 20,
    jurusan: "Teknik Informatika"
};

//Contoh Menggunakan Object.keys() dengan for...of
//Jika kita ingin mengiterasi kunci (property names) dari suatu objek:
for (let kunci of Object.keys(mahasiswa1)) {
    console.log(kunci + ": " + mahasiswa1[kunci]);
}
console.log("=========================================")
//Contoh Menggunakan Object.values() dengan for...of
//Jika kita ingin mengiterasi nilai (property values) dari suatu objek:
for (let nilai of Object.values(mahasiswa)) {
    console.log(nilai);
}
console.log("=========================================")

//Contoh Menggunakan Object.entries() dengan for...of
//Object.entries() mengembalikan array dari pasangan [kunci, nilai], memungkinkan kita mengiterasi keduanya.
for (let [kunci, nilai] of Object.entries(mahasiswa)) {
    console.log(`${kunci}: ${nilai}`);
}
console.log("=========================================")

/*
=========================Perbedaan Antara for...in dan for...of====================
Aspek	                                        for...in	                                          for...of
Penggunaan	                                  Mengiterasi properti atau indeks	                  Mengiterasi nilai elemen
Ideal untuk	                                  Objek,juga dapat digunakan dengan array	            Array, string, Map, Set, iterable lainnya
Akses ke Properti	                            Mengakses nama properti atau indeks	                Mengakses nilai elemen
Termasuk Properti Non-Indeks	                Ya, mengiterasi properti non-indeks dalam array	    Tidak, hanya mengiterasi nilai elemen
Urutan Iterasi	                              Tidak terjamin untuk objek	                        Mengikuti urutan elemen iterable
Mendukung Objek Literal	                      Ya	                                                Tidak langsung, harus dijadikan iterable
*/
  