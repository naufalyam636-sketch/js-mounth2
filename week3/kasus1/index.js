import { biodata } from "./biodata.js";
console.log(biodata);

import { bagi, kali, kurang, tambah } from "./math.js";
console.log(tambah(20, 5));
console.log(kurang(30 - 10));
console.log(kali(6, 7));
console.log(bagi(50, 2));

import { getAllUser, getUserById } from "./userService.js";

console.log("=== Semua User ===");
console.log(getAllUser());

console.log("\n=== User dengan ID 2 ===");
console.log(getUserById(2));

// index.js

import { addTask, getAllTask, deleteTask } from "./taskService.js";

console.log("=== Tambah Task ===");
addTask("Belajar JavaScript");
addTask("Bikin proyek mini");
addTask("tugas css");

console.log("\n=== Semua Task ===");
console.log(getAllTask());

console.log("\n=== Hapus Task dengan ID 2 ===");
deleteTask(2);

console.log("\n=== Task Setelah Dihapus ===");
console.log(getAllTask());

import { login, register } from "./auth.js";

console.log(register("sari_uiux", "pass123"));
console.log(login("sari_uiux", "pass123"));
console.log(login("joko_dev", "salah"));

// index.js

import { getAllBooks, addBook, findBookByTitle } from "./libraryService.js";

console.log("=== Tambah Buku Baru ===");
addBook({ judul: "Algoritma dan Struktur Data", penulis: "Dewi", tahun: 2024 });

console.log("\n=== Semua Buku ===");
console.log(getAllBooks());

console.log("\n=== Cari Buku: 'Belajar UI/UX' ===");
const hasilCari = findBookByTitle("Belajar UI/UX");
console.log(hasilCari ? hasilCari : "Buku tidak ditemukan");
