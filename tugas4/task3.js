const animals = [
    'Ant', 'Buffalo', 'Butterfly',
    'Cat', 'Catfish', 'Caterpillar',
    'Dog', 'Dolphin', 'Fox',
    'Frog', 'Jellyfish', 'Lion',
    'Mouse', 'Rabbit', 'Rat', 'Swan'
]
const search = (data, key) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hasil = data.filter((item) => item.toLowerCase().indexOf(key.toLowerCase()) != -1)
            if (hasil.length > 0) {
                resolve(hasil)
            } else {
                reject(new Error('Data tidak ditemukan'))
            }
        }, 1000);
    })
}

const searchAnimal = async (data, key, limit) => {
    try {
        let hasil = await search(data, key)
        console.log(hasil.slice(0, limit))
    } catch (err) {
        console.log(err.message)
    }
}
searchAnimal(animals, "ca", 3)

const getCoffee = (seeds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Coffee didapatkan")
            } else {
                reject(new Error('Biji kopi habis!'))
            }
        }, 1000)
    })
}
const makeCoffee = async (seeds) => {
    try {
        const coffee = await getCoffee(seeds)
        console.log(coffee)
    } catch (err) {
        console.log(err.message)
    }
}
makeCoffee("5")