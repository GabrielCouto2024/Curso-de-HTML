const lista = document.getElementById('lista')
const botão = document.getElementById('botão')

botão.addEventListener('click', criar)

function criar() {
    var multiplicador = document.getElementById('produto').value
    var n = 1
    
    lista.innerHTML = ''

    if (multiplicador.length !== 0 ) {
        multiplicador = Number(multiplicador)
        while (n <= 10) {
            var conteudo = document.createElement('li')
            conteudo.textContent = (n + ' × ' + multiplicador + ' = ' + n*multiplicador)
            lista.appendChild(conteudo)
            n++
        }
    } else {
        window.alert('Digite um número válido')
    }
}