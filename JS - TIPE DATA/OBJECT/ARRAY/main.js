/*
Array di JavaScript adalah tipe data yang digunakan untuk menyimpan kumpulan elemen dalam satu variabel. 
Array dapat menyimpan beberapa nilai dalam satu variabel, termasuk angka, string, objek, atau bahkan array lainnya (disebut array bersarang). 
Array sangat berguna ketika kita perlu mengelola data dalam jumlah banyak atau bekerja dengan data yang memiliki struktur yang sama.
*/

// Membuat Array
// Ada beberapa cara untuk membuat array di JavaScript:
//Menggunakan Tanda Kurung Siku ([])
let fruits = ["apple", "banana", "orange"];

// Menggunakan Konstruktor Array
let numbers = new Array(1, 2, 3, 4);

// Array Kosong
let emptyArray = [];
let emptyArrayWithConstructor = new Array(5); // Array dengan panjang 5, tapi belum ada isinya

// Akses Elemen Array
// Elemen array diakses menggunakan indeks, dimulai dari 0 untuk elemen pertama
fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: "apple"
console.log(fruits[2]); // Output: "orange"

//Jika Anda mencoba mengakses indeks di luar panjang array, hasilnya adalah undefined:
console.log(fruits[3]); // Output: undefined

// Mengubah Elemen Array
// Anda bisa mengubah nilai elemen array dengan menetapkan nilai baru pada indeks tertentu
fruits[1] = "grape";
console.log(fruits); // Output: ["apple", "grape", "orange"]

// Menambah Elemen ke Array
// push() – menambahkan elemen di akhir array.
fruits.push("mango");
console.log(fruits); // Output: ["apple", "grape", "orange", "mango"]

// unshift() – menambahkan elemen di awal array.
fruits.unshift("strawberry");
console.log(fruits); // Output: ["strawberry", "apple", "grape", "orange", "mango"]

// Menggunakan Indeks Langsung
fruits[5] = "kiwi";
console.log(fruits); // Output: ["strawberry", "apple", "grape", "orange", "mango", "kiwi"]

// Menghapus Elemen dari Array
// pop() – menghapus elemen terakhir dari array.
fruits.pop();
console.log(fruits); // Menghapus "kiwi", Output: ["strawberry", "apple", "grape", "orange", "mango"]

// shift() – menghapus elemen pertama dari array.
fruits.shift();
console.log(fruits); // Menghapus "strawberry", Output: ["apple", "grape", "orange", "mango"]

// Menggunakan splice() – menghapus elemen pada indeks tertentu.
fruits.splice(1, 2); // Menghapus 2 elemen mulai dari indeks 1
console.log(fruits); // Output: ["apple", "mango"]

// Looping pada Array
// Anda dapat menggunakan berbagai cara untuk melakukan iterasi atau looping pada elemen array:
// Menggunakan for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Menggunakan for...of loop:
for (let fruit of fruits) {
    console.log(fruit);
}

// Menggunakan forEach():
fruits.forEach(function(fruit) {
    console.log(fruit);
});

//Array Multidimensi
// Array juga bisa berisi array lainnya, menciptakan struktur array multidimensi (array bersarang).
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
 
console.log(matrix[0][1]); // Output: 2 (elemen baris pertama, kolom kedua)

// Properti dan Metode pada Array
// length: Mengembalikan panjang (jumlah elemen) array.
console.log(fruits.length); // Output: 2

// concat(): Menggabungkan dua atau lebih array.
let moreFruits = ["pineapple", "melon"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["apple", "mango", "pineapple", "melon"]

// join(): Menggabungkan elemen array menjadi string.
console.log(allFruits.join(", ")); // Output: "apple, mango, pineapple, melon"

// slice(): Mengambil elemen tertentu dari array dan mengembalikannya sebagai array baru.
let someFruits = allFruits.slice(1, 3);
console.log(someFruits); // Output: ["mango", "pineapple"]

// indexOf() dan lastIndexOf(): Mencari indeks dari elemen tertentu dalam array.
console.log(allFruits.indexOf("mango")); // Output: 1

// includes(): Memeriksa apakah array memiliki elemen tertentu.
console.log(allFruits.includes("banana")); // Output: false

// map(): Menghasilkan array baru dengan melakukan operasi pada setiap elemen.
numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

// filter(): Menghasilkan array baru yang hanya berisi elemen yang memenuhi kondisi tertentu.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// reduce(): Mengakumulasikan nilai dari elemen-elemen array menjadi satu nilai.
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 10

// find(): Mengembalikan elemen pertama yang memenuhi kondisi tertentu.
let found = numbers.find(num => num > 2);
console.log(found); // Output: 3

// sort(): Mengurutkan elemen array.
let names = ["John", "Jane", "Jack"];
names.sort();
console.log(names); // Output: ["Jack", "Jane", "John"]


