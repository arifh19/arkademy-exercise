global.fetch = require("node-fetch");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            console.log(element.name)
        });
    })
    .catch((err) => console.log(err.message))

// const getName = async (url) => {
//     try {
//         let response = await fetch(url);
//         let data = await response.json()
//         data.forEach(element => {
//             console.log(element.name)
//         });
//     } catch (err) {
//         console.log(err.message)
//     }
// }
// getName("https://jsonplaceholder.typicode.com/users")