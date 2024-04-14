const botao = document.getElementById('calcular');
const div = document.getElementById('resultado');
const listaTaxa = document.getElementsByTagName("select")[0];
const listaTempo = document.getElementsByTagName("select")[1];

listaTaxa.addEventListener("change", changeOptionList1);
listaTempo.addEventListener("change", changeOptionList2);
botao.addEventListener('click', calcular);

let taxaSelecionada = listaTaxa.value;
let tempoSelecionado = listaTempo.value;

function calcular() {
    var capital = Number(document.getElementById('numero').value);
    var taxa = Number(document.getElementById('taxa-de-juro').value);
    var tempo = Number(document.getElementById('tempo').value);
    var juro = Number(document.getElementById('juro').value)
    
    let resultado = ''
    
    /*
    
    if (taxaSelecionada !== tempoSelecionado) {
        conversao();
    }
    
    function conversao() {
        if (taxaSelecionada == "Dias" && tempoSelecionado == "Meses") {
            tempo *= 30;
        } else if (taxaSelecionada == "Meses" && tempoSelecionado == "Dias"){
            tempo /= 30;
        } else if (taxaSelecionada == "Dias" && tempoSelecionado == "Anos"){
            tempo *= 365;
        } else if (taxaSelecionada == "Anos" && tempoSelecionado == "Dias") {
            tempo /= 365;
        } else if (taxaSelecionada == "Meses" && tempoSelecionado == "Anos") {
            tempo *= 12;
        } else if (taxaSelecionada == "Anos" && tempoSelecionado == "Meses") {
            tempo /= 12;
        }
    }
    
    function resultConvertion() {
           if (taxaSelecionada == "Dias" && tempoSelecionado == "Meses") {
            resultado = ""
        } else if (taxaSelecionada == "Meses" && tempoSelecionado == "Dias"){
            resultado *= 30
        } else if (taxaSelecionada == "Dias" && tempoSelecionado == "Anos"){
            resultado = ""
        } else if (taxaSelecionada == "Anos" && tempoSelecionado == "Dias") {
            resultado *= 365
        } else if (taxaSelecionada == "Meses" && tempoSelecionado == "Anos") {
            resultado = ""
        } else if (taxaSelecionada == "Anos" && tempoSelecionado == "Meses") {
            resultado *= 12
        }
    }
    
    */
    
    if (capital == 0) {
        resultado = juro / (taxa /100 * tempo);
    } else if (taxa == 0) {
       resultado = juro / (capital * tempo) * 100;
       // resultConvertion()
    } else if (tempo == 0) {
        resultado = juro / (capital * taxa/100);
       // resultConvertion()
    } else if (juro == 0) {
        resultado = capital * taxa /100 * tempo;
    } else {
        if (capital * taxa /100 * tempo == juro) {
            resultado = 'Verdadeiro';
        } else {
            resultado = 'Falso';
        }
    }
    
    div.textContent = resultado.toFixed(2);
}

function changeOptionList1() {
    taxaSelecionada = listaTaxa.value;
}

function changeOptionList2() {
    tempoSelecionado = listaTempo.value;
}