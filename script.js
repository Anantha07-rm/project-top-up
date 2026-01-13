let nominalTerpilih = 0;

function pilihNominal(jumlah) {
    nominalTerpilih = jumlah;
    console.log("Nominal dipilih: " + jumlah);
    // Tambahkan efek visual aktif di sini
}

function prosesTopUp() {
    const id = document.getElementById('userId').value;
    if (!id || nominalTerpilih === 0) {
        alert("Harap lengkapi User ID dan pilih nominal!");
        return;
    }
    alert("Pesanan ID: " + id + " dengan jumlah " + nominalTerpilih + " Diamond sedang diproses.");
}