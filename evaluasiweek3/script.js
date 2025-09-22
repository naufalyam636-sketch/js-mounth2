//Bagian A
//1.fungsi = fungsi yg dikirim sebagai argumen dan di jalankan setelah proses di panggil
//  promise = yg mewakili asyncrhonus berhasil atau gagal

//2.karna lebih tertata dan mudah di pahami, karna bagi saya ada kata await yg menjelaskan kapan promise di jalankan

//3.untuk ngehandling eror

//4.srtingfy = untuk mengubah menjadi srting adapun parse = untuk mengubah menjadi object

//5.lebih rapi karna tempat memanggil dan data2 di tepat atau folder yg

//Bagian B
//1
let barang = { nama: "buku", harga: 1000 };
let jsonString = JSON.stringify(barang);
console.log(jsonString);

//2
function hitungLuas(panjang, lebar, callback) {
  let hasil = panjang * lebar;
  callback(hasil);
}
function tampilHasil(nilai) {
  console.log("luasnya adalah " + nilai);
}
hitungLuas(2, 3, tampilHasil);

//3
function ambilDataUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      console.log("Data users:", data);
    })
    .catch((error) => {
      console.log("Terjadi error:", error);
    });
}

ambilDataUsers();

//4
let data = '{"nama":"anto","umur":27}';
let json = JSON.parse(data);
console.log(json.nama);

//5
function sayHelo() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("halo"), 2000);
  });
}
sayHelo();

//6
function ubahText() {
  let ubah = (document.getElementById("judul").innerText =
    "Belajar DOM Selection");
}
ubahText();

//7
function uploadData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data sudah di ambil"), 2000);
  });
}

async function prosesData() {
  console.log("ambil data");
  let hasil = await uploadData();
  console.log(hasil);
}

prosesData();

//8
let adminis = new Promise((resolve, reject) => {
  let masuk = true;
  if (masuk) {
    resolve("anda sudah login");
  } else {
    reject("tampil di dashboard");
  }
});

adminis.then((silahkanMasuk) => {
  console.log(silahkanMasuk);
});

//9
const semuaParagraf = document.querySelectorAll("p");
semuaParagraf.forEach(function (p) {
  p.style.color = "blue"; // ubah jadi biru
});

//10
function bagi(a, b) {
  try {
    if (b === 0) {
      throw new Error("Tidak bisa membagi dengan nol");
    }
    let hasil = a / b;
    console.log("Hasil pembagian:", hasil);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

bagi(10, 2);
bagi(10, 0);

//11
import { tambah, kurang } from "./math.js";

console.log(tambah(2, 3));
console.log(kurang(5, 2));

//12
async function ambilUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error(`gagal mengambil data: ${response.status}`);
    }

    const data = await response.json();
    console.log("data user:", data);
    return data;
  } catch (error) {
    console.error("ada yg salah", error.message);
    return null;
  }
}

//13
let angka = [1, 2, 3, 4, 5];
function kuadrat(angka, b) {
  return angka * 2;
}
console.log(kuadrat(2, 2));

//14

//15
async function ubahStatusKeAktif(url) {
  try {
    const response = await fetch(url);
    const jsonString = await response.text();

    const data = JSON.parse(jsonString);
    data.status = "active"; 

    const hasilString = JSON.stringify(data); 
    console.log("JSON hasil:", hasilString);
    return hasilString;
  } catch (error) {
    console.error("gagal memproses JSON:", error.message);
    return null;
  }
}
ubahStatusKeAktif("https://example.com/data.json")
