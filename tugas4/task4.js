const fetch = require("node-fetch")

const getData = async (url, callBackFn) => {
    try {
        let response = await fetch(url)
        let data = await response.json()
        return callBackFn(data)
    } catch (err) {
        console.log(err.message)
    }
}
const getName = (data) => {
    data.forEach(user => {
        console.log(user.name)
    });
}
getData("https://jsonplaceholder.typicode.com/users", getName)