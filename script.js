function hitungBeratBadanIdeal() {
    var tinggi = parseFloat(document.getElementById('tinggi').value);
    if (!isNaN(tinggi)) {
        var beratBadanIdeal = tinggi - 100 - ((tinggi - 100) * 0.1);
        var hasilElement = document.getElementById('hasil');
        hasilElement.innerText = 'Hasil Berat Badan Ideal Anda adalah: ' + beratBadanIdeal.toFixed(2) + ' kg';
    } else {
        alert('Mohon masukkan tinggi badan dengan benar.');
    }
}
