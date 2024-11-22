/*
Tipe data object dalam JavaScript adalah salah satu tipe data kompleks yang digunakan untuk menyimpan kumpulan data dalam bentuk pasangan key-value. 
Objek memungkinkan kita untuk mengelompokkan data dan metode (fungsi) yang terkait dalam satu entitas, sehingga data lebih terstruktur dan mudah diakses.

Karakteristik Object
    Key-value pairs: Objek terdiri dari pasangan key-value, di mana setiap key (juga disebut properti) harus berupa string atau simbol, sedangkan nilai (value) bisa berupa tipe data apa saja, termasuk angka, string, fungsi, atau bahkan objek lainnya.
    Dynamic: Objek bersifat dinamis, artinya kita bisa menambahkan, mengubah, atau menghapus properti kapan saja setelah objek dibuat.
*/

//===Cara Membuat Object===
//Menggunakan Notasi Literal {}
const mahasiswa = {
    nama: "Fajar",
    umur: 21,
    jurusan: "Informatika",
    perkenalan: function() {
      return `Halo, nama saya ${this.nama} dan saya berusia ${this.umur} tahun.`;
    }
};

//Menggunakan Keyword "new Object()
const dosen = new Object();
dosen.nama = "Budi";
dosen.umur = 35;
dosen.matkul = "Matematika";
dosen.kenalan = function() {
  return `Halo, saya ${this.nama}, dosen ${this.matkul}.`;
};

//====Mengakses dan Memodifikasi Data dalam Object====
// Dot Notation: Mengakses properti dengan menggunakan tanda titik (.).
console.log(mahasiswa.nama); // Output: Fajar
mahasiswa.umur = 22; // Mengubah nilai properti

// Bracket Notation: Mengakses properti dengan menggunakan tanda kurung siku ([]), yang berguna jika nama properti disimpan dalam variabel atau mengandung karakter khusus.
const prop = "jurusan";
console.log(mahasiswa[prop]); // Output: Informatika

//Nested Object (Objek Bersarang) Objek juga bisa memiliki objek lain sebagai nilai propertinya.
const universitas = {
    nama: "Universitas BSI",
    lokasi: "Cikarang",
    fakultas: {
      nama: "Teknik Informatika",
      jumlahMahasiswa: 300
    }
};
console.log(universitas.fakultas.nama); // Output: Teknik Informatika

/* 
======================= Keyword this =======================
"this" adalah keyword khusus dalam JavaScript yang mengacu pada konteks atau objek yang saat ini sedang digunakan. 
Dalam sebuah objek, this akan mereferensikan objek tersebut. 
Hal ini sangat berguna ketika kita ingin mengakses properti atau metode lain dalam objek yang sama.

*/
const user = {
    username: "FajarAntiHero",
    email: "fajar@example.com",
    login: function() {
      console.log(`${this.username} telah login dengan email ${this.email}.`);
    },
    updateEmail: function(newEmail) {
      this.email = newEmail;
      console.log(`Email telah diperbarui menjadi ${this.email}.`);
    }
};
  
// Memanggil metode login
user.login(); // Output: FajarAntiHero telah login dengan email fajar@example.com
  
// Memperbarui email dengan this
user.updateEmail("fajarmaulana@example.com"); // Output: Email telah diperbarui menjadi fajarmaulana@example.com


/*
============================= Keyword delete ==============================
delete adalah keyword yang digunakan untuk menghapus properti dari sebuah objek. 
Setelah properti dihapus dengan delete, properti tersebut tidak lagi tersedia di dalam objek.
*/
const product = {
    id: 101,
    name: "Laptop",
    price: 15000000
};
  
console.log(product); 
// Output: { id: 101, name: 'Laptop', price: 15000000 }
  
// Menghapus properti price
delete product.price;
  
console.log(product); 
// Output: { id: 101, name: 'Laptop' }

/*
Object Constructor adalah cara untuk membuat objek dengan fungsi khusus yang bertindak sebagai "cetakan" atau "template" untuk objek baru. 
Fungsi ini disebut constructor function karena digunakan untuk mengkonstruksi objek baru dengan atribut atau properti tertentu.
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
const person1 = new Person("Fajar", 25);
const person2 = new Person("Maulana", 30);

person1.greet(); // Output: Hello, my name is Fajar and I am 25 years old.
person2.greet(); // Output: Hello, my name is Maulana and I am 30 years old.

/* 
Salah satu cara untuk menambahkan metode ke semua instance objek tanpa menduplikasi metode itu pada setiap objek adalah dengan menggunakan prototype. 
Dengan menambahkan metode ke prototype, setiap instance yang dibuat dari constructor function tersebut akan memiliki akses ke metode tersebut tanpa menambahkannya langsung ke setiap objek.
*/
function Person(name, age) {
    this.name = name;
    this.age = age;
}
  
// Menambahkan metode greet ke prototype Person
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
  
const person3 = new Person("Budi", 22);
person3.greet(); // Output: Hello, my name is Budi and I am 22 years old.

//=========BUILT IN JAVASCRIPT==========
// new Object() : Membuat objek kosong baru yang bisa diisi dengan properti dan metode sesuai kebutuhan. Biasanya digunakan untuk membuat objek generik.
// new Array() : Membuat array kosong atau array dengan elemen yang diberikan. Array digunakan untuk menyimpan data dalam bentuk urutan atau list yang bisa diakses berdasarkan indeks.
// new Map() : Membuat objek Map, yang menyimpan pasangan key-value dengan urutan penyisipan. Map dapat menyimpan tipe data apa pun sebagai kunci dan mendukung ukuran koleksi yang dinamis.
// new Set() : Membuat objek Set, yang menyimpan koleksi nilai unik, tanpa duplikasi. Berguna untuk menyimpan nilai-nilai yang tidak boleh memiliki elemen yang sama.
// new Date() : Membuat objek Date, yang merepresentasikan waktu dan tanggal. Digunakan untuk mengambil, memanipulasi, dan menampilkan data waktu dan tanggal.
// new RegExp() : Membuat objek RegExp (Regular Expression) yang digunakan untuk pencocokan pola dalam string. RegExp sering digunakan untuk validasi atau pencarian/penggantian teks dalam string.
// new Function() : Membuat objek Function, yaitu fungsi dinamis yang bisa didefinisikan secara langsung dalam kode. Namun, cara ini jarang digunakan dan kurang aman karena berpotensi menimbulkan celah keamanan.

/*
new Object() vs. Object Literal {}

Object Literal {}:
    Membuat objek kosong atau langsung dengan pasangan key-value.
    Lebih ringkas dan banyak digunakan.
*/
// Dengan new Object()
const obj1 = new Object();
obj1.name = "Fajar";

// Dengan Object Literal
const obj2 = { name: "Fajar" };


/*
new Array() vs. Array Literal []

Array Literal []:
    Membuat array kosong atau array dengan nilai yang ditentukan.
    Lebih cepat dan mudah dibaca dibandingkan dengan new Array().
*/
// Dengan new Array()
const arr1 = new Array(1, 2, 3);

// Dengan Array Literal
const arr2 = [1, 2, 3];


/*
new RegExp() vs. Pattern Literal /()/

Pattern Literal /()/:
    Membuat regular expression (pola pencarian) secara langsung.
    Lebih singkat dan umumnya lebih cepat saat parsing.
*/
// Dengan new RegExp()
const regex1 = new RegExp("abc");

// Dengan Pattern Literal
const regex2 = /abc/;

/*
new Function() vs. Function Expression () => {} atau function () {}

Function Expressions:
    Lebih aman dan lebih umum digunakan daripada new Function() yang mirip dengan eval() (potensi risiko keamanan).
    Bisa menggunakan arrow function atau ekspresi fungsi biasa.
*/
// Dengan new Function()
const func1 = new Function("a", "b", "return a + b");

// Dengan Function Expression
const func2 = function(a, b) {
  return a + b;
};

// Dengan Arrow Function
const func3 = (a, b) => a + b;