global.fetch = require("node-fetch");

const getName = async (url) => {
    try {
        let response = await fetch(url);
        let data = await response.json()
        data.forEach(element => {
            console.log(element.name)
        });
    } catch (err) {
        console.log(err.message)
    }
}
getName("https://jsonplaceholder.typicode.com/users")