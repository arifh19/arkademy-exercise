let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

let hasil1 = {
    ...data,
    name: "Arif Hidayat",
    email: "arifh.py@gmail.com",
    hobby: ["travelling","coding","hiking"],
}
console.log(data)

console.log(hasil1)

const {street, city} = hasil1.address
console.log(`Street : ${street}`)
console.log(`City : ${city}`)