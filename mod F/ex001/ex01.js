let num = document.querySelector('input#fnum') //traz os dados de fnum para var num
let lista = document.querySelector('select#fLista') //traz o acesso a lista
let res = document.querySelector('div#res') //traz acesso a div que vai ter a resposta
let valores = [] //array, vetor vazio que vai ser utilizado para verificar os dados

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() { // função do botão adicionar
    if (isNumero(num.value) && !inLista(num.value, valores)){ //se for um número e não estiver na lista / !inlista = não estiver na lista
        valores.push(Number(num.value))
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}