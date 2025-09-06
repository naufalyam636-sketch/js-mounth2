const nama = "arian";
let umur = 20;
let hobi = "pingpong";
console.log(
  "halo nama saya " + nama + " saya berumur" + umur + " hobi saya " + hobi
);

let buah = ["apel", "pisang", "jeruk"];
console.table(" saya suka makan " + buah);

let nama1 = prompt("Siapa nama kamu?");
alert("Halo, " + nama1 + " kontol" + "! Senang bertemu denganmu ");
const hapus = confirm("apa ingin menghapus data");

let user = prompt("Masukkan nama kamu:");

if (!user) {
  console.error("Error: Nama tidak boleh kosong!");
} else {
  alert("Halo, " + user + "!");
}
