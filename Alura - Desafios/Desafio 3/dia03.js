let area = prompt('Deseja seguir para a área de Front-end ou Back-end? ').toUpperCase()
let foco = ''
if (area == 'FRONT-END' || area == 'FRONT END') {
    foco = prompt('Você prefere aprender React ou Vue? ')
} else if (area == 'BACK-END' || area == 'BACK END') {
    foco = prompt('Você deseja aprender C# ou Java? ')
} else {
    alert('Não compreendi, tente novamente.')
}

const espOuFull = prompt('Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack')
if (espOuFull == 1){
    alert(`Continue se especializando em ${foco} para dominar a área de ${area}!`)
} else if (espOuFull == 2) {
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${foco} se você quer se tornar Fullstack`)
} else {
    alert('Você não inseriu um valor válido!')
}

let msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite OK em caso positivo.').toLowerCase()
while(msg =='OK') {
    let nTec = prompt('Qual? ')
    alert(`${nTec} é realmente uma tecnologia muito legal!`)
    msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite OK em caso positivo.').toLowerCase()
}