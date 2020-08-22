const mtk = 20;
const bahasaIndonesia = 70;
const bahasaInggris = 80;
const ipa = 90;

try {
    if (!mtk || !bahasaIndonesia || !bahasaInggris || !ipa) {
        console.log("Silahkan lengkapi nilai")
    } else {
        rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
        if (rataRata >= 90) {
            grade = "A";
        } else if (rataRata >= 80) {
            grade = "B";
        } else if (rataRata >= 70) {
            grade = "C";
        } else if (rataRata >= 60) {
            grade = "D";
        } else {
            grade = "E"
        }
        console.log(`Rata-rata = ${rataRata}`)
        console.log(`Grade = ${grade}`)
    }
} catch (err) {
    console.log(`Silahkan lengkapi nilai, error ${err}`)
}