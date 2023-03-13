let num = [5, 8, 2, 9, 3]
num[2] = 6 // acrescenta o número 6 na posição 2
num.push(7) // acrescenta o número 7 na última posição
num.sort()  // coloca a array em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições`) //mostra quantas posições tem a variavel
console.log(`O primeiro valor do vetor é ${num[0]}`) // mostra quem está na posição 0
/*
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
*/
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}
