function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let resp = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resp.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Faltam dados!')
    } else {
        resp.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <=0){
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c= i; c <= f; c += p) {
                resp.innerHTML += ` ${c} \u{1F449}`
            }
            
        } else {
            for(let c = i; c >= f; c-= p) {
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }

    
    
}