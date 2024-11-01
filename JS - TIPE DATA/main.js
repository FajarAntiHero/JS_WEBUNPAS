/* 
==========TIPE DATA============
String: Tipe data untuk teks. Contoh: "Hello, world!"

Number: Tipe data untuk angka, baik bilangan bulat maupun desimal. Contoh: 42, 3.14

Boolean: Tipe data yang hanya memiliki dua nilai, yaitu true atau false. Contoh: true, false

Undefined: Tipe data yang digunakan ketika sebuah variabel dideklarasikan tetapi belum diinisialisasi nilainya. Contoh: let x; (nilai x adalah undefined)

Null: Tipe data yang merepresentasikan nilai kosong atau tidak ada. Contoh: let y = null;

Symbol: Tipe data yang digunakan untuk membuat identifier unik, sering kali digunakan dalam objek. Contoh: Symbol("id")

BigInt: Tipe data untuk angka yang sangat besar yang tidak dapat diwakili oleh tipe Number. Contoh: 123n

Tipe data non-primitif adalah tipe data kompleks yang bisa diubah setelah diciptakan.
    Object: Struktur data yang dapat menyimpan berbagai pasangan nilai (key-value). Objek bisa berisi data dalam bentuk tipe data primitif maupun objek lainnya.

Tipe Data Khusus Lainnya
    Array: Merupakan subtipe dari objek yang digunakan untuk menyimpan kumpulan data dalam satu variabel. Contoh: [1, 2, 3]
    Function: Fungsi dalam JavaScript juga merupakan tipe data, yang merupakan objek callable atau dapat dipanggil.
*/

let dataString = "ucup"; // string
console.log(dataString);
console.log(typeof dataString)

let dataNumber = 16.324; // number
console.log(dataNumber);
console.log(typeof dataNumber);

let dataBoolean = false; // boolean
console.log(dataBoolean);
console.log(typeof dataBoolean);

dataString = 2; //number
console.log(dataString);
console.log(typeof dataString)

let dataKosong; // undefined
console.log(dataKosong);
console.log(typeof dataKosong);

dataKosong = "otong"; //Memberikan variable dataKosong value string
console.log(dataKosong);
console.log(typeof dataKosong);

const person = {firstName:"John", lastName:"Doe"}; //Tipe Data Object
console.log(person)
console.log(typeof person)

const cars = ["Saab", "Volvo", "BMW"]; //Tipe Data Object Array
console.log(cars)
console.log(typeof cars)

const date = new Date("2022-03-25"); //Tipe Data Object Time
console.log(date)
console.log(typeof date)