const imagem = document.querySelector('img');
const botao = document.querySelector('button');
const lista = document.querySelector('ul');
const nomePersonagem = document.querySelector('#nome');
const especiePersonagem = document.querySelector('#especie');
const condicaoPersonagem = document.querySelector('#vivooumorto');


puxarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image; 
        botao.innerHTML = "conheça o próximo Personagem"
        nomePersonagem.innerHTML = data.name;
    })
}

botao.onclick = puxarPersonagem;