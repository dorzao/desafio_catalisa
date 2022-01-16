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
        var alttxt = "Na imagem está Rick, com olhos serrados com expressão de descontentamento. Ele é um homem de pele branca, cabelos grisalhos e espetados, veste um jaleco e ao fundo é possível notar um quadro com uma casa desenhada.";
    } else if (numeroAleatorio == 2) {
        var alttxt = "Está Mórty, com uma expressão triste. Ele é um menino de pele branca, cabelo marrom, blusa de frio amarela. Ao fundo é possível notar paredes em colorações claras.";
    } else {
        var alttxt = "Na foto está Summer, de braços cruzados e com um olhar de lado. ela tem a pele branca, cabelos laranjados, batom vermelho, e usa uma blusinha de alsa rosa. Ao fundo é possível notar uma geladeira, paredes verdes e um forro de teto em uma coloração salmão.";
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
        if (data.species == 'Human') {especiePersonagem.innerHTML = 'Humano'}
        if (data.status == 'Alive') {condicaoPersonagem.innerHTML = 'Vivo'}
    })
}

botao.onclick = puxarPersonagem; 
