/*
Set dalam JavaScript adalah salah satu tipe struktur data bawaan yang diperkenalkan dalam ES6 (ECMAScript 2015). Set digunakan untuk menyimpan kumpulan nilai unik, artinya setiap nilai hanya muncul sekali dalam koleksi. Objek Set menyediakan cara yang mudah untuk menyimpan data dan melakukan operasi seperti menambah, menghapus, atau memeriksa keberadaan elemen dengan efisien.

Ciri-ciri Utama Set
    Nilai Unik: Set tidak mengizinkan duplikasi nilai.
    Urutan Nilai: Nilai yang disimpan tidak dijamin berurutan, tetapi iterasi akan mengikuti urutan penambahan nilai.
    Tipe Data yang Diterima: Dapat menyimpan nilai dari berbagai tipe data seperti string, angka, objek, bahkan NaN.

Membuat Set
    const mySet = new Set();

Menambahkan Nilai ke dalam Set
    mySet.add(1);
    mySet.add('hello');
    mySet.add({ name: 'Fajar' });
    console.log(mySet); // Output: Set { 1, 'hello', { name: 'Fajar' } } // Jika menambahkan nilai yang sudah ada, Set akan mengabaikannya
*/

// ================================== METODE SET ===========================================

// add(value) : Menambahkan nilai ke dalam Set. Jika nilai sudah ada, tidak akan ditambahkan lagi.
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10); // Tidak akan ditambahkan karena 10 sudah ada
console.log(mySet);  // Output: Set { 10, 20 }

// delete(value) : Menghapus nilai tertentu dari Set. Metode ini mengembalikan true jika nilai berhasil dihapus, dan false jika nilai tidak ditemukan.
mySet = new Set([1, 2, 3]);
console.log(mySet.delete(2)); // Output: true
console.log(mySet); 
// Output: Set { 1, 3 }
console.log(mySet.delete(5)); // Output: false

// has(value) : Memeriksa apakah suatu nilai ada dalam Set. Metode ini mengembalikan true jika nilai ditemukan, dan false jika tidak ditemukan.
mySet = new Set([1, 2, 3]);
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(5)); // Output: false

// clear() : Menghapus semua elemen di dalam Set. Setelah metode ini dipanggil, Set akan kosong.
mySet = new Set([1, 2, 3]);
mySet.clear();
console.log(mySet); 
// Output: Set {}

// size (Properti) : Mengembalikan jumlah elemen dalam Set. Properti ini hanya dapat dibaca (read-only).
mySet = new Set([1, 2, 3, 4]);
console.log(mySet.size);  // Output: 4

// Iterasi pada Set : Meski bukan metode, iterasi adalah bagian penting dari Set. 
    // forEach(callback) : Menjalankan fungsi callback untuk setiap elemen dalam Set.
mySet = new Set(['a', 'b', 'c']);
mySet.forEach(value => {
    console.log(value);
});
// Output: 
// a
// b
// c

    // for...of : Digunakan untuk mengiterasi elemen Set dengan cara sederhana.
mySet = new Set([1, 2, 3]);
for (let value of mySet) {
    console.log(value);
    }
// Output:
// 1
// 2
// 3

    // Spread Operator (...) : Mengonversi Set menjadi array atau langsung digunakan dalam operasi lain.
mySet = new Set([1, 2, 3]);
const array = [...mySet];
console.log(array); // Output: [1, 2, 3]

    // keys() : Mengembalikan iterator untuk elemen-elemen Set. Karena Set tidak memiliki kunci, keys() sama dengan values().
mySet = new Set(['a', 'b', 'c']);
for (let key of mySet.keys()) {
    console.log(key);
}
// Output: 
// a
// b
// c

    // values() : Mengembalikan iterator untuk elemen-elemen dalam Set.
mySet = new Set([1, 2, 3]);
for (let value of mySet.values()) {
    console.log(value);
}
// Output:
// 1
// 2
// 3

    // entries() : Mengembalikan iterator yang menghasilkan pasangan [value, value] untuk setiap elemen.
mySet = new Set([1, 2, 3]);
for (let entry of mySet.entries()) {
    console.log(entry);
}
// Output:
// [1, 1]
// [2, 2]
// [3, 3]


