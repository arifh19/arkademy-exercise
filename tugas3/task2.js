const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]
const callback = (hasil) => {
    console.log(hasil)
}
const searchName = (key, limit, callBackFn) => {
    hasil = names.filter((name) => name.toLowerCase().indexOf(key.toLowerCase()) != -1)
    return callBackFn(hasil.slice(0, limit))
}
searchName("an", 3, callback)