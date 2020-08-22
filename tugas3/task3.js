const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal >= nilaiAkhir) {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    } else if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    } else {
        hasil = dataArray.filter((data) => data > nilaiAwal && data < nilaiAkhir)
        console.log(hasil.sort((a, b) => a - b))
    }
}
seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])