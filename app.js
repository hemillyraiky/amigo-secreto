//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar os nomes à lista
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value;

    // Ver se o nome não está vazio
    if (nome.trim() !== '') {
        amigos.push(nome); // Adiciona o nome ao array
        atualizarLista();  // Atualiza a lista exibida
        input.value = '';  // Limpa o campo de texto
    } else {
        alert('Por favor, insira um nome.');
    }
}

// Função para atualizar a lista exibida na tela
function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista anterior

    // Cria um item da lista para cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li); // Adiciona o item à lista
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = '<p>Todos os amigos já foram sorteados!</p>';
    } else {
        // Gera um índice aleatório
        let indice = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indice];

        // Remove o nome sorteado do array sem atualizar a lista exibida
        amigos.splice(indice, 1);

        resultado.innerHTML = '<p>Amigo secreto sorteado: <strong>' + sorteado + '</strong></p>';
    }
}
