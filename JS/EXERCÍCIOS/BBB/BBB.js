const mensagem = document.getElementById('msg')
const contador = document.getElementById('contador')
const botao = document.getElementById('Botao')

botao.addEventListener('click', contar)

function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)

    if (passo == 0 || inicio >= fim) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        contador.textContent = ''

while (inicio <= fim) {
    contador.textContent += inicio + ' \u{1F449} '
    inicio += passo
}
        contador.innerHTML += '\u{1F3C1}'
    }
}