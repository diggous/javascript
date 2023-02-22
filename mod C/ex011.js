var i = 66
console.log(`Você tem ${i} anos.`)
if (i < 16) {
    console.log('Não pode votar!')
} else if (i < 18 || i > 65) {
    console.log('Voto opcional!')
} else {
    console.log('Voto Obrigatório...')
}