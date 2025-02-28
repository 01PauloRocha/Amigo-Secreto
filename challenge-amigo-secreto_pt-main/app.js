// app.js

let amigos = [];

function adicionarAmigo() {
  let amigoInput = document.getElementById("amigo");
  let amigoNome = amigoInput.value.trim(); // Adicionado .trim() para remover espaços extras

  if (amigoNome === "") {
    alert("O campo está vazio e deve ser preenchido.");
  } else {
    amigos.push(amigoNome);
    atualizarListaAmigos();
    amigoInput.value = ""; // Limpa o input
  }
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar
  
}

  