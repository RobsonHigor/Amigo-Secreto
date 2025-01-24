// Lista de amigos
let amigos = [];

// Adicionar um amigo à lista
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("#amigo").value.trim(); // Pega o nome do input e remove espaços extras

    if (nomeAmigo === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigos.push(nomeAmigo); // Adiciona o nome à lista
    document.querySelector("#amigo").value = ""; // Limpa o campo de entrada

    // Atualiza a lista de amigos na interface
    let item = document.createElement("li");
    item.textContent = nomeAmigo;
    document.querySelector("#listaAmigos").appendChild(item);

    alert(`Amigo "${nomeAmigo}" adicionado à lista!`);
}

// Sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos antes de realizar o sorteio!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio]; // Pega o amigo sorteado

    // Exibe o resultado
    document.querySelector("#resultado").innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

