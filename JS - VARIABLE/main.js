/*
Variabel dalam JavaScript digunakan untuk menyimpan data yang dapat digunakan dan dimanipulasi dalam program. 

Deklarasi Variabel:
    var: Cara lama untuk mendeklarasikan variabel. Memiliki cakupan (scope) fungsi dan dapat menyebabkan masalah seperti hoisting yang tidak diinginkan.
    let: Diperkenalkan di ECMAScript 6 (ES6). Digunakan untuk mendeklarasikan variabel dengan cakupan blok (block scope) dan lebih aman daripada var.
    const: Digunakan untuk mendeklarasikan variabel yang nilainya tetap (konstan). Variabel ini juga memiliki cakupan blok.

Perbedaan var, let, dan const
    Scope: var memiliki function scope, sedangkan let dan const memiliki block scope.
    Hoisting: Variabel yang dideklarasikan dengan var akan di-hoist ke atas dan diinisialisasi dengan undefined, sedangkan let dan const di-hoist tanpa inisialisasi.
    Reassignable: var dan let bisa di-reassign, sementara const tidak bisa diubah setelah diinisialisasi.

Tips Penggunaan Variable:
Gunakan const secara default kecuali jika Anda perlu mengubah nilai variabel, maka gunakan let.
Hindari penggunaan var untuk mencegah masalah cakupan dan perilaku yang tidak terduga.
*/
// Menggunakan var
var x = 10;
console.log(x); // Output: 10

// Menggunakan let
let y = 20;
y = 25; // Nilai y bisa diubah
console.log(y); // Output: 25

// Menggunakan const
const z = 30;
// z = 35; // Error: Assignment to constant variable
console.log(z); // Output: 30

/*
Aturan Penulisan Nama Variabel
    Harus dimulai dengan huruf (a-z, A-Z), tanda underscore (_), atau simbol dolar ($).
    Tidak boleh dimulai dengan angka.
    Boleh mengandung angka setelah karakter pertama (misalnya, var1, totalSum).
    Tidak boleh mengandung spasi.
    Case-sensitive, artinya myVariable dan myvariable dianggap sebagai dua variabel yang berbeda.
2. Konvensi Penamaan yang Disarankan
    Camel Case: Praktik paling umum dalam JavaScript, di mana huruf pertama kata pertama ditulis dalam huruf kecil dan setiap kata berikutnya dimulai dengan huruf besar. Contoh: totalValue, userName, isVerified.
    Pascal Case: Digunakan untuk nama kelas atau konstruktor, di mana setiap kata dimulai dengan huruf besar. Contoh: UserAccount, OrderDetails.
    Snake Case: Setiap kata dipisahkan oleh tanda underscore. Contoh: total_value, user_name. Ini kurang umum dalam JavaScript, tapi kadang digunakan untuk konstanta global.
    Kebab Case: Menggunakan tanda hubung untuk memisahkan kata, misalnya total-value. Tidak diizinkan dalam penamaan variabel karena tanda hubung dianggap operator pengurangan.
*/

let firstName = "John"; // Camel case
const MAX_ATTEMPTS = 5; // Semua huruf besar untuk konstanta
let isAvailable = true; // Camel case untuk variabel boolean