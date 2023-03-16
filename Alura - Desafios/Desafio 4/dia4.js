let chute = ''
let num = 9
let acertou = true

for(c = 0; c < 3; c++){
    chute = prompt(`Chute um número. Você tem ${c} tentativas: `)
    if (chute == num){
        alert(`Parabéns você acertou, o número é ${num}`)
        acertou = false
        break
    }
    alert('Você errou, tente novamente.')
}