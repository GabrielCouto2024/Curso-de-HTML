var botaoverificar = document.getElementById('verificar')
var msg = document.getElementById('msg')
var img = document.getElementById('IMAGE')

botaoverificar.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoDeNascimento = Number(document.getElementById('age').value)
    
    
    if (isNaN(anoDeNascimento) || anoDeNascimento <= 1930 || anoDeNascimento > anoAtual) {
    window.alert('Verifique os dados e tente novamente');
    } else {
        var sex = document.getElementsByName('gender')
        var idade = anoAtual - anoDeNascimento
        var genero =''
        if (sex[0].checked){
            genero='HOMEM'
            
            if ( idade > 0 && idade < 9) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_01.png'}
            else if (idade > 9 && idade < 16) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_03.png'}
            else if (idade > 16 && idade < 22) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_05.png'}
            else if (idade > 22 && idade < 32) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_07.png'}
            else if (idade > 32 && idade < 62) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_09.png'}
            else if (idade > 62 && idade < 90) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_11.png'}
            
        } else if (sex[1].checked) {
            genero='MULHER'
            
                 if (idade > 0 && idade < 9) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_02.png'}
    else if  (idade > 9 && idade < 16) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_04.png'}
    else if  (idade > 16 && idade < 22) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_06.png'}
    else if  (idade > 22 && idade < 32) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_08.png'}
    else if  (idade > 32 && idade < 62) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_10.png'}
    else if  (idade > 62 && idade < 90) {
        img.src='/storage/emulated/0/Novo/AAA/Picsart_06.png'}
    }
        else {
            window.alert('Verifique os dados e tente novamente')
            return;
        }
        msg.innerText= `  ${genero} COM ${idade} ANOS`
    }
}