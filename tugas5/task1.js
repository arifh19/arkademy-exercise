let kata1 = "saya"
let kata2 = kata1.split('').reverse().join('')
if (kata1 === kata2) {
    console.log("Palindrom")
} else {
    console.log("Bukan Palindrom")

}