/*
Switch statement dalam JavaScript adalah bentuk pengkondisian yang digunakan untuk membuat keputusan berdasarkan nilai spesifik dari suatu variabel atau ekspresi. 
Switch berguna ketika Anda memiliki banyak kasus yang perlu diperiksa, terutama jika dibandingkan dengan penggunaan if...else if yang mungkin membuat kode tampak panjang dan rumit.

switch (expression) {
  case value1:
    // kode yang akan dijalankan jika expression === value1
    break;
  case value2:
    // kode yang akan dijalankan jika expression === value2
    break;
  // Anda dapat menambahkan case sebanyak yang dibutuhkan
  default:
    // kode yang akan dijalankan jika tidak ada case yang cocok
}
*/
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah Senin, waktunya rapat tim.");
    break;
  case "Selasa":
    console.log("Hari ini adalah Selasa, fokus pada pengembangan.");
    break;
  case "Rabu":
    console.log("Hari ini adalah Rabu, cek progres proyek.");
    break;
  case "Kamis":
    console.log("Hari ini adalah Kamis, sesi brainstorming.");
    break;
  case "Jumat":
    console.log("Hari ini adalah Jumat, persiapan laporan mingguan.");
    break;
  default:
    console.log("Hari libur atau tidak dikenal.");
}

/*
Menggunakan Fall-Through
Fall-through terjadi jika break tidak disertakan di akhir case, sehingga kode akan terus mengeksekusi case berikutnya. 
Ini bisa bermanfaat dalam beberapa situasi.
*/
let day = "Rabu";

switch (hari) {
  case "Senin":
  case "Selasa":
  case "Rabu":
    console.log("Hari kerja biasa.");
    break;
  case "Kamis":
  case "Jumat":
    console.log("Hari menjelang akhir pekan.");
    break;
  default:
    console.log("Hari libur atau tidak dikenal.");
}

/*
break Keyword
break digunakan untuk menghentikan eksekusi dalam sebuah switch setelah suatu kondisi case terpenuhi. 
Jika break tidak digunakan, JavaScript akan melanjutkan eksekusi ke case berikutnya, bahkan jika nilai case tersebut tidak cocok (dikenal sebagai fall-through). 
Dengan break, kita memastikan bahwa hanya kode dari case yang cocok yang dieksekusi, dan proses keluar dari switch.
*/
hari = "Rabu";

switch (hari) {
  case "Senin":
    console.log("Ini hari Senin");
    break;
  case "Selasa":
    console.log("Ini hari Selasa");
    break;
  case "Rabu":
    console.log("Ini hari Rabu");
    break;
  default:
    console.log("Hari tidak dikenal");
}

/*
default Keyword
default adalah blok opsional dalam switch yang berfungsi sebagai cadangan ketika tidak ada satu pun case yang cocok dengan expression. 
Jika semua case tidak memenuhi kondisi, maka default akan dieksekusi, mirip dengan else dalam struktur if...else.
*/
hari = "Minggu";

switch (hari) {
  case "Senin":
    console.log("Ini hari Senin");
    break;
  case "Selasa":
    console.log("Ini hari Selasa");
    break;
  case "Rabu":
    console.log("Ini hari Rabu");
    break;
  default:
    console.log("Hari tidak dikenal");
}