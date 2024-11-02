/* 
Tipe data string digunakan untuk menyimpan teks. 
String adalah kumpulan karakter yang dikelilingi oleh tanda kutip (" atau ') atau backticks (`) dalam sintaks JavaScript.

String bisa dideklarasikan menggunakan tanda kutip tunggal ('...'), tanda kutip ganda ("..."), atau backticks (`...`)

Menggunakan backticks (`...`) memungkinkan kita memasukkan ekspresi atau variabel ke dalam string .
Sintaks ${...}. Ini disebut template literal dan memudahkan untuk membuat string
*/

let string1 = "Hello, World!";    // menggunakan tanda kutip ganda
let string2 = 'Hello, World!';     // menggunakan tanda kutip tunggal
let string3 = `Hello, World!`;     // menggunakan backticks (untuk template literal)

let name = "Fajar";
let greeting = `Hello, ${name}!`;  // menghasilkan "Hello, Fajar!"

// ========PROPERTY FOR STRING==========
// .length: Mengembalikan panjang string.
let text = "JavaScript";
console.log(text.length); // Output: 10

// .toUpperCase() dan .toLowerCase(): Mengubah seluruh karakter menjadi huruf besar atau kecil
text = "hello";
console.log(text.toUpperCase()); // Output: "HELLO"

text = "HELLO";
console.log(text.toLowerCase()); // Output: "hello"

// .charAt(index): Mengambil karakter di indeks tertentu.
text = "JavaScript";
console.log(text.charAt(4)); // Output: "S"

// .includes(substring): Mengecek apakah suatu string mengandung substring tertentu.
text = "Hello, World!";
console.log(text.includes("World"));  // Output: true

// .slice(start, end): Mengambil bagian dari string.
text = "JavaScript";
console.log(text.slice(0, 4)); // Output: "Java"

// .charCodeAt(index): Mengembalikan nilai Unicode dari karakter pada posisi (indeks) tertentu.
text = "A";
console.log(text.charCodeAt(0)); // Output: 65

// .at(index): Mengembalikan karakter pada indeks tertentu; mendukung indeks negatif untuk menghitung dari akhir.
text = "JavaScript";
console.log(text.at(-1)); // Output: "t"

// [index]: Mengakses karakter pada indeks tertentu menggunakan notasi array.
text = "JavaScript";
console.log(text[4]); // Output: "S"

// .substring(start, end): Mirip dengan .slice(), tetapi tidak menerima nilai negatif untuk start atau end.
text = "JavaScript";
console.log(text.substring(0, 4)); // Output: "Java"

// .substr(start, length): Mengambil sejumlah karakter (length) mulai dari start. (Deprecated di beberapa implementasi).
text = "JavaScript";
console.log(text.substr(0, 4)); // Output: "Java"

// .concat(string2, string3, ...): Menggabungkan beberapa string menjadi satu.
let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2)); // Output: "Hello World"

// .trim(): Menghapus spasi di awal dan akhir string.
text = "   Hello World!   ";
console.log(text.trim()); // Output: "Hello World!"

// .trimStart(): Menghapus spasi di awal string.
text = "   Hello World!";
console.log(text.trimStart()); // Output: "Hello World!"

// .trimEnd(): Menghapus spasi di akhir string.
text = "Hello World!   ";
console.log(text.trimEnd()); // Output: "Hello World!"

// .padStart(targetLength, padString): Menambahkan karakter di awal string hingga mencapai panjang yang diinginkan.
text = "5";
console.log(text.padStart(3, "0")); // Output: "005"

// .padEnd(targetLength, padString): Menambahkan karakter di akhir string hingga mencapai panjang yang diinginkan.
text = "5";
console.log(text.padEnd(3, "0")); // Output: "500"

// .repeat(count): Mengulang string sebanyak count kali.
text = "Ha!";
console.log(text.repeat(3)); // Output: "Ha!Ha!Ha!"

// .replace(searchValue, newValue): Mengganti teks yang pertama kali cocok dengan teks baru.
text = "Hello, World!";
console.log(text.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

// .replaceAll(searchValue, newValue): Mengganti semua teks yang cocok dengan teks baru
text = "Hello, World! Welcome to the World!";
console.log(text.replaceAll("World", "JavaScript")); // Output: "Hello, JavaScript! Welcome to the JavaScript!"

// .split(separator, limit): Memecah string menjadi array berdasarkan pemisah (separator).
text = "apple,banana,orange";
console.log(text.split(",")); // Output: ["apple", "banana", "orange"]

// .indexOf(searchValue, start): Mengembalikan indeks pertama dari searchValue dalam string, atau -1 jika tidak ditemukan. Pencarian dimulai dari posisi start (opsional).
text = "Hello, World!";
console.log(text.indexOf("World")); // Output: 7

// .lastIndexOf(searchValue, start): Mengembalikan indeks terakhir dari searchValue dalam string, atau -1 jika tidak ditemukan. Pencarian dilakukan mundur dari start (opsional).
text = "Hello, World! Hello!";
console.log(text.lastIndexOf("Hello")); // Output: 13

// .search(regex): Mencari posisi pertama dari ekspresi reguler (regex) dalam string, mengembalikan indeksnya atau -1 jika tidak ditemukan. Tidak mendukung argumen start.
text = "Hello, World!";
console.log(text.search("World")); // Output: 7

// .match(regex): Mencocokkan string dengan ekspresi reguler (regex) dan mengembalikan array hasil cocokannya, atau null jika tidak ada kecocokan.
text = "I love JavaScript!";
console.log(text.match(/love/)); // Output: ["love"]

// .matchAll(regex): Mengembalikan iterator dari semua kecocokan untuk ekspresi reguler (regex) yang memiliki flag g (global). Lebih kuat daripada .match() untuk mendapatkan informasi tambahan dari setiap kecocokan.
text = "1, 2, 3, 4";
for (let match of text.matchAll(/\d/g)) {
    console.log(match[0]); // Output: 1, 2, 3, 4
}

// .includes(searchValue, start): Mengecek apakah searchValue ada dalam string, mengembalikan true atau false. Pencarian dimulai dari start (opsional).
text = "Hello, World!";
console.log(text.includes("World")); // Output: true

// .startsWith(searchValue, start): Mengecek apakah string dimulai dengan searchValue, mengembalikan true atau false. Pencarian dimulai dari start (opsional).
text = "Hello, World!";
console.log(text.startsWith("Hello")); // Output: true

// .endsWith(searchValue, length): Mengecek apakah string diakhiri dengan searchValue, mengembalikan true atau false. Pencarian dilakukan hingga length (opsional).
text = "Hello, World!";
console.log(text.endsWith("World!")); // Output: true


//=============ESCAPE CHARACTER FOR STRING============
// "\'" menghasilkan '
// "\"" menghasilkan "
// "\\" menghasilkan \ (backslash)
// "\b" menghasilkan backspace
// "\f"  menghasilkan form feed
// "\n"  menghasilkan new line
// "\r"  menghasilkan carriage return
// "\t"  menghasilkan horizontal tabulator
// "\v"  menghasilkan vertical tabulator

// Breaking Long Lines
document.getElementById("header").innerHTML =
"Hello Dolly!";

/*
Template string adalah fitur di JavaScript yang diperkenalkan dalam ES6, yang memungkinkan kita membuat string yang lebih kompleks dengan sintaks yang lebih ringkas. 
Dalam konteks HTML, template string sangat berguna untuk:
    Menyusun elemen HTML dengan dinamis.
    Menggabungkan variabel dan ekspresi langsung ke dalam string.
    Mempermudah penulisan string multi-baris.
*/
function createCard(title, description) {
    const cardHTML = `
      <div class="card">
        <h2 class="card-title">${title}</h2>
        <p class="card-description">${description}</p>
      </div>
    `;
  
    // Menyisipkan HTML di akhir kontainer
    const container = document.getElementById("card-container");
    container.insertAdjacentHTML("beforebegin", cardHTML); // Opsi: 'beforeend' (Bagian sebelum akhir dalam Element/id "card-container"), 'afterbegin'(Bagian sesudah Awal dalam Element/id "card-container"), 'beforebegin'(Sebelum awal Element/id "card-container" & berada dalam luar container), 'afterend'(Sesudah akhir Element/id "card-container" & berada diluar container)
}
  
  // Menambah beberapa card menggunakan fungsi yang sama
createCard("Card 3", "Deskripsi untuk card ketiga.");
// insertAdjacentHTML() untuk menyisipkan HTML pada posisi tertentu di dalam elemen. Ini bisa bermanfaat jika kita ingin menambahkan elemen di bagian awal, akhir, atau sebelum atau sesudah elemen tertentu.

// Menggabungkan String
greeting = "Hello";
nama = "Fajar";
let message = greeting + ", " + nama + "!";  // menggunakan +
let messageTemplate = `${greeting}, ${nama}!`; // menggunakan template literal

let firstName = "Fajar";
let lastName = "Maulana";
let pesan = `Welcome, ${firstName} ${lastName}!`;
console.log(message);  // Output: "Welcome, Fajar Maulana!"

/*
Dalam JavaScript, "deprecated" artinya fitur, metode, atau sintaks tertentu masih tersedia namun tidak direkomendasikan lagi untuk digunakan. 
Ini biasanya terjadi karena metode tersebut sudah dianggap usang, memiliki cara yang lebih efisien atau aman, atau akan dihapus dalam versi JavaScript mendatang.

Ketika sesuatu dinyatakan deprecated, itu berarti pengembang disarankan untuk menggunakan alternatif yang lebih baru, karena:
    Fungsi atau metode ini bisa dihapus di masa depan, sehingga penggunaannya dalam kode mungkin tidak kompatibel dengan versi JavaScript yang lebih baru.
    Kinerja atau keamanannya mungkin sudah tidak optimal dibandingkan dengan metode atau pendekatan yang lebih baru.
    Pengalaman pengguna mungkin terpengaruh jika fungsi yang deprecated tidak lagi didukung oleh browser modern.
*/