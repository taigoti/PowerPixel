// Pega o botão com id "adicionar" do HTML
const botaoAdicionar = document.getElementById("adicionar");

if (usuario) {
  document.querySelector(".nav-login").innerHTML = `
        <img src="${usuario.foto || "../images/user.png"}" alt="Usuário">

        <a href="perfil.html">
            Olá, ${usuario.nome}
        </a>
    `;
}

// Adiciona um evento de clique no botão
botaoAdicionar.addEventListener("click", () => {
  // Pega o valor digitado no input do nome do produto
  const nome = document.getElementById("nomeProduto").value;

  // Pega o valor digitado no input do preço
  const preco = document.getElementById("precoProduto").value;

  // Pega a div onde os produtos serão exibidos
  const lista = document.getElementById("listaProdutos");

  // Cria um novo elemento <p>
  const produto = document.createElement("p");

  // Define o texto do parágrafo com nome e preço
  produto.innerText = `${nome} - R$ ${preco}`;

  // Adiciona o parágrafo dentro da div de produtos
  lista.appendChild(produto);
});

// Barra de pesquisa
const pesquisa = document.getElementById("find");

// Quando o usuário digitar
pesquisa.addEventListener("input", () => {
  // Pega o texto digitado e deixa minúsculo
  const valor = pesquisa.value.toLowerCase();

  // Pega todos os cards
  const cards = document.querySelectorAll(".card");

  // Percorre todos os produtos
  cards.forEach((card) => {
    // Pega o nome do produto
    const nomeProduto = card.querySelector("h3").innerText.toLowerCase();

    // Verifica se contém a palavra digitada
    if (nomeProduto.includes(valor)) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
});
