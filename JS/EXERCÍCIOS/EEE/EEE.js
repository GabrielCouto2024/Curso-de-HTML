function carregar() {
    const img = document.getElementById('img');
    const msg = document.getElementById('msg');
    const msg2 = document.getElementById('msg2');
    const back = document.getElementById('corpo');
    const data = new Date();
    const hora = data.getHours();

    msg.textContent =` São ${hora} horas` .toUpperCase();
    
    if (hora >= 0 && hora < 12) {
        msg2.innerHTML = 'BOM DIA !';
        img.src = '/storage/emulated/0/Novo/NEW WEBSITE/Picsart_24.png';
        back.style.backgroundColor = "cornflowerblue";
    } else if (hora >= 12 && hora < 18) {
        msg2.innerHTML = 'BOA TARDE !';
        img.src = '/storage/emulated/0/Novo/NEW WEBSITE/Picsart_21.png';
        back.style.backgroundColor = 'wheat';
    } else {
        msg2.innerHTML = 'BOA NOITE !';
        img.src = '/storage/emulated/0/Novo/NEW WEBSITE/Picsart_32.png';
        back.style.backgroundColor = 'dimGrey';
    }
}