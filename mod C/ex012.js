var hr = new Date().getHours()
var min = new Date().getMinutes()
var hora = hr
var minutos = min
console.log(`Agora são exatamente ${hora} hr e ${minutos} min.`)
if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora <= 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite..')
}