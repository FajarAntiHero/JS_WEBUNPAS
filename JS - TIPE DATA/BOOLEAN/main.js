/*
Tipe data Boolean dalam JavaScript adalah tipe data primitif yang hanya memiliki dua nilai: true atau false. 
Boolean digunakan untuk menyatakan kebenaran suatu kondisi dan sangat penting dalam logika pemrograman, terutama dalam struktur kendali seperti if-else, loop, dan operasi logika.

Karakteristik Tipe Data Boolean
    Nilai Boolean hanya memiliki dua kemungkinan: true (benar) atau false (salah).
    Tipe data ini banyak digunakan dalam evaluasi kondisi, yang membantu program menentukan apakah pernyataan tertentu harus dijalankan atau tidak.

Selain secara langsung, Boolean bisa diperoleh dari evaluasi ekspresi atau perbandingan. 
JavaScript akan otomatis mengembalikan true atau false tergantung pada hasil perbandingan atau kondisi.
*/

/*
Menggunakan Operator Perbandingan
Operator perbandingan seperti ===, !==, >, <, >=, dan <= menghasilkan nilai Boolean.
*/
let a = 5;
let b = 10;

console.log(a === b); // false, karena 5 tidak sama dengan 10
console.log(a < b);   // true, karena 5 lebih kecil dari 10

/*
Menggunakan Operator Logika
Operator logika seperti && (AND), || (OR), dan ! (NOT) menghasilkan nilai Boolean dengan menggabungkan beberapa ekspresi.
*/
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin); // false, karena salah satu bernilai false
console.log(isLoggedIn || isAdmin); // true, karena salah satu bernilai true
console.log(!isLoggedIn);           // false, karena nilai isLoggedIn adalah true

/*
Konversi ke Boolean
JavaScript memiliki konsep truthy dan falsy, yang berarti nilai selain true dan false dapat dianggap sebagai Boolean dalam konteks tertentu, seperti dalam pernyataan kondisi.
    Truthy: Nilai yang dianggap true saat dikonversi ke Boolean.
        Contoh: Semua angka non-nol (1, -5), string yang tidak kosong ("hello"), objek ({}), dan array ([]).
    Falsy: Nilai yang dianggap false saat dikonversi ke Boolean.
        Contoh: 0, "" (string kosong), null, undefined, NaN, dan false.
*/
console.log(Boolean(1));        // true, karena 1 adalah truthy
console.log(Boolean(0));        // false, karena 0 adalah falsy
console.log(Boolean("hello"));  // true, karena string non-kosong adalah truthy
console.log(Boolean(""));       // false, karena string kosong adalah falsy

console.log(!!1);               // true, sama seperti Boolean(1)
console.log(!!0);               // false, sama seperti Boolean(0)

/*
Penggunaan Boolean dalam Struktur Kendali
Boolean sering digunakan dalam struktur kendali seperti if, else if, while, dan for. Hanya jika kondisinya true, blok kode akan dijalankan.
*/
let isValid = true;

if (isValid) {
  console.log("Data is valid!"); // Blok ini dijalankan karena isValid adalah true
} else {
  console.log("Data is not valid!");
}

/*
Boolean comparison operators dalam JavaScript digunakan untuk membandingkan nilai dan menghasilkan hasil Boolean (true atau false). 
Operator ini sangat penting dalam pengambilan keputusan dan pengendalian alur program. 
*/
// Equality Operator (==): Operator ini membandingkan dua nilai dan mengembalikan true jika mereka sama, tanpa mempertimbangkan tipe data
console.log(5 == '5'); // Output: true, karena nilai sama
console.log(0 == false); // Output: true, karena 0 dianggap false

// Strict Equality Operator (===) : Operator ini juga membandingkan dua nilai, tetapi memperhitungkan tipe data. Hasilnya adalah true hanya jika kedua nilai sama dan memiliki tipe data yang sama.
console.log(5 === '5'); // Output: false, karena tipe data berbeda
console.log(0 === false); // Output: false, karena tipe data berbeda

// Inequality Operator (!=) : Operator ini membandingkan dua nilai dan mengembalikan true jika mereka tidak sama, tanpa mempertimbangkan tipe data.
console.log(5 != '5'); // Output: false, karena nilai sama
console.log(1 != true); // Output: false, karena 1 dianggap true

// Strict Inequality Operator (!==) : Operator ini membandingkan dua nilai dan mengembalikan true jika mereka tidak sama atau jika tipe data berbeda.
console.log(5 !== '5'); // Output: true, karena tipe data berbeda
console.log(0 !== false); // Output: true, karena tipe data berbeda

// Greater Than Operator (>) : Operator ini mengembalikan true jika operand kiri lebih besar dari operand kanan.
console.log(10 > 5); // Output: true
console.log(3 > 4); // Output: false

// Greater Than or Equal To Operator (>=) : Operator ini mengembalikan true jika operand kiri lebih besar atau sama dengan operand kanan.
console.log(5 >= 5); // Output: true
console.log(6 >= 10); // Output: false

// Less Than Operator (<) : Operator ini mengembalikan true jika operand kiri lebih kecil dari operand kanan.
console.log(3 < 5); // Output: true
console.log(10 < 2); // Output: false

// Less Than or Equal To Operator (<=) : Operator ini mengembalikan true jika operand kiri lebih kecil atau sama dengan operand kanan.
console.log(5 <= 5); // Output: true
console.log(8 <= 3); // Output: false