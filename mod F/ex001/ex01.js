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
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        soma = 0
        media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos < menor]){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> Somando todo os valores, temos: ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores adicionados é: ${media}.</p>`
    }
}