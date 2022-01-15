const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const lista = document.querySelector('#listinha');
const nomePersonagem = document.querySelector('#nome');
const especiePersonagem = document.querySelector('#especie');
const condicaoPersonagem = document.querySelector('#vivooumorto');

gerarValorAleatorio = () => {
    return Math.floor((Math.random() + 0.7) * 2);
        
}



puxarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    /*if (numeroAleatorio <= 0.33) {
        var numerim = 1;
    } elseif (numeroAleatorio <= 0.66) {
        var numerim = 2;
    } else {
        var numerim = 3;
    }

    if (numerim == 1) {
        var alttxt = 'é o rick';
    } elseif (numerim == 2) {
        var alttxt = 'é o morty';
    } else {
        var alttxt = 'é a mulher';
    } */
        
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image; 
        imagem.alt = 'teste';        
        botao.innerHTML = "conhecer o próximo Personagem > >";
        nomePersonagem.innerHTML = numeroAleatorio;
        especiePersonagem.innerHTML = data.species;
        condicaoPersonagem.innerHTML = data.status;
    })
}

botao.onclick = puxarPersonagem; 
