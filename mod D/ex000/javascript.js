let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
    console.log(`As variáveis número ${numeroUm} e a string ${stringUm} tem o mesmo valor, mas tipos diferentes`)
} else {
    console.log(`As variáveis número ${numeroUm} e a string ${stringUm} não tem o mesmo valor`)
}
if (numeroTrinta == parseInt(stringTrinta, Number)) {
    console.log(`As variáveis numero ${numeroTrinta} e string ${stringTrinta} tem o mesmo valor e mesmo tipo`)
} else {
    console.log(`As variáveis numero ${numeroTrinta} e string ${stringTrinta} não tem o mesmo tipo`)
}
if (numeroDez == stringDez) {
    console.log(`As variáveis número ${numeroDez} e string ${stringDez} tem o mesmo valor, mas tipos diferentes`)
} else {
    console(`As variáveis número ${numeroDez} e string ${stringDez} não tem o mesmo valor`)
}