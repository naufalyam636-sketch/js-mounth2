// umur
let umur = 25;

if (umur <= 25 && umur > 12) {
  console.log("lu remaja");
} else if (umur < 11) {
  console.log("lu bocil");
} else {
  console.log("anda dewasa");
}

// for loop
for (let i = 1; i <= 10; i++) {
  console.log("ini angka ke-" + i);
}
// switch

let bulan = 3;

switch (hari) {
  case 1:
    console.log("senin");
    break;
  case 2:
    console.log("selasa");
    break;
  case 3:
    console.log("rabu");
    break;
  case 4:
    console.log("kamis");
    break;
  case 5:
    console.log("jum'at");
    break;
  case 6:
    console.log("sabtu");
    break;
  case 7:
    console.log("minggu");
    break;
  default:
    console.log("hari cuma tujuh kocak");
}
