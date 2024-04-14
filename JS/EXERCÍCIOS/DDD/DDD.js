var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var lista = document.getElementById('lista');
var msg = document.getElementById('res');

var elements = [];

b1.addEventListener('click', add);
b2.addEventListener('click', verificar);

function add() {
    var nbr = Number(document.getElementById('NBR').value);

    if (nbr > -1 && nbr <= 100 && elements.indexOf(nbr) === -1) {
        elements.push(nbr);

        var opt = document.createElement('option');
        lista.appendChild(opt);
        opt.innerHTML = nbr;
    } else {
        window.alert('NÚMERO VÁLIDO OU JÁ ESTÁ NA LISTA');
    }
    document.getElementById('NBR').value = ''
    document.getElementById('NBR').focus()
}

function verificar() {
    if (elements.length < 2) {
        window.alert('DIGITE PELO MENOS DOIS NÚMEROS');
    } else {
        msg.innerHTML = 'NÚMEROS DIGITADOS: ' + elements + ' <br>';
        msg.innerHTML += 'NÚMERO DE ELEMENTOS: ' + elements.length + '<br>';
        
        elements.sort();
        
        msg.innerHTML += 'MENOR VALOR: ' + elements[0] + '<br>';
        msg.innerHTML += 'MAIOR  VALOR: ' + elements[elements.length - 1] + '<br>';
        
        var sum = 0;
        for (var pos = 0; elements.length > pos; pos++) {
            sum += elements[pos];
        }

        msg.innerHTML += 'SOMA ENTRE OS NÚMEROS: ' + sum + '<br>';
        msg.innerHTML += 'VALOR MÉDIO: ' + (sum / elements.length).toFixed(2) + '<br> <br>';
        
        var nwb = document.createElement('button')
        msg.appendChild(nwb)
        nwb.innerHTML = 'CLEAR'
        nwb.addEventListener('click', clear);
    }
}

function clear() {
    elements = [];
    msg.innerHTML = '';
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}