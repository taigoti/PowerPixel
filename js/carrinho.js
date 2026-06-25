// ── Usuário logado ────────────────────────────────────────────
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  document.querySelector(".nav-login").innerHTML = `
    <img src="${usuario.foto || "../images/user.png"}" alt="Usuário">
    <a href="perfil.html">Olá, ${usuario.nome}</a>
  `;
}

// ── Dados do carrinho ─────────────────────────────────────────
const carrinho  = JSON.parse(localStorage.getItem("carrinho")) || [];
const area      = document.getElementById("carrinhoProdutos");
const totalTexto = document.getElementById("total");

let total = 0;

// Converte "R$ 1.999,90" → 1999.90
function precoParaNumero(preco) {
  return Number(
    preco
      .replace("R$", "")
      .replace(/\./g, "")
      .replace(",", ".")
      .trim()
  );
}

// ── Renderiza os itens do carrinho ────────────────────────────
function renderizarCarrinho() {
  area.innerHTML = "";
  total = 0;

  if (carrinho.length === 0) {
    area.innerHTML = `<p style="color:#888; font-size: var(--font-base);">Seu carrinho está vazio.</p>`;
    totalTexto.innerText = "Total: R$ 0,00";
    return;
  }

  carrinho.forEach((produto, i) => {
    total += precoParaNumero(produto.preco);

    area.innerHTML += `
      <div class="card">
        <img
          src="${produto.imagem || "../images/PowerPixel.png"}"
          alt="${produto.nome}"
          onerror="this.src='../images/PowerPixel.png'"
        >
        <div class="card-info">
          <h3>${produto.nome}</h3>
          <p class="price">${produto.preco}</p>
        </div>
        <button class="card-excluir" onclick="excluir(${i})" title="Remover">✕</button>
      </div>
    `;
  });

  totalTexto.innerText = `Total: R$ ${total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

renderizarCarrinho();

// ── Excluir item ──────────────────────────────────────────────
function excluir(i) {
  carrinho.splice(i, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  renderizarCarrinho(); // re-renderiza sem recarregar a página
}

// ── Barra de pesquisa ─────────────────────────────────────────
document.getElementById("find").addEventListener("input", (e) => {
  const valor = e.target.value.toLowerCase();

  document.querySelectorAll("#carrinhoProdutos .card").forEach((card) => {
    const nome = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = nome.includes(valor) ? "flex" : "none";
  });
});
