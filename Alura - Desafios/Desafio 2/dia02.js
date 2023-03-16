let nome = prompt('Qual seu nome? ')
let idade = prompt('Quantos anos você tem? ')
let lingProg = prompt('Qual linguagem de programação você está estudando? ')

alert(`Olá ${nome} , você tem ${idade} anos e está aprendendo ${lingProg}`)

let gosto = prompt(`Você gosta de estudar ${lingProg}? Responda [SIM] ou [NÃO].`).toUpperCase()

    if (gosto == 'SIM') {
        alert('Muito bom! Continue estudando e você terá muito sucesso;')
    } else {
        alert('Ahh que pena... Já tentou aprender outras linguagens? ')
    }