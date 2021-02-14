"use strict";

//inputan jari-jari
var jariLingkaran;
jariLingkaran = prompt("Masukkan Jari-Jari Lingkaran");
jariLingkaran = parseFloat(jariLingkaran);
document.getElementById("jari").innerHTML = "1. Diketahui sebuah lingkaran memiliki jari-jari ".concat(jariLingkaran, " cm. Hitunglah keliling dan luas lingkaran tersebut!");
document.getElementById("jari2").innerHTML = "".concat(jariLingkaran, " CM");

function hitungKeliling() {
  //rumus
  keliling = 3.14 * 2 * jariLingkaran;
  alert("Keliling lingkaran adalah ".concat(keliling));
}

function hitungLuas() {
  //rumus
  luas = 3.14 * jariLingkaran * jariLingkaran;
  alert("Luas lingkaran adalah ".concat(luas));
}