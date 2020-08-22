const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August',
            'September', 'October', 'November', 'December'
        ]
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Terjadi kesalahan'))
        }
    }, 4000)
}
getMonth((err, response) => {
    if (!err) {
        response.map((data) => console.log(data))
    } else {
        console.log(err.message)
    }
})