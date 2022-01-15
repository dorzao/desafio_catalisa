const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const lista = document.querySelector('#listinha');
const nomePersonagem = document.querySelector('#nome');
const especiePersonagem = document.querySelector('#especie');
const condicaoPersonagem = document.querySelector('#vivooumorto');

gerarValorAleatorio = () => {
    return Math.ceil(Math.random() * 3);
        
}



puxarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
   
   if (numeroAleatorio == 1) {
        var alttxt = "é o rick";
    } else if (numeroAleatorio == 2) {
        var alttxt = "é o morty";
    } else {
        var alttxt = "é a mulher";
    } 
        
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image; 
        imagem.alt = alttxt;        
        botao.innerHTML = "Conheça mais personagens >> ";
        nomePersonagem.innerHTML = data.name;
        especiePersonagem.innerHTML = data.species;
        condicaoPersonagem.innerHTML = data.status;
    })
}

botao.onclick = puxarPersonagem; 
