// Depende de: dados.js (carregado antes no HTML)
// listaProdutos é declarada globalmente em dados.js

// ── Usuário logado ────────────────────────────────────────────
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  document.querySelector(".nav-login").innerHTML = `
    <img src="${usuario.foto || "images/user.png"}" alt="Usuário">
    <a href="pages/perfil.html">Olá, ${usuario.nome}</a>
  `;

  const navMobileLogin = document.querySelector(".nav-mobile-login");
  const fotoUsuario = usuario.foto || "images/user.png";
  const perfilUrl = "pages/perfil.html";

  navMobileLogin.href = perfilUrl;
  navMobileLogin.classList.add("is-logged");
  navMobileLogin.innerHTML = "";

  const imagemMobile = document.createElement("img");
  imagemMobile.src = fotoUsuario;
  imagemMobile.alt = "Usuario";

  const textoMobile = document.createElement("span");
  textoMobile.textContent = `Ol\u00e1, ${usuario.nome}`;

  navMobileLogin.append(imagemMobile, textoMobile);
}

// ── Renderiza os cards na grid ────────────────────────────────
const grid = document.getElementById("grid");

// index.html está na raiz → imagens em images/
grid.innerHTML = listaProdutos
  .map(
    (p) => `
    <div class="card">
      <img src="images/${p.imagem}" alt="${p.alt}">
      <h3>${p.nome}</h3>
      <p class="price">${p.preco}</p>
      <button class="comprar">Comprar</button>
    </div>`,
  )
  .join("");

// ── Adicionar ao carrinho ─────────────────────────────────────
grid.addEventListener("click", (e) => {
  if (!e.target.classList.contains("comprar")) return;

  const card = e.target.parentElement;
  const nome = card.querySelector("h3").innerText;
  const preco = card.querySelector("p").innerText;
  const imagem = card.querySelector("img").src;

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({ nome, preco, imagem });
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  alert("Produto adicionado ao carrinho!");
});

// ── Barra de pesquisa ─────────────────────────────────────────
document.getElementById("find").addEventListener("input", (e) => {
  const valor = e.target.value.toLowerCase();

  document.querySelectorAll(".card").forEach((card) => {
    const nome = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = nome.includes(valor) ? "flex" : "none";
  });
});

const hamburger = document.getElementById("hamburger");
const navigation = document.getElementById("navigation");

hamburger.addEventListener("click", () => {
  const aberto = navigation.classList.toggle("open");
  hamburger.classList.toggle("active", aberto);
  hamburger.setAttribute("aria-expanded", aberto);
});

// Fecha o menu ao clicar em qualquer link dentro dele
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Fecha o menu ao clicar fora do header
document.addEventListener("click", (e) => {
  if (!e.target.closest("header")) {
    navigation.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
});
