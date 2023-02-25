function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.querySelector('input#anonasc').value
    var res = document.querySelector('div#res')
    //var sexo = document.getElementsByTagName('radsex')
    //var fem = document.querySelector('input#femi')
    //var mas = document.getElementById('masc')
    if (fano.length == 0 || fano > ano) {
        alert('[ERRO] Verifique os dados informados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/h-criança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/h-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/h-adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/h-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/m-criança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/m-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/m-adulta.jpg')
            } else {
                img.setAttribute('src', 'imagens/m-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}