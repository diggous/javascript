let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

/*
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])


for (let pos = 0; pos < valores.length; pos++) {    //variavel pos inicia com 0, enquanto o pos for menor que o tamanho do vetor, o pos vai receber pos + 1
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {  // para cada posição em valores, irei mostrar o valores[pos]
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

