const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}

cekHariKerja("rabu")
    .then((result) => console.log(result))//fullfilled,  menangkap nilai resolve(cek)
    .catch((error) => console.log(error.message)) //handle error, menangkap error atau nilai reject

const cekHari = async (day) => {
    try { //untuk menentukan blok kode yang akan diuji untuk kesalahan ketika sedang dieksekusi
        let result = await cekHariKerja(day)
        console.log(result)
    } catch (err) { //menangkap error yang terjadi pada blok Try , nilai dari parameter didapatkan dari reject
        console.log(err.message)
    }
}
cekHari("minggu")