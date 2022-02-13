var nama = prompt("Masukan nama kamu :");
var tanya = true;
while (tanya) {
  var p = prompt("Tuliskan Pilihanmu : \nbatu, gunting, kertas !!");

  var comp = Math.random();

  if (comp < 0.34) {
    comp = "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "gunting";
  } else {
    comp = "kertas";
  }

  var hasil = "";

  if (p == comp) {
    hasil = "SERI !!";
  } else if (p == "batu") {
    if (comp == "gunting") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
    //   hasil = comp == "gunting" ? "MENANG" : "KALAH";
  } else if (p == "gunting") {
    if (comp == "kertas") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
    //   hasil = comp == "batu" ? "KALAH" : "MENANG";
  } else if (p == "kertas") {
    if (comp == "batu") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
    //   hasil = comp == "gunting" ? "KALAH" : "MENANG";
  } else {
    hasil = "gak bisa ngetik yah.. tulis sing bener ya !!";
  }
  alert(nama + ", Kamu memilih " + p + " Dan Syaifudin memilih " + comp + "\nkamu " + hasil);

  tanya = confirm("Main Lagi??");
}
