const sorting = (number) => {
    return number.split('').sort().join('')
}
const divideAndSort = (numbers) => {
    let divide = numbers.toString().split('0')
    let hasil = divide.map(sorting).join('')
    console.log(parseInt(hasil))
}
divideAndSort(5956560159466056)