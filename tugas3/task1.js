fruits = ["jambu", "pisang", "belimbing", "anggur"]
console.log(fruits)

//1 Menambahkan satu atau lebih elemen ke akhir larik dan mengembalikan panjang larik yang baru.
fruits.push("jeruk")
console.log(`1. ${fruits}`)

//2 Menghapus elemen terakhir dari array dan mengembalikan elemen itu.
fruits.pop()
console.log(`2. ${fruits}`)

//3 Mengurutkan elemen array.
fruits.sort()
console.log(`3. ${fruits}`)

//4  Menambah dan / atau menghapus elemen dari larik.
fruits.splice(3, 0, "semangka"); //Add
console.log(`4. ${fruits}`)

// Remove
hasil4 = fruits.splice(2, 1);
console.log(`4. Hapus ${hasil4} = ${fruits}`)

//5 join = Menggabungkan semua elemen array menjadi string.
hasil5 = fruits.join(" dan ")
console.log(`5. ${hasil5}`)

//6 Membuang elemen dalam array berdasarkan kondisi yang ditetapkan.
search = "pisang"
hasil4 = fruits.filter((fruit) => fruit === search)
if (hasil4.length > 0) {
    console.log("6. Ada")
} else {
    console.log("6. Tidak ada")
}

//7 Mengekstrak bagian dari string dan mengembalikan string baru.
hasil7 = fruits.slice(1, 2)
console.log(`7. ${hasil7}`)

//8 Memanggil fungsi untuk setiap elemen dalam larik.
hasil8 = fruits.forEach((fruit) => console.log(fruit))

nama = "Saya mengikuti bootcamp Arkademy"
//9 Menjalankan pencarian untuk kecocokan antara ekspresi reguler dan string yang ditentukan.
hasil9 = nama.search("bootcamp")
console.log(`9. ${hasil9}`)


let persons = [
    {
        firstname: "Arif",
        lastname: "Hidayat"
    },
    {
        firstname: "Bambang",
        lastname: "Prasetyo"
    },
    {
        firstname: "Nadia",
        lastname: "Putri"
    }
];
//10 Membuat array baru dengan hasil pemanggilan fungsi yang disediakan pada setiap elemen dalam array ini.
const getFullName = (item) => {
    let fullname = [item.firstname, item.lastname].join(" ");
    return fullname;
}

hasil10 = persons.map(getFullName)
console.log(hasil10)