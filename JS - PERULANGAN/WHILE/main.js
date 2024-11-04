/*
while adalah jenis perulangan (loop) dalam JavaScript yang menjalankan blok kode selama kondisi tertentu bernilai true. 
Loop ini sering digunakan ketika kita tidak tahu pasti berapa kali perulangan harus dilakukan, tetapi hanya ingin berhenti ketika kondisi spesifik terpenuhi.

while (kondisi) {
  // Blok kode yang akan dijalankan selama kondisi bernilai true
}

kondisi: Ekspresi atau pernyataan yang akan diperiksa sebelum setiap iterasi. Jika bernilai true, loop akan terus berjalan. Jika bernilai false, loop akan berhenti.
Blok kode: Bagian ini akan terus dijalankan berulang kali selama kondisi masih bernilai true.

*/
let angka = 1;

while (angka <= 5) {
  console.log(angka);
  angka++; // Mengubah nilai angka agar perulangan tidak berjalan selamanya
}

/*
Sangat penting untuk memastikan kondisi while pada akhirnya akan menjadi false, atau loop akan berjalan tanpa henti (infinite loop). 
Misalnya, jika kita lupa menambahkan angka++ dalam contoh di atas, maka loop akan terus mencetak 1 tanpa berhenti. 
*/
let angkaAcak = Math.floor(Math.random() * 10) + 1;

while (angkaAcak !== 7) {
  console.log("Angka yang ditemukan: " + angkaAcak);
  angkaAcak = Math.floor(Math.random() * 10) + 1; // Menghasilkan angka acak baru
}

console.log("Berhasil menemukan angka 7!");

/*
Penggunaan break dalam while
Anda dapat menggunakan kata kunci break untuk menghentikan loop while meskipun kondisi belum menjadi false. 
Ini berguna untuk menghentikan loop berdasarkan kondisi tertentu di dalam blok kode.
*/
let hitung = 0;

while (true) {
  console.log(hitung);
  hitung++;

  if (hitung === 5) {
    break; // Hentikan loop ketika hitung mencapai 5
  }
}

/*
Penggunaan continue dalam while
continue digunakan untuk melewati iterasi saat ini dan melanjutkan ke iterasi berikutnya. 
Misalnya, jika kita ingin melewatkan angka tertentu dalam loop:
*/
angka = 0;

while (angka < 10) {
  angka++;
  
  if (angka === 5) {
    continue; // Lewati iterasi ketika angka adalah 5
  }
  
  console.log(angka);
}

/*
Perbedaan while dan do...while
JavaScript juga memiliki loop do...while, yang mirip dengan while tetapi memiliki perbedaan penting dalam cara evaluasi kondisinya:
    while: Mengevaluasi kondisi di awal sebelum menjalankan blok kode. Jika kondisi bernilai false dari awal, blok kode tidak akan dijalankan sama sekali.
    do...while: Mengevaluasi kondisi di akhir setelah menjalankan blok kode. Ini berarti bahwa blok kode akan dijalankan setidaknya satu kali, meskipun kondisi awalnya false.
*/
angka = 5;

while (angka < 5) {
  console.log("Ini dari while: " + angka);
}

do {
  console.log("Ini dari do...while: " + angka);
} while (angka < 5);
//Pada while, kondisi angka < 5 langsung diperiksa, dan karena angka bernilai 5, loop tidak dijalankan sama sekali.
//Pada do...while, blok kode dijalankan terlebih dahulu sebelum kondisi diperiksa. Maka, walaupun angka < 5 adalah false, pesan tetap tercetak sekali.