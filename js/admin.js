// =============================================================
// ADMIN.JS — Painel de gerenciamento de produtos PowerPixel
// Depende de: dados.js (carregado antes no HTML)
// =============================================================

// ── Sessão do usuário ─────────────────────────────────────────
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  document.querySelector(".nav-login").innerHTML = `
    <img src="${usuario.foto || "../images/user.png"}" alt="Usuário">
    <a href="perfil.html">Olá, ${usuario.nome}</a>
  `;
}

// ── Helpers de localStorage ───────────────────────────────────
function getExtras() {
  return JSON.parse(localStorage.getItem("produtosExtras") || "[]");
}

function salvarExtras(extras) {
  localStorage.setItem("produtosExtras", JSON.stringify(extras));
  // Sincroniza o array runtime para validações na mesma sessão
  todosProdutos.length = 0;
  todosProdutos.push(...listaProdutos, ...extras);
}

// ── Aviso de feedback ─────────────────────────────────────────
function mostrarAviso(msg, tipo) {
  const aviso = document.getElementById("adminAviso");
  aviso.textContent = msg;
  aviso.className = `admin-aviso ${tipo}`;
  setTimeout(() => {
    aviso.textContent = "";
    aviso.className = "admin-aviso";
  }, 3500);
}

// ── Renderiza a lista de todos os produtos ────────────────────
function renderizarLista() {
  const lista   = document.getElementById("listaProdutos");
  const extras  = getExtras();
  const busca   = (document.getElementById("buscaProduto")?.value || "").toLowerCase();

  lista.innerHTML = "";

  const base = listaProdutos.filter(p =>
    !busca || p.nome.toLowerCase().includes(busca)
  );

  const adicionados = extras.filter(p =>
    !busca || p.nome.toLowerCase().includes(busca)
  );

  if (base.length === 0 && adicionados.length === 0) {
    lista.innerHTML = `<p class="admin-vazio">Nenhum produto encontrado.</p>`;
    return;
  }

  // Produtos base (somente leitura)
  base.forEach((p) => {
    lista.innerHTML += `
      <div class="produto-item produto-base">
        <span class="produto-nome">${p.nome}</span>
        <span class="produto-preco">${p.preco}</span>
        <span class="produto-tag">Base</span>
      </div>`;
  });

  // Produtos adicionados pelo admin (editáveis)
  adicionados.forEach((p, i) => {
    // Índice real no array extras (não filtrado)
    const idxReal = extras.findIndex(e => e.nome === p.nome);
    lista.innerHTML += `
      <div class="produto-item produto-extra">
        <span class="produto-nome">${p.nome}</span>
        <span class="produto-preco">${p.preco}</span>
        <span class="produto-tag produto-tag-extra">Admin</span>
        <button class="btn-excluir-produto" onclick="excluirExtra(${idxReal})">Excluir</button>
      </div>`;
  });
}

// ── Adicionar produto ─────────────────────────────────────────
document.getElementById("adicionar").addEventListener("click", () => {
  const nome      = document.getElementById("nomeProduto").value.trim();
  const precoRaw  = document.getElementById("precoProduto").value.trim();
  const categoria = document.getElementById("categoriaProduto").value;
  const imagem    = document.getElementById("imagemProduto").value.trim();

  // Validação: campos obrigatórios
  if (!nome || !precoRaw) {
    mostrarAviso("Preencha ao menos o nome e o preço.", "erro");
    return;
  }

  // Validação: preço numérico
  const precoNum = parseFloat(precoRaw.replace(",", "."));
  if (isNaN(precoNum) || precoNum <= 0) {
    mostrarAviso("Insira um preço válido.", "erro");
    return;
  }

  // Validação: duplicata em toda a lista (base + extras)
  const jaExiste = todosProdutos.some(
    (p) => p.nome.toLowerCase() === nome.toLowerCase()
  );

  if (jaExiste) {
    mostrarAviso(`"${nome}" já existe no catálogo.`, "erro");
    return;
  }

  // Formata preço no padrão do projeto: "R$ 99,90"
  const precoFormatado = `R$ ${precoNum
    .toFixed(2)
    .replace(".", ",")}`;

  const novo = {
    nome,
    preco:     precoFormatado,
    imagem:    imagem || "PowerPixel.png",
    alt:       nome,
    categoria,
  };

  const extras = getExtras();
  extras.push(novo);
  salvarExtras(extras);

  // Limpa formulário
  document.getElementById("nomeProduto").value    = "";
  document.getElementById("precoProduto").value   = "";
  document.getElementById("imagemProduto").value  = "";

  mostrarAviso(`"${nome}" adicionado com sucesso!`, "sucesso");
  renderizarLista();
});

// ── Excluir produto admin ─────────────────────────────────────
function excluirExtra(i) {
  const extras = getExtras();
  const nome   = extras[i]?.nome;
  if (!nome) return;

  if (!confirm(`Remover "${nome}" do catálogo?`)) return;

  extras.splice(i, 1);
  salvarExtras(extras);
  renderizarLista();
  mostrarAviso(`"${nome}" removido.`, "sucesso");
}

// ── Busca na lista de produtos ────────────────────────────────
document.getElementById("buscaProduto").addEventListener("input", renderizarLista);

// ── Inicialização ─────────────────────────────────────────────
renderizarLista();
