// Pega usuário salvo
const usuario = JSON.parse(localStorage.getItem("usuario"));


// Se estiver logado
if (usuario) {
    document.querySelector(".nav-login").innerHTML = `
        <img src="images/user.png" alt="Usuário">

        <a href="pages/perfil.html">
            Olá, ${usuario.nome}
        </a>
    `;
}


// Pega os produtos salvos no localStorage
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


// Pega a área onde os produtos serão mostrados
const area = document.getElementById("carrinhoProdutos");


// Pega o elemento onde ficará o valor total
const totalTexto = document.getElementById("total");


// Variável para armazenar o total da compra
let total = 0;


// Função para converter preço em texto para número
function precoParaNumero(preco) {
    let valor = preco
        .replace("R$", "")   // tira R$
        .replace(/\./g, "")  // tira pontos de milhar
        .replace(",", ".")   // troca vírgula por ponto
        .trim();             // tira espaços extras

    return Number(valor);
}


// Percorre todos os produtos do carrinho
carrinho.forEach((produto, i) => {

    // Soma ao total
    total += precoParaNumero(produto.preco);

    // Adiciona o produto na tela
    area.innerHTML += `
        <div>
            <p>${produto.nome} - ${produto.preco}</p>

            <!-- Botão para excluir o produto -->
            <button onclick="excluir(${i})">
                Excluir
            </button>
        </div>
    `;
});


// Mostra o valor total formatado certinho em real
totalTexto.innerText = `Total: R$ ${total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
})}`;


//
// Função para excluir produto do carrinho
function excluir(i) {

    // Remove o produto do array
    carrinho.splice(i, 1);

    // Atualiza o localStorage
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    // Recarrega a página
    location.reload();
}


// Função para finalizar compra
function finalizar() {

    // Mensagem inicial do WhatsApp
    let msg = "Olá! Gostaria de finalizar minha compra:%0A%0A";

    // Adiciona os produtos na mensagem
    carrinho.forEach(produto => {
        msg += `${produto.nome} - ${produto.preco}%0A`;
    });

    // Adiciona o valor total
    msg += `%0ATotal: R$ ${total.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;

    // Abre o WhatsApp
    window.open(
        `https://wa.me/5585988842449?text=${msg}`,
        "_blank"
    );
}

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
        const nomeProduto = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        // Verifica se contém a palavra digitada
        if(nomeProduto.includes(valor)){

            card.style.display = "flex";

        } else {

            card.style.display = "none";

        }

    });

});