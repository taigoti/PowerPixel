// =============================================================
// PRODUTOS.JS — Dados e renderização dinâmica dos cards
// =============================================================

// ── Dados dos produtos ────────────────────────────────────────
const produtos = [
  {
    nome: "Teclado Mecânico Gamer - Knup",
    preco: "R$ 199,90",
    imagem: "../images/teclado.jpg.jpg",
    alt: "Teclado Mecânico Gamer",
    categoria: "periferico",
  },
  {
    nome: "Mouse Gamer RGB Redragon M612 Predator",
    preco: "R$ 99,90",
    imagem: "../images/mouse gamer rgb.jpg",
    alt: "Mouse Gamer RGB",
    categoria: "periferico",
  },
  {
    nome: "Gift Card",
    preco: "R$ 50,00",
    imagem: "../images/giftcard.jpg.webp",
    alt: "Gift Card",
    categoria: "giftcard",
  },
  {
    nome: "Monitor Gamer AOC 100Hz",
    preco: "R$ 700,00",
    imagem: "../images/monitor.jpg",
    alt: "Monitor Gamer AOC",
    categoria: "hardware",
  },
  {
    nome: "Mousepad Feminino 70x35 (Mitsuri)",
    preco: "R$ 39,90",
    imagem: "../images/mousepad mitsuri.jpg",
    alt: "Mousepad Mitsuri",
    categoria: "acessorio",
  },
  {
    nome: "Mousepad Masculino 70x35 (One Piece)",
    preco: "R$ 39,90",
    imagem: "../images/mousepad one piece.jpg",
    alt: "Mousepad One Piece",
    categoria: "acessorio",
  },
  {
    nome: "Mousepad Feminino 70x35 (Shinobu)",
    preco: "R$ 39,90",
    imagem: "../images/mousepad shinobu.jpg",
    alt: "Mousepad Shinobu",
    categoria: "acessorio",
  },
  {
    nome: "Mousepad Masculino 70x35 (One Piece) Vol. 2",
    preco: "R$ 39,90",
    imagem: "../images/mousepad one piece 2.jpg",
    alt: "Mousepad One Piece 2",
    categoria: "acessorio",
  },
  {
    nome: "PC Gamer Intel Core Ultra 5 225F, RX 590, 16GB DDR5, SSD 520GB",
    preco: "R$ 3.899,99",
    imagem: "../images/pc gamer.jpg",
    alt: "PC Gamer",
    categoria: "hardware",
  },
  {
    nome: "Console PlayStation 5 Edição Digital 825GB - Sony",
    preco: "R$ 4.099,99",
    imagem: "../images/console.webp",
    alt: "PlayStation 5",
    categoria: "hardware",
  },
  {
    nome: "Fone de Ouvido JBL Tune 500 Pure Bass Branco",
    preco: "R$ 149,99",
    imagem: "../images/fone.jpg",
    alt: "Fone JBL",
    categoria: "audio",
  },
  {
    nome: "Fone de Gatinho Headset Sem Fio Com Led Bluetooth",
    preco: "R$ 109,90",
    imagem: "../images/fone de gatinho.webp",
    alt: "Fone Gatinho",
    categoria: "audio",
  },
  {
    nome: "Pen Drive 256GB Kingston DataTraveler Exodia USB 3.2",
    preco: "R$ 179,99",
    imagem: "../images/pendrive.webp",
    alt: "Pen Drive Kingston",
    categoria: "acessorio",
  },
  {
    nome: "Microfone USB Gaming RGB, Condensador de Mesa/Braço",
    preco: "R$ 189,99",
    imagem: "../images/microfone.jpg",
    alt: "Microfone USB RGB",
    categoria: "audio",
  },
  {
    nome: "Webcam Full HD 1080p USB Câmera Stream Live",
    preco: "R$ 99,90",
    imagem: "../images/câmera.webp",
    alt: "Webcam Full HD",
    categoria: "periferico",
  },
  {
    nome: "Caixa de Som RGB para PC Gamer 6W RMS, USB e P2",
    preco: "R$ 45,90",
    imagem: "../images/caixa de som.jpg",
    alt: "Caixa de Som RGB",
    categoria: "audio",
  },
  {
    nome: "Cadeira Gamer Ergonômica Reclinável Giratória",
    preco: "R$ 599,90",
    imagem: "../images/cadeira gamer.webp",
    alt: "Cadeira Gamer",
    categoria: "acessorio",
  },
  {
    nome: 'PC Gamer Completo Intel Core i7, 16GB RAM, SSD 512GB, Monitor 19"',
    preco: "R$ 5.999,90",
    imagem: "../images/pc gamer completo.webp",
    alt: "PC Gamer Completo",
    categoria: "hardware",
  },
  {
    nome: "EPSON EcoTank L6270 - 4 Tintas, Wi-Fi Direct, Ethernet",
    preco: "R$ 2.449,90",
    imagem: "../images/impressora.jpg",
    alt: "Impressora EPSON",
    categoria: "periferico",
  },
  {
    nome: "Luz de Led RGB 10m de Tira USB e Bluetooth 5V",
    preco: "R$ 59,90",
    imagem: "../images/luz de led.jpg",
    alt: "Luz de Led RGB",
    categoria: "acessorio",
  },
];

// ── Renderização dos cards ────────────────────────────────────
const grid = document.getElementById("grid");

function renderizarCards(lista) {
  grid.innerHTML = lista
    .map(
      (p) => `
      <div class="card" data-categoria="${p.categoria}">
        <img src="${p.imagem}" alt="${p.alt}">
        <h3>${p.nome}</h3>
        <p class="price">${p.preco}</p>
        <button class="comprar">Adicionar ao Carrinho</button>
      </div>`
    )
    .join("");
}

// Renderiza todos os produtos ao carregar a página
renderizarCards(produtos);

// ── Usuário logado ────────────────────────────────────────────
const usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario) {
  document.querySelector(".nav-login").innerHTML = `
    <img src="${usuario.foto || "../images/user.png"}" alt="Usuário">
    <a href="perfil.html">Olá, ${usuario.nome}</a>
  `;
}

// ── Adicionar ao carrinho (delegação de evento no grid) ───────
grid.addEventListener("click", (e) => {
  if (!e.target.classList.contains("comprar")) return;

  const card = e.target.parentElement;
  const nome  = card.querySelector("h3").innerText;
  const preco = card.querySelector("p").innerText;

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.push({ nome, preco });
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

// ── Filtros por categoria ─────────────────────────────────────
document.querySelectorAll(".filtro-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filtro-btn").forEach((b) =>
      b.classList.remove("active")
    );
    btn.classList.add("active");

    const filtro = btn.dataset.filtro;

    document.querySelectorAll(".card").forEach((card) => {
      const visivel =
        filtro === "todos" || card.dataset.categoria === filtro;
      card.style.display = visivel ? "flex" : "none";
    });
  });
});
