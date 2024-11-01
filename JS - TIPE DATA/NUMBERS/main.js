/*
Di JavaScript, tipe data untuk angka disebut Number. 
Tipe data ini dapat digunakan untuk merepresentasikan angka, baik yang bulat (integer) maupun desimal (floating-point). 

Representation
    JavaScript menggunakan format floating-point 64-bit yang mengikuti standar IEEE 754 untuk menyimpan angka. 
    Ini berarti angka dapat sangat besar atau sangat kecil, tetapi ada batasan dalam akurasi.

Mendeklarasikan Angka:
    Anda dapat mendeklarasikan angka langsung dalam kode.

Operasi Matematika:
    Anda dapat melakukan berbagai operasi matematika seperti penjumlahan, pengurangan, perkalian, dan pembagian

Fungsi Global:
    JavaScript menyediakan fungsi global seperti Math untuk melakukan operasi matematika yang lebih kompleks, seperti akar kuadrat, pangkat, dan trigonometri.

Nilai Khusus:
    Ada beberapa nilai khusus yang terkait dengan tipe Number:
    NaN (Not a Number): Digunakan ketika hasil operasi tidak menghasilkan angka yang valid.
    Infinity dan -Infinity: Mewakili nilai yang lebih besar atau lebih kecil dari batas maksimum yang dapat direpresentasikan.

Konversi Tipe:
    Anda bisa mengkonversi antara tipe data menggunakan fungsi seperti Number(), parseInt(), dan parseFloat().
*/

// Fungsi Number(): Fungsi ini mengubah nilai ke tipe Number. Jika nilai tidak dapat diubah menjadi angka, maka hasilnya adalah NaN.
let strNumber = "42";
let num = Number(strNumber);  // num menjadi 42

// Fungsi parseInt(): Mengonversi string ke integer. Anda juga bisa menentukan basis (radix) yang ingin digunakan untuk konversi (contoh: 10 untuk desimal).
let strInt = "123.45";
let intNumber = parseInt(strInt, 10);  // intNumber menjadi 123

// Fungsi parseFloat(): Mengonversi string ke floating-point number. Fungsi ini mempertahankan desimal jika ada.
let strFloat = "123.45";
let floatNumber = parseFloat(strFloat);  // floatNumber menjadi 123.45

// Mengonversi ke String: Anda dapat mengonversi angka menjadi string menggunakan fungsi String() atau dengan metode .toString().
num = 42;
let strNum1 = String(num);         // strNum1 menjadi "42"
let strNum2 = num.toString();      // strNum2 juga menjadi "42"

// Mengonversi ke Boolean: Setiap angka yang bukan 0 atau NaN dianggap true dalam konteks boolean, sedangkan 0 dan NaN dianggap false.
let numTrue = 5;
let numFalse = 0;
console.log(Boolean(numTrue));  // true
console.log(Boolean(numFalse)); // false

// NaN (Not a Number) adalah hasil dari operasi yang tidak valid yang melibatkan angka. Anda dapat menggunakan fungsi isNaN() untuk memeriksa apakah suatu nilai adalah NaN.
let result = Number("abc");  // Hasilnya NaN
console.log(isNaN(result));   // true

//=============Konversi String ke Angka dalam Operasi Numerik===========
/*
Operator Penjumlahan (+):
    Jika Anda menjumlahkan angka dan string, JavaScript akan mengonversi angka menjadi string dan melakukan konkatenasi.
*/
num = 5;
let str = " apel";
let theresult = num + str; // theresult menjadi "5 apel"

/*
Operator Pengurangan (-), Perkalian (*), dan Pembagian (/):
    Untuk operator ini, jika salah satu operan adalah string, JavaScript akan mencoba mengonversi string tersebut menjadi angka. Jika tidak bisa, hasilnya adalah NaN (Not a Number).
*/
let strNum = "10";
let result1 = num - strNum; // result1 menjadi -5 (10 - 5)
let result2 = num * strNum; // result2 menjadi 50 (5 * 10)
let result3 = num / strNum; // result3 menjadi 0.5 (5 / 10)

let invalidStr = "abc";
let result4 = num - invalidStr; // result4 menjadi NaN (konversi tidak valid)

/*
Operasi Perbandingan:
    Saat membandingkan string dan angka dengan ==, JavaScript mengonversi string ke angka. Namun, === memeriksa nilai dan tipe tanpa melakukan konversi.
*/
console.log(5 == "5");  // true (string "5" diubah menjadi angka)
console.log(5 === "5"); // false (tipe berbeda)