const printSegitiga = 5;

if (typeof (printSegitiga) == 'number') {
    let hasil = '';
    for (i = printSegitiga; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            hasil = hasil + j
        }
        hasil = hasil + "\n"
    }
    console.log(hasil)
} else {
    console.log("Data harus number")
}
let str = "aa"