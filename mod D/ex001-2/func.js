function contar() {
    var ini = document.querySelector('input#txti').value
    var fim = document.querySelector('input#txtf').value
    var pass = document.querySelector('input#txtp').value
    var res = document.querySelector('div#res')

    if (ini.length == 0 || fim.length == 0 || pass.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        i = Number(ini)
        f = Number(fim)
        p = Number(pass)
        if (p == 0) {
            res.innerHTML = 'Passo invaílido! Considerando PASSO 1'
            p = 1
        } 
        res.innerHTML = 'Contando \u{270D}: '
        if (i < f){
            for(c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } else if (i > f){
            for(c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        }
        res.innerHTML += '\u{1F595}'
    }
}