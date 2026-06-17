// Pega usuário salvo
const usuario = JSON.parse(localStorage.getItem("usuario"));

// Se estiver logado
if (usuario) {
  document.querySelector(".nav-login").innerHTML = `
    
        <img src="${usuario.foto || "../images/user.png"}" alt="Usuário">

        <a href="perfil.html">
            Olá, ${usuario.nome}
        </a>

    `;
}

// Pega todos os botões com a classe "comprar"
const botoesComprar = document.querySelectorAll(".comprar");

// Percorre todos os botões
botoesComprar.forEach((botao) => {
  // Evento de clique no botão
  botao.addEventListener("click", () => {
    // Pega o card do produto
    const card = botao.parentElement;

    // Pega o nome do produto
    const nome = card.querySelector("h3").innerText;

    // Pega o preço do produto
    const preco = card.querySelector("p").innerText;

    // Cria um objeto com os dados do produto
    const produto = {
      nome: nome,
      preco: preco,
    };

    // Pega os produtos salvos no carrinho
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Adiciona o produto no carrinho
    carrinho.push(produto);

    // Atualiza o localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Mensagem de confirmação
    alert("Produto adicionado ao carrinho!");
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
});

const botoes = document.querySelectorAll(".filtro-btn");
const cards = document.querySelectorAll(".card");

botoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    botoes.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filtro = btn.dataset.filtro;
    cards.forEach((card) => {
      const visivel = filtro === "todos" || card.dataset.categoria === filtro;
      card.style.display = visivel ? "flex" : "none";
    });
  });
});
