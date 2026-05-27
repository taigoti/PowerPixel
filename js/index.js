// Pega usuário salvo
const usuario = JSON.parse(localStorage.getItem("usuario"));

// Se estiver logado
if (usuario) {
  document.querySelector(".nav-login").innerHTML = `
        <img src="${usuario.foto || "images/user.png"}" alt="Usuário">
        <a href="pages/perfil.html">
            Olá, ${usuario.nome}
        </a>

    `;
}

// Pega a grid dos produtos
const products = document.getElementById("grid");

// Lista de produtos
const listaProdutos = [
  {
    imagem: "images/teclado.jpg.jpg",
    nome: "Teclado Mecânico Gamer - Knup",
    preco: "R$ 199,90",
  },

  {
    imagem: "images/mouse gamer rgb.jpg",
    nome: "Mouse Gamer RGB Redragon M612 Predator",
    preco: "R$ 99,90",
  },

  {
    imagem: "images/giftcard.jpg.webp",
    nome: "Gift Card",
    preco: "R$ 50,00",
  },

  {
    imagem: "images/monitor.jpg",
    nome: "Monitor Gamer AOC 100Hz",
    preco: "R$ 700,00",
  },

  {
    imagem: "images/mousepad mitsuri.jpg",
    nome: "Mousepad Feminino 70x35 (Mitsuri)",
    preco: "R$ 39,90",
  },

  {
    imagem: "images/mousepad one piece.jpg",
    nome: "Mousepad Masculino 70x35 (One Piece)",
    preco: "R$ 39,90",
  },

  {
    imagem: "images/mousepad shinobu.jpg",
    nome: "Mousepad Feminino 70x35 (Shinobu)",
    preco: "R$ 39,90",
  },

  {
    imagem: "images/mousepad one piece 2.jpg",
    nome: "Mousepad Masculino 70x35 (One Piece)",
    preco: "R$ 39,90",
  },

  {
    imagem: "images/pc gamer.jpg",
    nome: "Pc Gamer, Intel Core Ultra 5 225F, Radeon RX 590 8gb de RAM, 16GB DDR5, SSD 520GB",
    preco: "R$ 3.899,99",
  },

  {
    imagem: "images/console.webp",
    nome: "Console PlayStation 5 Edição Digital 825gb Branco - Sony",
    preco: "R$ 4.099,99",
  },

  {
    imagem: "images/fone.jpg",
    nome: "Fone de Ouvido JBL Tune 500 Pure Bass Branco, JBLT500WHT",
    preco: "R$ 149,99",
  },

  {
    imagem: "images/fone de gatinho.webp",
    nome: "Fone de Gatinho Headset Sem Fio Com Led Bluetooth",
    preco: "R$ 109,90",
  },

  {
    imagem: "images/pendrive.webp",
    nome: "Pen Drive 256gb Kingston DataTraveler Exodia, USB 3.2, Preto e Rosa - DTX/256GB",
    preco: "R$ 179,99",
  },

  {
    imagem: "images/microfone.jpg",
    nome: "Microfone USB Gaming RGB, Condensador de Mesa/Braço",
    preco: "R$ 189,99",
  },

  {
    imagem: "images/câmera.webp",
    nome: "Webcam Full Hd 1080p USB Câmera Stream Live Alta Resolução",
    preco: "R$ 99,90",
  },

  {
    imagem: "images/caixa de som.jpg",
    nome: "Caixa de Som RGB para Pc Gamer 6W RMS, Conexão USB e P2",
    preco: "R$ 45,90",
  },
  {
    imagem: "images/cadeira gamer.webp",
    nome: "Cadeira Gamer Ergonômica Reclinável Giratória",
    preco: "R$ 599,90",
  },

  {
    imagem: "images/pc gamer completo.webp",
    nome: "Pc Gamer Completo Intel Core i7 16gb de RAM, SSD 512gb, Monitor 19” Strong Tech",
    preco: "R$ 5.999,90",
  },

  {
    imagem: "images/impressora.jpg",
    nome: "EPSON Multifuncional EcoTank L6270 - 4 Tintas, Wi-Fi Direct, Ethernet, Preto",
    preco: "R$ 2.449,99",
  },

  {
    imagem: "images/luz de led.jpg",
    nome: "Luz de Led RGB 10m de Tira Conduzida 2835 USB e Bluetooth 5V",
    preco: "R$ 59,90",
  },
];

// Limpa a grid primeiro
products.innerHTML = "";

// Repete os produtos
for (let i = 0; i < 10; i++) {
  listaProdutos.forEach((produto) => {
    products.innerHTML += `
            <div class="card">
                <img src="${produto.imagem}">
                <h3>${produto.nome}</h3>
                <p>${produto.preco}</p>
                <button class="comprar">
                    Comprar
                </button>

            </div>

        `;
  });
}

// Botões comprar
const botoesComprar = document.querySelectorAll(".comprar");

botoesComprar.forEach((botao) => {
  botao.addEventListener("click", () => {
    const card = botao.parentElement;
    const nome = card.querySelector("h3").innerText;
    const preco = card.querySelector("p").innerText;
    const produto = {
      nome: nome,
      preco: preco,
    };

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produto);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
  });
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
