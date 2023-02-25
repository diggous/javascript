function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#515154'
    }
}