let amigos = [];
let lista = document.getElementById('listaAmigos');

// Função para adicionar amigos
function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        alert("Você não pode deixar o espaço vazio!");
        return;
    } else {
        amigos.push(nome);
        limparCampo();
    }
    atualizarLista();   
}

// Função para limpar o campo
function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

// Função para atualizar a lista
function atualizarLista() {
    lista.innerHTML = ''; // Limpar a lista existente

    amigos.forEach(amigo => { // forEach() é um método de array que executa uma função para cada elemento do array.
        let item = document.createElement('li'); //cria um novo elemento HTML li (item de lista). Em resumo, esta linha cria um novo item de lista para cada amigo.
        item.textContent = amigo; // item.textContent define o texto dentro do elemento li
        lista.appendChild(item); //adiciona o elemento li (com o nome do amigo) como um filho do elemento lista. Em resumo, esta linha adiciona o item de lista à lista exibida na página.
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigo para realizar o sorteio!');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // esta linha de código seleciona um nome aleatório do array amigos e o armazena na variável amigoSorteado.
    resultado.innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

// Função para limpar a lista e recomeçar o sorteio
function limparLista() {
    amigos = [];
    atualizarLista();
    resultado.innerHTML = '';
}