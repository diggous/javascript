function tabuada() {
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#tab')
    
    if(num.value.length == 0) {
        alert('Por favor, insira um número para ver a tabuada.')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${c} x ${n} = ${c * n}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        
    }
}