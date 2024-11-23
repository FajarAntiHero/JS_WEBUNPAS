/*
Dalam JavaScript, operator adalah simbol atau kata kunci yang digunakan untuk melakukan operasi pada nilai atau variabel. 
Operator dapat digunakan dalam berbagai cara, seperti perhitungan matematika, perbandingan, penggabungan string, dan manipulasi data.
*/

/*
1. Operator Aritmatika
Digunakan untuk melakukan operasi matematika dasar.
    + (Penjumlahan): Menambahkan dua nilai. Contoh: 5 + 3 hasilnya 8.
    - (Pengurangan): Mengurangkan satu nilai dari nilai lainnya. Contoh: 5 - 3 hasilnya 2.
    * (Perkalian): Mengalikan dua nilai. Contoh: 5 * 3 hasilnya 15.
    / (Pembagian): Membagi satu nilai dengan nilai lainnya. Contoh: 10 / 2 hasilnya 5.
    % (Modulus): Menghasilkan sisa pembagian dua nilai. Contoh: 10 % 3 hasilnya 1.
    ** (Eksponen): Mengangkat nilai ke pangkat tertentu. Contoh: 2 ** 3 hasilnya 8.
*/
let a = 10;
let b = 3;

let addition = a + b;          // 13
let subtraction = a - b;       // 7
let multiplication = a * b;    // 30
let division = a / b;          // 3.3333333333333335
let modulus = a % b;           // 1
let exponentiation = a ** b;   // 1000

// console.log("Addition:", addition);
// console.log("Subtraction:", subtraction);
// console.log("Multiplication:", multiplication);
// console.log("Division:", division);
// console.log("Modulus:", modulus);
// console.log("Exponentiation:", exponentiation);

document.getElementById("1").innerHTML = `Operasi Penjumlahan = ${a} + ${b} = ${addition}`
document.getElementById("2").innerHTML = `Operasi Pengurangan = ${a} - ${b} = ${subtraction}`
document.getElementById("3").innerHTML = `Operasi Perkalian = ${a} * ${b} = ${multiplication}`
document.getElementById("4").innerHTML = `Operasi Pembagian = ${a} / ${b} = ${division}`
document.getElementById("5").innerHTML = `Operasi Modulus = ${a} % ${b} = ${modulus}`

/*
2. Operator Penugasan
Digunakan untuk menetapkan nilai ke variabel.
    = (Penugasan): Menetapkan nilai di sebelah kanan ke variabel di sebelah kiri. Contoh: let x = 5.
    += (Penugasan Tambahan): Menambahkan nilai ke variabel dan menetapkan hasilnya. Contoh: x += 3 sama dengan x = x + 3.
    -= (Penugasan Pengurangan): Mengurangi nilai dari variabel dan menetapkan hasilnya. Contoh: x -= 2.
    *= (Penugasan Perkalian): Mengalikan nilai variabel dengan nilai tertentu. Contoh: x *= 4.
    /= (Penugasan Pembagian): Membagi nilai variabel dengan nilai tertentu. Contoh: x /= 2.
    %= (Penugasan Modulus): Menghitung modulus nilai variabel dengan nilai tertentu. Contoh: x %= 2.
*/
let x = 5;

x += 3;  // x = x + 3, jadi x sekarang 8
x -= 2;  // x = x - 2, jadi x sekarang 6
x *= 4;  // x = x * 4, jadi x sekarang 24
x /= 3;  // x = x / 3, jadi x sekarang 8
x %= 5;  // x = x % 5, jadi x sekarang 3

console.log("Final value of x:", x); // Output: 3

/*
3. Operator Perbandingan
Digunakan untuk membandingkan dua nilai dan mengembalikan true atau false.
    == (Sama Dengan): Memeriksa apakah dua nilai sama. Contoh: 5 == '5' mengembalikan true.
    === (Identik): Memeriksa apakah dua nilai dan tipe data sama. Contoh: 5 === '5' mengembalikan false.
    != (Tidak Sama Dengan): Memeriksa apakah dua nilai berbeda. Contoh: 5 != '5' mengembalikan false.
    !== (Tidak Identik): Memeriksa apakah dua nilai atau tipe data berbeda. Contoh: 5 !== '5' mengembalikan true.
    > (Lebih Besar): Memeriksa apakah nilai di sebelah kiri lebih besar dari nilai di sebelah kanan. Contoh: 5 > 3 mengembalikan true.
    < (Lebih Kecil): Memeriksa apakah nilai di sebelah kiri lebih kecil dari nilai di sebelah kanan. Contoh: 5 < 3 mengembalikan false.
    >= (Lebih Besar atau Sama Dengan): Contoh: 5 >= 3 mengembalikan true.
    <= (Lebih Kecil atau Sama Dengan): Contoh: 5 <= 5 mengembalikan true.
*/
let num1 = 10;
let num2 = "10";

console.log(num1 == num2);    // true (nilai sama, tipe berbeda)
console.log(num1 === num2);   // false (nilai sama, tipe berbeda)
console.log(num1 != num2);    // false (nilai sama)
console.log(num1 !== num2);   // true (nilai sama, tipe berbeda)
console.log(num1 > 5);        // true
console.log(num1 < 5);        // false
console.log(num1 >= 10);      // true
console.log(num1 <= 10);      // true

/*
4. Operator Logika
Digunakan untuk operasi logika, sering digunakan dalam pernyataan kondisi.
    && (Logika DAN): Mengembalikan true jika kedua operand bernilai true. Contoh: (5 > 3 && 2 < 4) mengembalikan true.
    || (Logika ATAU): Mengembalikan true jika salah satu operand bernilai true. Contoh: (5 > 3 || 2 > 4) mengembalikan true.
    ! (Logika TIDAK): Membalikkan nilai boolean. Contoh: !(5 > 3) mengembalikan false.
*/
let isStudent = true;
let hasID = false;

console.log(isStudent && hasID);  // false (keduanya harus true)
console.log(isStudent || hasID);  // true (salah satu harus true)
console.log(!isStudent);          // false (membalikkan nilai boolean isStudent)

/*
5. Operator Bitwise
Mengoperasikan data dalam bentuk bit. Biasanya digunakan dalam operasi tingkat rendah.
    & (AND): Mengembalikan 1 jika kedua bit bernilai 1.
    | (OR): Mengembalikan 1 jika salah satu bit bernilai 1.
    ^ (XOR): Mengembalikan 1 jika salah satu bit bernilai 1, tapi tidak keduanya.
    ~ (NOT): Membalik semua bit.
    << (Left Shift): Menggeser bit ke kiri.
    >> (Right Shift): Menggeser bit ke kanan.
*/
let p = 5;  // 5 = 0101 dalam biner
let q = 3;  // 3 = 0011 dalam biner

console.log(p & q);  // 1 (0001 dalam biner)
console.log(p | q);  // 7 (0111 dalam biner)
console.log(p ^ q);  // 6 (0110 dalam biner)
console.log(~p);     // -6 (membalik semua bit)
console.log(p << 1); // 10 (menggeser bit ke kiri, 1010 dalam biner)
console.log(p >> 1); // 2 (menggeser bit ke kanan, 0010 dalam biner)

/*
6. Operator Ternary
Merupakan operator kondisional singkat, digunakan sebagai pengganti if-else.
    Bentuk: kondisi ? nilaiJikaBenar : nilaiJikaSalah.
    Contoh: let result = (5 > 3) ? 'Yes' : 'No'; akan memberikan nilai Yes.
*/
let age = 20;
let canVote = (age >= 18) ? "Yes, you can vote!" : "No, you're too young to vote.";

console.log(canVote); // Output: "Yes, you can vote!"


/*
7. Operator Typeof
Digunakan untuk mengetahui tipe data suatu variabel atau nilai.
Contoh: typeof 42 hasilnya "number", typeof 'Hello' hasilnya "string".
*/
let name = "John";
age = 30;
isStudent = true;

console.log(typeof name);      // "string"
console.log(typeof age);       // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (ini adalah hasil bawaan JavaScript)


/*
8. Operator Nullish Coalescing (??)
Digunakan untuk memberikan nilai default jika nilai pertama adalah null atau undefined.
Contoh: let name = null; let displayName = name ?? "Guest"; maka displayName akan bernilai "Guest".
*/
let username = null;
let displayName = username ?? "Guest";

console.log(displayName); // Output: "Guest" (karena username adalah null)