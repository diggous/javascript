function validar() {
    let nome = document.querySelector('input#nome').value
    let idade = document.querySelector('input#idade').value
    let ling = document.querySelector('input#lingprog').value
    let res = document.querySelector('div#saida')
    let perg = document.querySelector('div#perg')

    res.innerHTML = `Aguardando dados`

    if (nome.length == 0 || idade.length == 0 || ling.length == 0) {
        alert('Preencha as informações abaixo para ver o resultado!')
    } else {
        res.innerHTML = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${ling}`
        
    }
    
    
}