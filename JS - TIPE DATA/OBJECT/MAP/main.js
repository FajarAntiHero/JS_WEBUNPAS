/*
Map dalam JavaScript adalah struktur data bawaan yang diperkenalkan dalam ES6 (ECMAScript 2015). 
Map digunakan untuk menyimpan pasangan key-value (kunci-nilai), di mana kunci dapat berupa tipe data apa pun (string, angka, objek, bahkan fungsi). 
Ini membuat Map lebih fleksibel dibandingkan dengan objek biasa, yang hanya mendukung kunci berupa string atau simbol.

Ciri-Ciri Utama Map
    Kunci dengan Tipe Data Apa Pun: Map memungkinkan penggunaan kunci dengan tipe data apa pun, termasuk objek.
    Urutan: Elemen dalam Map mempertahankan urutan penambahannya (insertion order).
    Ukuran Dinamis: Ukuran Map dapat diketahui dengan properti .size.
    Tidak Ada Duplikasi Kunci: Setiap kunci dalam Map harus unik.

Syntax map()
array.map(callback(element, index, array), thisArg);
    callback: Fungsi yang akan dipanggil untuk setiap elemen dalam array. Fungsi ini dapat memiliki tiga parameter:
        element: Elemen saat ini yang sedang diproses.
        index (opsional): Indeks dari elemen saat ini.
        array (opsional): Array asli yang sedang diiterasi.
    thisArg (opsional): Nilai yang akan digunakan sebagai this di dalam fungsi callback.
*/

// ========================================= METHOD MAP ============================================

// set(key, value) : Menambahkan pasangan kunci-nilai ke dalam Map. Jika kunci sudah ada, nilai akan diperbarui.
const myMap = new Map();
myMap.set('name', 'Fajar');
myMap.set('age', 25);
console.log(myMap); // Output: Map { 'name' => 'Fajar', 'age' => 25 }

// get(key) : Mengembalikan nilai yang terkait dengan kunci tertentu. Jika kunci tidak ada, metode ini mengembalikan undefined.
console.log(myMap.get('name')); // Output: Fajar
console.log(myMap.get('address')); // Output: undefined

// has(key) : Memeriksa apakah suatu kunci ada di dalam Map. Mengembalikan true jika kunci ditemukan, dan false jika tidak.
console.log(myMap.has('age')); // Output: true
console.log(myMap.has('address')); // Output: false

// delete(key) : Menghapus pasangan kunci-nilai berdasarkan kunci yang diberikan. Mengembalikan true jika kunci ditemukan dan dihapus, false jika tidak.
myMap.delete('age');
console.log(myMap);
// Output: Map { 'name' => 'Fajar' }

// clear() : Menghapus semua elemen dalam Map. Setelah metode ini dipanggil, Map menjadi kosong.
myMap.clear();
console.log(myMap);
// Output: Map {}

// size (Properti) : Mengembalikan jumlah pasangan kunci-nilai dalam Map. Properti ini hanya dapat dibaca (read-only).
myMap = new Map([['name', 'Fajar'], ['age', 25]]);
console.log(myMap.size); // Output: 2

// keys() : Mengembalikan iterator untuk semua kunci dalam Map.
myMap = new Map([['name', 'Fajar'], ['age', 25]]);
for (let key of myMap.keys()) {
    console.log(key);
}
// Output:
// name
// age

// values() : Mengembalikan iterator untuk semua nilai dalam Map
for (let value of myMap.values()) {
    console.log(value);
}
// Output:
// Fajar
// 25

// entries() : Mengembalikan iterator untuk semua pasangan [kunci, nilai] dalam Map.
for (let [key, value] of myMap.entries()) {
    console.log(`${key}: ${value}`);
}
// Output:
// name: Fajar
// age: 25

// forEach(callback) : Menjalankan fungsi callback untuk setiap pasangan kunci-nilai dalam Map. Fungsi ini menerima tiga parameter: nilai, kunci, dan objek Map.
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: Fajar
// age: 25



// ============================================================================================================
// set(key,value)	    Menambahkan/memperbarui pasangan kunci-nilai.
// get(key)	            Mengambil nilai berdasarkan kunci.
// has(key)	            Memeriksa apakah kunci tertentu ada.
// delete(key)	        Menghapus pasangan kunci-nilai berdasarkan kunci.
// clear()	            Menghapus semua elemen dalam Map.
// size	                Properti untuk mendapatkan jumlah elemen dalam Map.
// keys()	            Mengembalikan iterator semua kunci dalam Map.
// values()	            Mengembalikan iterator semua nilai dalam Map.
// entries()	        Mengembalikan iterator pasangan [kunci, nilai].
// forEach(callback)	Menjalankan callback untuk setiap elemen Map.


