var div = document.getElementById('kata');

var waktu = new Date();
var jam = waktu.getHours();
var tgl = waktu.getDate();
var bln = waktu.getMonth();
var thn = waktu.getFullYear();
var hr = waktu.getDay();

var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

document.write(hari[hr]+", "+tgl+" / "+bulan[bln]+" / "+thn+"<br>");
if (jam<=10) 
{
	document.write("Selamat pagi! Nikmati secangkir kopi atau teh, <br> dan persiapkan diri untuk menghadapi hari dengan semangat.");
}
else if (jam<=14) 
{
	document.write("Selamat siang! Waktu untuk merilekskan <br> pikiran sejenak dan menikmati momen ketenangan.");
}
else if (jam<=17) 
{
	document.write("Selamat sore! Ingatlah bahwa setiap hari <br> membawa kesempatan baru untuk tumbuh dan berkembang.");
}
else 
{
	document.write("Selamat Malam! <br> Waktu sudah berlalu panjang mari login dan mainkan <b>Valorant</b>");
}

function time() {
  var waktu = new Date();
  var s = waktu.getSeconds();
  var m = waktu.getMinutes();
  var h = waktu.getHours();
  div.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    
}

setInterval(time, 1000);