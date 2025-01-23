let nomes = [];
let sorteados = [];


function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo');
    let nome = nomeAmigo.value.trim();

    if (nome === ""){
        alert('Inira o nome do seu amigo');
        return;
    }
    nomes.push(nome);
    console.log(nomes);

    nomeAmigo.value = "";
    exibirAmigos();
}

function exibirAmigos(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";
    console.log('Lista limpa');
   
    for (let i = 0; i < nomes.length; i++){
        let li = document.createElement('li')
        li.textContent = nomes[i]
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (nomes.length < 2 ){
        alert('Adicione nomes, para sortear mais amigos.');
        return;
    }
    let indiceAleatorio;
    while (true) {
      indiceAleatorio = Math.floor(Math.random() * nomes.length);
      if (!sorteados.includes(nomes[indiceAleatorio])) {
        break;
      }
    }
    
    // Agora que encontramos um índice válido, atribuímos o valor ao amigo secreto
    let amigoSecreto = nomes[indiceAleatorio];
    
    // E exibimos o resultado apenas uma vez
    let resultado = document.querySelector('#resultado');
    resultado.textContent = `O amigo secreto é ${amigoSecreto}, parabéns!`
}