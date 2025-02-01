# Amigo Secreto

Esse projeto é um site simples para fazer sorteio de Amigo Secreto. Ele foi feito com HTML, CSS e JavaScript e é bem fácil de usar. Dá pra adicionar nomes, sortear e garantir que ninguém seja sorteado mais de uma vez.

## O que dá pra fazer

- Adicionar os nomes dos amigos que vão participar da brincadeira.
- Sortear um amigo secreto aleatoriamente.
- Cada nome só pode ser sorteado uma vez.
- Os nomes sorteados não somem da tela (pra manter o segredo! :P).
- Avisa quando todo mundo já foi sorteado.

## Ferramentas usadas

- **HTML**: Estrutura do site.
- **CSS**: Deixa o site bonito.
- **JavaScript**: Faz tudo funcionar.

## Como usar

1. Baixe os arquivos ou clone este repositório.
2. Abra o `index.html` no navegador.
3. Digite o nome dos participantes e clique em **Adicionar**.
4. Quando todos os nomes estiverem na lista, clique em **Sortear amigo**.
5. O nome sorteado aparece na tela. Cada nome só sai uma vez.
6. Quando acabar os nomes, aparece um aviso.

## Organização dos arquivos

```
/
|-- index.html  # Página principal
|-- style.css   # Estilos do site
|-- app.js      # Código JavaScript
|-- assets/     # Imagens e ícones
```

## Exemplo do código (JavaScript)

Aqui está a parte do sorteio:

```javascript
// Função para sortear um amigo
function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = '<p>Todos os amigos já foram sorteados!</p>';
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[indice];
        amigos.splice(indice, 1);
        resultado.innerHTML = '<p>Amigo secreto sorteado: <strong>' + sorteado + '</strong></p>';
    }
}
```

