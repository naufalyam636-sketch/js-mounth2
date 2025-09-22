//soal 1
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User ditemukan");
    }, 1000);
  });
}

function getPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post ditemukan");
    }, 1000);
  });
}

function getComment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Komentar ditemukan");
    }, 1000);
  });
}

// Promise chaining
getUser()
  .then((userMessage) => {
    console.log(userMessage);
    return getPost();
  })
  .then((postMessage) => {
    console.log(postMessage);
    return getComment();
  })
  .then((commentMessage) => {
    console.log(commentMessage);
  });

//soal2
function tambah(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x + y);
    }, 500); // bisa disesuaikan, tapi lebih cepat dari soal sebelumnya
  });
}

function kali(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * y);
    }, 500);
  });
}

tambah(5, 7)
  .then((hasilTambah) => {
    console.log("Hasil tambah:", hasilTambah);
    return kali(hasilTambah, 3);
  })
  .then((hasilKali) => {
    console.log("Hasil akhir:", hasilKali);
  });

//soal3

function cekNama(nama) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nama.trim() !== "") {
        resolve("Nama valid");
      } else {
        reject("Nama tidak boleh kosong");
      }
    }, 500);
  });
}

function cekEmail(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.includes("@")) {
        resolve("Email valid");
      } else {
        reject("Email tidak valid");
      }
    }, 500);
  });
}

cekNama("Danz")
  .then((hasilNama) => {
    console.log(hasilNama);
    return cekEmail("danz@example.com");
  })
  .then((hasilEmail) => {
    console.log(hasilEmail);
  })
  .catch((error) => {
    console.error("Validasi gagal:", error);
  });

//soal4
function login() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login berhasil");
    }, 1000);
  });
}

function pilihBarang() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Barang dipilih");
    }, 1000);
  });
}

function bayar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pembayaran sukses");
    }, 1000);
  });
}

login()
  .then((hasilLogin) => {
    console.log(hasilLogin);
    return pilihBarang();
  })
  .then((hasilPilih) => {
    console.log(hasilPilih);
    return bayar();
  })
  .then((hasilBayar) => {
    console.log(hasilBayar);
  });
