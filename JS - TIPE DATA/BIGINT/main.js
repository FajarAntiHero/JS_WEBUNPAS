/*
BigInt adalah tipe data khusus di JavaScript yang digunakan untuk merepresentasikan bilangan bulat dengan ukuran yang sangat besar. 
BigInt diperkenalkan untuk mengatasi keterbatasan tipe data Number dalam JavaScript, yang hanya dapat merepresentasikan angka hingga batas maksimal sekitar 9,007,199,254,740,991. 
Batas ini dikenal sebagai "safe integer limit" dalam JavaScript.

BigInt memungkinkan kita untuk bekerja dengan angka yang lebih besar dari batas tersebut, tanpa kehilangan presisi. 
Tipe data ini terutama digunakan untuk kasus di mana angka besar sangat penting, misalnya dalam perhitungan kriptografi atau dalam operasi matematika yang melibatkan angka-angka besar.

Menambahkan huruf n di akhir angka : Dengan menambahkan huruf n di akhir angka, JavaScript akan secara otomatis menginterpretasi angka tersebut sebagai BigInt.
Menggunakan fungsi BigInt() : Kita juga bisa membuat BigInt dari tipe data lain, seperti string atau number, menggunakan fungsi BigInt().

BigInt berguna ketika Anda memerlukan presisi pada angka yang sangat besar, seperti:
    Kriptografi: Untuk enkripsi dan dekripsi yang membutuhkan operasi matematika dengan angka besar.
    Perhitungan ilmiah: Ketika harus melakukan perhitungan kompleks dengan angka-angka besar.
    Operasi keuangan tertentu: Misalnya, jika ada keperluan perhitungan mata uang yang tidak dapat dibulatkan atau diperkirakan.

Keterbatasan BigInt
    Tidak kompatibel dengan Math: Fungsi-fungsi seperti Math.max() atau Math.min() tidak mendukung BigInt.
    Tidak mendukung desimal: BigInt hanya untuk bilangan bulat, sehingga tidak bisa digunakan untuk angka desimal. Jika BigInt digunakan untuk pembagian yang menghasilkan desimal, hasilnya akan dibulatkan ke bawah.
    Inkompatibilitas dengan Web API tertentu: Sebagian besar API web, seperti localStorage atau JSON, belum mendukung BigInt. Contohnya, jika kita mencoba menyimpan BigInt ke dalam localStorage, JavaScript akan mengeluarkan error. Sebagai solusi, BigInt dapat diubah menjadi string sebelum disimpan.
*/

//====MEMBUAT BIG INTEGER====
// Dengan menambahkan huruf n di akhir angka, JavaScript akan secara otomatis menginterpretasi angka tersebut sebagai BigInt.
let bigIntNum = 1234567890123456789012345678901234567890n;

// Menggunakan fungsi BigInt() Kita juga bisa membuat BigInt dari tipe data lain, seperti string atau number, menggunakan fungsi BigInt().
let bigIntFromString = BigInt("1234567890123456789012345678901234567890");
let bigIntFromNumber = BigInt(1234567890); // Berubah jadi BigInt, meskipun nilainya kecil

/* 
BigInt mendukung berbagai operasi aritmatika dasar:
Penjumlahan: +
Pengurangan: -
Perkalian: *
Pembagian: / (hasilnya akan dibulatkan ke bawah jika desimal)
Modulo: %
*/
let a = 1234567890123456789012345678901234567890n;
let b = 987654321098765432109876543210987654321n;

sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

console.log(sum);        // Output: 2222222222222222222222222222112222222211n
console.log(difference); // Output: 246913578024691357802469135802469135802469n
console.log(product);    // Output: 121932631137021795226185032733622923332237463801130351040n
console.log(quotient);   // Output: 1n (pembagian dibulatkan)
console.log(remainder);  // Output: 246913578024691357802469135802469135802469n

/*
==========PERBEDAAN BIGINT DAN NUMBER============
BigInt tidak bisa dicampur dengan Number dalam operasi aritmatika. Jika kita mencoba, JavaScript akan mengeluarkan error.
Untuk menggabungkannya, kita harus mengonversi salah satu tipe data
*/
let num = 10;
bigIntNum = 20n;

console.log(num + bigIntNum); // Error: Cannot mix BigInt and other types
/*
BigInt tidak mendukung beberapa metode bawaan Number, seperti Math.pow atau Math.sqrt.
Operasi semacam ini perlu didefinisikan secara manual atau menggunakan perpustakaan eksternal.
*/
let sum = BigInt(num) + bigIntNum; // Mengubah num menjadi BigInt
let sum2 = Number(bigIntNum) + num; // Mengubah bigIntNum menjadi Number

// BigInt.asIntN(width, bigInt) : Metode ini digunakan untuk mendapatkan representasi bilangan BigInt dalam width bit, yang bisa berupa bilangan positif atau negatif. Misalnya, untuk representasi 8-bit (byte), nilai yang melebihi 255 akan dibungkus kembali ke dalam jangkauan 8-bit.
let bigIntValue = 300n;
let result = BigInt.asIntN(8, bigIntValue); // Hanya akan mengambil 8 bit dari bigIntValue
console.log(result); // Output: 44n (karena 300 mod 256 = 44)

// BigInt.asUintN(width, bigInt) : Metode ini mirip dengan asIntN, tetapi membungkus BigInt dalam format bilangan positif saja, sehingga digunakan untuk mendapatkan representasi unsigned (tidak bertanda) dari BigInt dalam width bit.
bigIntValue = 300n;
result = BigInt.asUintN(8, bigIntValue); // 8-bit unsigned integer
console.log(result); // Output: 44n

// .toString([radix]) : Metode ini digunakan untuk mengubah BigInt menjadi representasi string. Kita bisa memberikan argumen radix (basis) untuk menentukan basis numerik dari output (seperti basis 2 untuk biner, 16 untuk heksadesimal).
bigIntValue = 255n;
console.log(bigIntValue.toString());      // Output: "255" (default ke basis 10)
console.log(bigIntValue.toString(16));    // Output: "ff" (basis 16 atau heksadesimal)
console.log(bigIntValue.toString(2));     // Output: "11111111" (basis 2 atau biner)

// .valueOf() : Metode ini mengembalikan nilai asli dari BigInt itu sendiri. Ini jarang digunakan secara eksplisit karena JavaScript biasanya mengonversi objek ke nilainya secara otomatis saat dibutuhkan.
bigIntValue = 123n;
console.log(bigIntValue.valueOf()); // Output: 123n

// .toLocaleString([locales], [options]) : Metode ini mengonversi BigInt menjadi string yang diformat sesuai dengan lokal atau wilayah tertentu. Kita dapat memberikan argumen lokal dan opsi format, seperti style, minimumFractionDigits, dll., meskipun pada BigInt opsi format pecahan tidak akan berpengaruh.
bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue.toLocaleString('en-US')); // Output: "123,456,789,012,345,678,901,234,567,890"
console.log(bigIntValue.toLocaleString('id-ID')); // Output: "123.456.789.012.345.678.901.234.567.890"

// .toJSON() : Metode ini mengembalikan nilai BigInt sebagai string sehingga dapat dimasukkan dalam format JSON. Tanpa ini, JSON tidak mendukung tipe BigInt secara langsung, jadi toJSON memungkinkan kita menyimpannya sebagai string.
bigIntValue = 123456789012345678901234567890n;
let jsonString = JSON.stringify({ bigIntValue: bigIntValue.toString() });
console.log(jsonString); // Output: '{"bigIntValue":"123456789012345678901234567890"}'

// Number.MAX_SAFE_INTEGER adalah angka terbesar yang dapat direpresentasikan secara aman dalam tipe data Number.
Number.MAX_SAFE_INTEGER === 9007199254740991; // 2^53 - 1

// Number.MIN_SAFE_INTEGER : Number.MIN_SAFE_INTEGER adalah angka terkecil (negatif terbesar) yang bisa direpresentasikan secara aman sebagai integer
Number.MIN_SAFE_INTEGER === -9007199254740991; // -(2^53 - 1)

// Number.isInteger() : Metode Number.isInteger() digunakan untuk memeriksa apakah suatu nilai adalah bilangan bulat (integer). Ini akan mengembalikan true jika nilai tersebut adalah bilangan bulat, dan false jika tidak.
console.log(Number.isInteger(4));           // Output: true
console.log(Number.isInteger(4.5));         // Output: false
console.log(Number.isInteger('4'));         // Output: false (string bukan integer)
console.log(Number.isInteger(Infinity));    // Output: false (Infinity bukan integer)
console.log(Number.isInteger(-3));          // Output: true
console.log(Number.isInteger(0));           // Output: true

// Number.isSafeInteger() : Metode Number.isSafeInteger() digunakan untuk memeriksa apakah suatu nilai adalah bilangan bulat dan berada dalam rentang integer aman (safe integer)
console.log(Number.isSafeInteger(4));                     // Output: true
console.log(Number.isSafeInteger(9007199254740991));      // Output: true
console.log(Number.isSafeInteger(9007199254740992));      // Output: false (di luar batas aman)
console.log(Number.isSafeInteger(4.5));                   // Output: false (bukan integer)
console.log(Number.isSafeInteger(Infinity));              // Output: false (bukan integer aman)
console.log(Number.isSafeInteger(-9007199254740991));     // Output: true
console.log(Number.isSafeInteger(-9007199254740992));     // Output: false (di luar batas aman)